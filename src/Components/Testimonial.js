import React from "react";
// import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Customers Say</h1>
        <p className="primary-text">
        Don't just take our word for it – hear directly from those who have experienced the magic of our 
        carefully curated selection. Discover why our beverages have become an integral part of memorable 
        moments, celebrations, and everyday indulgence for so many.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {/* <img src={ProfilePic} alt="" /> */}
        <p>
        What truly sets ROH Group apart is their dedication to customer satisfaction. 
        Their team goes above and beyond to ensure a seamless shopping experience, 
        from selecting the perfect bottle to prompt and secure delivery
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Mbugua Munene</h2>
      </div>
    </div>
  );
};

export default Testimonial;
