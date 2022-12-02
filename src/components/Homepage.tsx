import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import FooterComponent from "./FooterComponent";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import api from "../assets/cooking-api.json";
import { useStyles } from "../assets/useStyle";
import hyperlinkIcon from "../assets/images/hyperlink-icon.png";

const Homepage = () => {
  const classes = useStyles();
  const [value, setValue] = useState<String>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  /* Modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Navigation handleChange={handleChange} value={value} />
      </Container>
      <Container className="mt-5 text-center">
        <Row className="gx-md-3 gx-4">
          {api?.recipes?.map((recipe) => {
            return (
              <Col
                md
                key={recipe.id}
                className={`m-3 p-4 m-1 position-relative  ${classes.boxShadow}`}
              >
                <h4>{recipe.title}</h4>
                <p className="text-start">{recipe.timeToPrepare}</p>
                <img src={recipe.image} />
                <ul className="mt-3">
                  {recipe?.ingredients?.map((recipeElement, index) => {
                    return (
                      <li
                        key={index}
                        className={`text-start ${classes.listStyleType}`}
                      >
                        {recipeElement}
                      </li>
                    );
                  })}
                </ul>

                <ul>
                  {recipe?.preparationMethod?.map((recipeEl, index) => (
                    <li key={index}>
                      {recipeEl.step} {recipeEl.text}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <img
                    className={`position-absolute ${classes.centerBottomRightIcon}`}
                    src={hyperlinkIcon}
                    alt="hyperlink-icon"
                    onClick={handleShow}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
};

export default Homepage;
