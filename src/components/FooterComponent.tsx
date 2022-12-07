import React from "react";
import { useStyles } from "../style/useStyle";
import {Container} from "react-bootstrap";
import { Footer } from "../Inteface/Content";

const FooterComponent = () => {
    const classes = useStyles();
    const footerContent: Footer = {

        footer: {
        title: "Please don't try these recipes at home. We hope that they will inspire you to cook more, but consider that their main idea is your coding task for Devexperts.",
        subtitle: "Copyright © 2022. All right reserved"
        }
    }
    return (
        <footer className={`bg-white w-100 text-center ${classes.footer}`} style={{boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)"}}>
          <Container className="w-75">
          <p className="pt-4">{footerContent.footer.title}</p>
          <p>{footerContent.footer.subtitle}</p>
          </Container>
        </footer>
    )
}

export default FooterComponent;