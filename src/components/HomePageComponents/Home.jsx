import React from "react";
import BannerImage from "../../assets/11785881_4815481-removebg.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>
        <div className="home-text-section">
          <h1 className="primary-heading">Contacts at Your Fingertips</h1>
          <p className="primary-text">
            Effortless contact management with features that do the prep work
            for you—like sorting, categorizing, and updating—so you can stay
            connected effortlessly.
          </p>
          <Link to="/signup">
            <button className="secondary-button">
              Start Now <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
