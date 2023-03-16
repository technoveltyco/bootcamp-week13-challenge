import React from "react";
import { Container } from "react-bootstrap";
import Bio from "../Bio";
import Skills from "../sections/Skills";
import skillsContent from "../content/skills";
import "./About.css";

function About() {
  return (
    <div className="About">
      <Container fluid>
        <section className="Bio">
          <h1 className="Bio-head Section-header">Me / Myself</h1>
          <div className="Bio-content Section-content">
            <Bio />
          </div>
        </section>
        <section className="Skills">
          <h2 className="Skills-head Section-header">My Skills </h2>
          <div className="Skills-content Section-content">
            {Object.keys(skillsContent).map((title, index) => {
              return (
                <Skills
                  key={index}
                  index={index}
                  title={title}
                  skills={skillsContent[title]}
                />
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default About;
