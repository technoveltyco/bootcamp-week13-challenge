import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Skill from "../Skill";
import skills from "../content/skills";

function Skills() {
  return (
    <div>
      <h1>My Skills Page </h1>

      <h2>Back End</h2>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {skills.be.map((skill, id) => {
            return <Skill key={id} {...skill}></Skill>;
          })}
        </Row>
      </Container>

      <h2>Front End</h2>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {skills.fe.map((skill, id) => {
            return <Skill key={id} {...skill}></Skill>;
          })}
        </Row>
      </Container>

      <h2>DevOps</h2>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {skills.devops.map((skill, id) => {
            return <Skill key={id} {...skill}></Skill>;
          })}
        </Row>
      </Container>

      <h2>TDD (Test Driven Development)</h2>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {skills.tdd.map((skill, id) => {
            return <Skill key={id} {...skill}></Skill>;
          })}
        </Row>
      </Container>

      <h2>Agile Project Management</h2>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {skills.pm.map((skill, id) => {
            return <Skill key={id} {...skill}></Skill>;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
