import React from "react";
import { Container } from "react-bootstrap";
import Bio from "../Bio";
import Skills from "../Skills";
import "./About.css";

function About() {
  return (
    <>
      <Container>
        <Bio />
        <Skills />
      </Container>
    </>
  );
}

export default About;
