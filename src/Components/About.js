import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-back.jpg";
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
        <h1 className="primary-heading">
         Who We Are: Passionate Pioneers in Beverage Excellence
        </h1>
        <p className="primary-text">
        At ROH, we're not just in the business of beverages; we're in the business of crafting 
        unforgettable moments. Founded by a team of passionate pioneers in the world of libations, we embarked 
        on a mission to redefine the beverage experience. Our journey started with a simple idea: 
        to bring the finest and most diverse selection of beverages to your doorstep.
        </p>
        <p className="primary-text">
        Join us in raising a glass to the art of beverage craftsmanship, the joy of exploration, and 
        the magic that happens when the perfect drink meets the perfect moment. Welcome to ROH, 
        where every sip is a journey, and every bottle is a story waiting to be shared."
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
