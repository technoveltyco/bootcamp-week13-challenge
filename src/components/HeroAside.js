import React from "react";
import "./HeroAside.css";

function HeroAside({ children }) {
  return (
    <>
      <aside className="Hero-aside">{children}</aside>
    </>
  );
}

export default HeroAside;
