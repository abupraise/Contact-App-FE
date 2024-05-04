import React from "react";
// import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/12079901_4912625-removebg.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Contact Manager</h1>
        <p className="primary-text">
          Manage and access your contacts effortlessly with our powerful contact
          manager. Organize, search, and update your network with ease, ensuring
          that every connection is just a click away.{" "}
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
