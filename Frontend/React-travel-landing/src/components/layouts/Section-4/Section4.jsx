import React from "react";
import Carousel2 from "../Carousel-2/Carousel2";
import Element_3 from "../../../../public/images/Element_3.png";

const Section4 = () => {
  return (
    <div
      className="section_4-component"
      style={{
        background: "#fefcfb",
        minHeight: "540px",
      }}
    >
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="title-container d-flex flex-column flex-md-row align-items-center justify-content-center mb-4 mb-md-0">
          <div className="mt-4 mt-md-0">
            <h2 className="text-center">
              Best <span className="orange">vacation plan</span>
            </h2>
            <p className="text-center">
              Plan your perfect vacation with our travel agency. Choose among
              hundreds of all-inclusive offers!
            </p>
          </div>
          <img src={Element_3} alt="aviones" className="container-img" />
        </div>
      </div>
      <div className="container">
        <Carousel2 />
      </div>
    </div>
  );
};

export default Section4;
