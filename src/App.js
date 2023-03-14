import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import "./App.css";

const basename = "myportfolio-react";

function App() {
  return (
    <div className="Portfolio">
      <Router basename={basename}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="Page">
                <Home />
              </div>
            }
          />
          <Route
            path="about"
            element={
              <div className="Page">
                <About />
              </div>
            }
          />
          <Route
            path="work"
            element={
              <div className="Page">
                <Work />
              </div>
            }
          />
          <Route
            path="contact/*"
            element={
              <div className="Page">
                <Contact />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
