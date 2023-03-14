import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../Hero";
import Cta from "../Cta";
import Avatar from "../Avatar";
import ContactLinks from "../ContactLinks";
import HeroAside from "../HeroAside";
import "./Home.css";

function Home({ basename }) {
  return (
    <header className="Hero">
      <Container fluid>
        <Row className="Hero-intro">
          <Col className="Intro-left">
            <Hero>
              <Cta
                label={"See My Work"}
                path={basename + "/work"}
                variant={"primary"}
                tabIndex="5"
              />
              <Cta
                label={"More About Me"}
                path={basename + "/about"}
                variant={"outline-primary"}
                tabIndex="6"
              />
            </Hero>
          </Col>
          <Col className="Intro-right">
            <HeroAside>
              <Avatar />
              <ContactLinks />
            </HeroAside>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Home;
