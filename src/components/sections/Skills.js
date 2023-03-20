import React from "react";
import { Row, Col } from "react-bootstrap";
import Skill from "../Skill";
import "./Skills.css";

function Skills({ index, title, skills }) {
  return (
    <section key={index} className="Skills">
      <h3 className="Skills-head">{title}</h3>
      <div className="Skills-content Section-content">
        <Row>
          {skills.map((skill) => {
            return (
              <Col key={skill.id}>
                <Skill {...skill} />
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default Skills;
