import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Project from "../Project";
import projects from "../content/projects";

function Work() {
  return (
    <div className="Work">
      <h1>Portfolio </h1>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {projects.bootcamp.map((project, id) => {
            return <Project key={id} {...project}></Project>;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Work;
