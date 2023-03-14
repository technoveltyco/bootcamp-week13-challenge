import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Skill from "./Skill";
import skills from "./content/skills";

function Skills() {
  return (
    <>
      <section className="Skills">
        <h2>My Skills </h2>

        <h3>Back End</h3>
        <Container>
          <Row xs={1} md={2} className="g-4">
            {skills.be.map((skill, id) => {
              return <Skill key={id} {...skill}></Skill>;
            })}
          </Row>
        </Container>

        <h3>Front End</h3>
        <Container>
          <Row xs={1} md={2} className="g-4">
            {skills.fe.map((skill, id) => {
              return <Skill key={id} {...skill}></Skill>;
            })}
          </Row>
        </Container>

        <h3>DevOps</h3>
        <Container>
          <Row xs={1} md={2} className="g-4">
            {skills.devops.map((skill, id) => {
              return <Skill key={id} {...skill}></Skill>;
            })}
          </Row>
        </Container>

        <h3>TDD (Test Driven Development)</h3>
        <Container>
          <Row xs={1} md={2} className="g-4">
            {skills.tdd.map((skill, id) => {
              return <Skill key={id} {...skill}></Skill>;
            })}
          </Row>
        </Container>

        <h3>Agile Project Management</h3>
        <Container>
          <Row xs={1} md={2} className="g-4">
            {skills.pm.map((skill, id) => {
              return <Skill key={id} {...skill}></Skill>;
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Skills;
