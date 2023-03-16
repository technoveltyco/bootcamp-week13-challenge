import React from "react";
import Image from "react-bootstrap/Image";
import memoji from "../assets/img/My-Memoji-Component.png";
import "./Bio.css";

function Bio() {
  return (
    <>
      <Image
        src={memoji}
        alt="My memoji with laptop"
        className="Bio-memoji-laptop"
      />

      <p>
        I have a strong expertise in PHP frameworks; and have worked in
        multifunctional teams, acquiring broad knowledge in software development
        and agile methodologies. I work on Drupal projects as a Backend
        Developer, and have also participated in the design of RESTful APIs, the
        integration of payment gateways and authentication protocols, and the
        design and implementation of microservices in cloud architectures.
      </p>

      <p>
        I have been in the Drupal community for a while now, and I am motivated
        by helping people to create excellent websites with a great user
        experience. In my spare time, I enjoy going out for cultural and sports
        activities. I like going to the cinema, theatre, training regularly and
        learning new skills.
      </p>

      <p>
        Currently undertaking a boot camp training in front-end development and
        also coursing an online specialisation in machine learning and deep
        learning.
      </p>
    </>
  );
}

export default Bio;
