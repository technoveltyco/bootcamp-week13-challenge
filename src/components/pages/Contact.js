import React from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import ContactLinks from "../ContactLinks";
import ReachOut from "../sections/ReachOut";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <Row>
        <Col>
          <ReachOut />
        </Col>
        <Col>
          <div className="Contact-location py-4"></div>
          <iframe
            title="My location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340138946!2d-0.24168153443085844!3d51.52855824125855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1679309568520!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <ContactLinks reachOut="contact/#reach-out" />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
