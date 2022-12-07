import React from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import tomatoImage from "../assets/images/tomato.png";
import tomatoCap from "../assets/images/tomato-cap.png";
import { Content } from "../Inteface/Content";
import { useStyles } from "../style/useStyle";

const Navigation = (props: any) => {
  const classes = useStyles();

  const navigationContent: Content = {
    navigation: {
      navMaintitle: "CookWell",
      navSecondaryTitle: "by devexperts",
      fieldsetLabel: "filter ingredients:",
      filterIngredientsText: "Filter ingredients",
    },
  };

  return (
    <Navbar
      expand="lg"
      className={`bg-white rounded-bottom ${classes.boxShadow}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="position-relative">
          <div className="row ms-2">
            <div className="col-md m-auto">
              <img src={tomatoImage} alt="tomato" />
              <img
                className={`position-absolute ${classes.imageTopPositioning}`}
                src={tomatoCap}
                alt="tomato-cap"
              />
            </div>
            <div className="col-md m-auto">
              <div className="pt-2 fs-6">
                {navigationContent.navigation.navMaintitle}
                <p className="fst-italic">
                  {navigationContent.navigation.navSecondaryTitle}
                </p>
              </div>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto">
            <fieldset
              className={props.value !== "" ? "reset border p-2" : null}
            >
              {props.value !== "" ? (
                <legend className="reset w-auto fs-6">
                  {navigationContent.navigation.fieldsetLabel}
                </legend>
              ) : null}

              <Form.Control
                list="ingredients"
                type="search"
                placeholder={navigationContent.navigation.filterIngredientsText}
                className="me-2"
                aria-label="Search"
                onChange={props.handleChange}
                onClick={props.handleClick}
                value={props.value}
              />
              <datalist id="ingredients">
                {props.items.map((ingrediment: any, index: number) => (
                  <option value={ingrediment.name} key={index} />
                ))}
              </datalist>
            </fieldset>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
