import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../Project";
import projects from "../../content/projects";

function Work() {
  return (
    <div className="Work">
      <h1 className="Work-head">Portfolio </h1>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {projects.bootcamp.reverse().map((project, id) => {
            return (
              <Col>
                <Project key={id} {...project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Work;
