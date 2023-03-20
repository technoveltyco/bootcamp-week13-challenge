import React from "react";
import Image from "react-bootstrap/Image";
import "./Avatar.css";

function Avatar() {
  return (
    <>
      <Image
        roundedCircle
        src="https://avatars.githubusercontent.com/u/2573750?s=400&u=64454e4b2e811edb5b470473cdd7a20ea25f5a63&v=4"
        alt="My GitHub avatar"
        className="Picture-github-avatar"
      ></Image>
    </>
  );
}

export default Avatar;
