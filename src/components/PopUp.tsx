import React from "react";
import { Modal } from "react-bootstrap";
import { useStyles } from "../assets/useStyle";

const PopUp = (props: any) => {
  const classes = useStyles();
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton className="border-bottom-0">
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {Object.keys(props.popUpData).map((data, index) => {
            return (
              <>
                {props.popUpData[data].items.map(
                  (item: string, index: number) => {
                    return (
                      <ol className={classes.ol} key={index}>
                      <li key={index} className={classes.li}>
                        {" "}
                        {item}
                      </li>
                      </ol>
                    );
                  }
                )}
              </>
            );
          })}
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;
