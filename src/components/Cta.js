import React from "react";
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
      <Button
        variant={variant}
        href={path}
        className={className}
        size={size}
        tabIndex={tabIndex}
      >
        {label}
      </Button>{" "}
    </>
  );
}

export default Cta;
