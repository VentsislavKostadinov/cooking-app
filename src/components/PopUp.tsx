import React from "react";
import { Modal } from "react-bootstrap";

const PopUp = (props: any) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>
          {props.recipeDescription.map((el: string, i: number) => {
            return <li key={i}>{el}</li>;
          })}
        </ol>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default PopUp;
