import React from "react";
import Home from "./HomePageComponents/Home";
import About from "./HomePageComponents/About";
import Work from "./HomePageComponents/Work";
import Contact from "./HomePageComponents/Contact";
import "./HomePageComponents/HomePageStyling.css"

const HomePage = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;
