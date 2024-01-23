import React from "react";
import Logo from "../Assets/ROH AND BARRELS Logo-01.png";
import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { RiChat1Line } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const handleTwitterClick = () => {
    // Replace 'YOUR_TWITTER_USERNAME' with your actual Twitter username
    const twitterProfileUrl = "https://twitter.com/rohbarrel";
    window.open(twitterProfileUrl, "_blank");
  };
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="footer-logo" />
        </div>
        <div className="footer-icons">
        <a href="https://twitter.com/rohbarrel" onClick={handleTwitterClick}>
            <BsTwitter />
          </a>
          <IoLogoInstagram />
          <RiChat1Line/>
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Products</span>
          <span>Events</span>
          <span>Services</span>
        </div>
        <div className="footer-section-columns">
          <span>254 790 585 556 / <br/> 254 111 994 452</span>
          <span>rohbarrel@gmail.com</span>
          <span>roh@grinks.com</span>
          <span>contact@rohgroup.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
