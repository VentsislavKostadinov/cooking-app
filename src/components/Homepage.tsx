import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import FooterComponent from "./FooterComponent";
import { Container } from "react-bootstrap";

const Homepage = () => {
  const [value, setValue] = useState<String>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };


  return (
    <div>
      <Container>
        <Navigation
          handleChange={handleChange}
          value={value}
        />
      </Container>
      <FooterComponent />
    </div>
  );
};

export default Homepage;
