import React from "react";
import Image from "react-bootstrap/Image";
import memoji from "../assets/img/My-Memoji-Component.png";
import "./Bio.css";

function Bio() {
  return (
    <>
      <section className="Bio">
        <h2 className="Bio-head">Me / Myself</h2>

        <Image
          src={memoji}
          alt="My memoji with laptop"
          className="Bio-memoji-laptop"
        ></Image>

        <p>
          I currently work in Drupal projects as a Backend Developer. I have
          strong expertise in PHP frameworks; and have worked in multifunctional
          teams, acquiring a broad knowledge in software development and agile
          methodologies. I have also participated in the design of RESTful APIs,
          integration of payment gateways and authentication protocols, and the
          design and implementation of microservices in cloud architectures.
        </p>

        <p>
          I have been in the Drupal community for a while now, and I am
          motivated by helping people to create excellent websites with a great
          user experience. In my spare time, I enjoy going out for cultural and
          sport activities. I like going to the cinema, theatre, training
          regularly and learning new skills.
        </p>

        <p>
          Currently undertaking a boot camp training in front-end development
          and also coursing an online specialisation in machine learning and
          deep learning.
        </p>
      </section>
    </>
  );
}

export default Bio;
