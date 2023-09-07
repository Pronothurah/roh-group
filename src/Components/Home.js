import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/about-background.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Your Beverage Journey Begins Here
          </h1>
          <p className="primary-text">
          From Classics to Craft: <br/>
          Explore our diverse range of beverages, each one chosen to elevate your moments and enhance your 
          gatherings. Join us in celebrating the art of beverage craftsmanship and the joy of sharing great 
          tastes with great company. 
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
