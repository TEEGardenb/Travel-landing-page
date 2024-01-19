import React from "react";
import Image_1 from "../../../../public/images/Image_1.png";
import Image_2 from "../../../../public/images/Image_2.png";
import Image_3 from "../../../../public/images/Image_3.png";
import Image_4 from "../../../../public/images/Image_4.png";
import Carousel from "../Carousel/Carousel";

const Section3 = () => {
  return (
    <div
      className="section_3-component"
      style={{
        background: "#fefcfb",
        minHeight: "540px",
      }}
    >
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="title-container-section-3 text-center mb-5">
          <h2>
            Exclusive <span className="orange">deals & discounts</span>
          </h2>
          <p>
            Discover our fantastic early booking discounts & start planning your
            journey
          </p>
        </div>
      </div>
      <div className="container">
        <Carousel />
      </div>
    </div>
  );
};

export default Section3;
