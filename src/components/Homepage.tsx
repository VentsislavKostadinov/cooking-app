import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import FooterComponent from "./FooterComponent";
import { Container, Row, Col } from "react-bootstrap";
import api from "../assets/cooking-api.json";
import { useStyles } from "../assets/useStyle";
import hyperlinkIcon from "../assets/images/hyperlink-icon.png";
import PopUp from "./PopUp";

const Homepage = () => {
  const recipeIngredients = api?.recipes;
  const ingredients = api?.ingredients;
  const classes = useStyles();
  const [value, setValue] = useState<string>("");
  const [recipeDescription, setRecipeDescription] = useState<string[]>([]);
  const [steps, setSteps] = useState<number[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>(recipeIngredients);
  /* Modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setValue(value);

    let ingredientsSearch = [];
    ingredientsSearch = ingredients.filter((data) => {
      return data.name.toLowerCase().search(value.toLowerCase()) !== -1;
    });

    let recipeIngredientsSearch = [];
    recipeIngredientsSearch = recipeIngredients.filter((data) => {
      return data.title.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    setFilteredData(recipeIngredientsSearch);
  };

  const popUpData = {
    template1: {
      items: recipeDescription,
    },
  };

  return (
    <>
      <Container>
        <Navigation
          handleChange={handleChange}
          value={value}
          items={ingredients}
        />
      </Container>
      <Container className="mt-5 text-center">
        <Row className="gx-md-3 gx-4">
          {filteredData?.map((recipe) => {
            return (
              <Col
                md
                key={recipe.id}
                className={`m-3 p-4 m-1 position-relative  ${classes.boxShadow}`}
              >
                <h4>{recipe.title}</h4>
                <p className="text-start">{recipe.timeToPrepare}</p>
                <img src={recipe.image} alt="image" />
                <ul className="mt-3">
                  {recipe?.ingredients?.map(
                    (recipeElement: string, index: number) => {
                      return (
                        <li
                          key={index}
                          className={`text-start ${classes.listStyleType}`}
                        >
                          {recipeElement}
                        </li>
                      );
                    }
                  )}
                </ul>
                <div className="mt-4">
                  <img
                    className={`position-absolute ${classes.centerBottomRightIcon}`}
                    src={hyperlinkIcon}
                    alt="hyperlink-icon"
                    onClick={() => {
                      handleShow();
                      setRecipeDescription([]);
                      setSteps([]);
                      recipe?.preparationMethod?.filter(
                        (preparationText: any, index: number) => {
                          setSteps((step) => [...step, index + 1]);
                          setRecipeDescription((item) => [
                            ...item,
                            preparationText.text
                          ]);
                        }
                      );
                    }}
                  />
                </div>

                <PopUp
                  show={show}
                  handleClose={handleClose}
                  popUpData={popUpData}
                />
              </Col>
            );
          })}

          {filteredData.length === 0 && (
            <h3 className="text-center">No result data</h3>
          )}
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
};

export default Homepage;