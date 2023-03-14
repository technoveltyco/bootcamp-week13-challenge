import React from "react";
import "./Hero.css";

function Hero({ children }) {
  return (
    <>
      <div className="Hero-content">
        <h1>
          <span>
            Hi there <span className="hand-wave">👋</span>! &nbsp;
          </span>
          <span>I am Daniel Rodríguez, &nbsp;</span>
          <span>a Senior Web Developer</span>
        </h1>
        <h2>
          <span>I am a Computer Engineer &nbsp;</span>
          <span>with more than 13 years of experience.</span>
        </h2>
        <p>
          <span>I am passionate about solving business problems, &nbsp;</span>
          <span>
            and want to make a difference by creating the best website
            experiences.
          </span>
        </p>
      </div>
      <div className="Hero-cta-buttons">{children}</div>
    </>
  );
}

export default Hero;
