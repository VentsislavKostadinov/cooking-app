import React from "react";
import { Modal } from "react-bootstrap";

const PopUp = (props: any) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton className="border-bottom-0">
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol className="custom-counter list-unstyled">
          {props.recipeDescription.map((el: string, i: number) => {
            return <li key={i} className="mb-2">{el}</li>;
          })}
        </ol>
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;
