const { Builder, By, Key, until } = require('selenium-webdriver');
const { SeleniumServer } = require('selenium-webdriver/remote');
const assert = require('chai').assert;
let driver = require('chromedriver');

const testNames = {
    describeName: "Cooking app simple tests",
    appTitle: "Read app page title",
    brandTitle: "Read brand title",
    searchPastaKeyword: "type 'pasta' ingredients word in search input",
    searchBlackBeansKeyword: "type 'black beans' ingredients word in search input",
    noResultDataSearchTestKeyword: "No search result on keyword 'black beans'",
    totalLengthOfBoxes: "total length of the boxes"
}

const keywords = {
    pageTitle: "Cooking app",
    brandTitle: "devexperts",
    ingredients: {
        pasta: "pasta",
        test: "test"
    },
    boxes: "centerBottomRightIcon-0-2-5"

} 

const selectors = {
    brandTitleSelector: ".fst-italic",
    searchInput: ".form-control",
    cards: ".p-4"
}

beforeEach(async () => {

    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://ventsislavkostadinov.github.io/cooking-app/');
    await driver.wait(until.urlIs('https://ventsislavkostadinov.github.io/cooking-app/'), 3000);

})

afterEach(async () => {
    await driver.sleep(3000);
    await driver.close();
})

describe(testNames.describeName, async () => {
    const isTrue = true;

    it(testNames.appTitle, async () => {
          const pageTitle = await driver.getTitle();
          assert.equal(pageTitle, keywords.pageTitle);
    });

    it(testNames.brandTitle, async () => {
        const brandTitle = await driver.findElement(By.css(selectors.brandTitleSelector)).getText();
        assert.include(brandTitle, keywords.brandTitle);
    });

    it(testNames.searchPastaKeyword, async () => {

       await driver.findElement(By.css(selectors.searchInput)).sendKeys(keywords.ingredients.pasta);
       const cards = await driver.findElements(By.css(selectors.cards));
       const notEmptyArray = cards.length > 0;
       assert.isTrue(isTrue, notEmptyArray);
    });
   
    it(testNames.noResultDataSearchTestKeyword, async () => {
        await driver.findElement(By.css(selectors.searchInput)).sendKeys(keywords.ingredients.test);
        const cards = await driver.findElements(By.css(selectors.cards));
        assert.lengthOf(cards, 0);
    });

    it(testNames.totalLengthOfBoxes, async () => {
        const boxes = await driver.findElements(By.className(keywords.boxes));
        assert.lengthOf(boxes, 8);
    });
})