import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Cta.css";

function Cta({
  label,
  path,
  variant,
  tabIndex = 0,
  className = "Cta-btn",
  size = "lg",
}) {
  return (
    <>
      <Link to={path}>
        <Button
          variant={variant}
          href={path}
          className={className}
          size={size}
          tabIndex={tabIndex}
        >
          {label}
        </Button>{" "}
      </Link>
    </>
  );
}

export default Cta;
