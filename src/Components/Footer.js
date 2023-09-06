import React from "react";
// import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { RiChat1Line } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="footer-icons">
          <BsTwitter />
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
          <span>254-7123-45678</span>
          <span>rohgroup@drinks.com</span>
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
