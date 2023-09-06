import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Order Drinks",
      text: "Explore our diverse collection, from the classics to the rare and exceptional.",
    },
    {
      image: ChooseMeals,
      title: "Favorites List",
      text: "Create your personalized list of favorite drinks. Easily reorder your go-to beverages for a hassle-free shopping experience.",
    },
    {
      image: DeliveryMeals,
      title: "Swift Deliveries",
      text: "Enjoy the convenience of doorstep delivery. Our efficient delivery service ensures your order arrives promptly and in perfect condition.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Adios!</p>
        <h1 className="primary-heading">Discover, Sip, and Savor</h1>
        <p className="primary-text">
         Indulge your senses in a world of liquid luxury at ROH Group. 
         Our meticulously curated selection of beverages is a symphony of flavors, 
         a canvas of colors, and an invitation to unparalleled pleasure. 
         Each bottle holds a story, each sip unveils a new chapter.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
