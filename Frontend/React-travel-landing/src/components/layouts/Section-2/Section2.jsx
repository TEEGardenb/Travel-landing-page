import React from "react";
import "./Section2.css";
import element_2 from "../../../../public/images/Element_2.png";
import element_4 from "../../../../public/images/WorthOfMoney-icon.svg";
import element_3 from "../../../../public/images/SignUp-icon.svg";
import element_5 from "../../../../public/images/ExcitingTravel-icon.svg";

const Section2 = () => {
  return (
    <div
      className="section_2-component container-fluid d-flex align-items-between"
      style={{
        background: "#f7f8fc",
        minHeight: "540px",
      }}
    >
      <div className="container d-flex flex-column align-items-center justify-content-evenly">
        <div className="title-container d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className="mt-4 mt-md-0">
            <h2 className="text-center">
              Things you need <span className="orange">to do</span>
            </h2>
            <p className="text-center">
              We ensure that you´ll embark on a perfectly planned, safe
              vacations at a price you can afford.
            </p>
          </div>
          <img src={element_2} alt="aviones" className="container-img" />
        </div>
        <div className="card-container d-md-flex justify-content-center align-items-center">
          <div className="card-1 card-section-2">
            <img src={element_3} alt="Sign Up logo" className="mb-4" />
            <div className="body-card">
              <h5>Sign Up</h5>
              <p>
                Completes all the work associated with planning and porcessing
              </p>
            </div>
          </div>
          <div className="card-2 card-section-2">
            <img src={element_4} alt="money logo" className="mb-4" />
            <div className="body-card">
              <h5>Worth of Money</h5>
              <p>
                After successfull access then book from exclusive deals &
                pricing
              </p>
            </div>
          </div>
          <div className="card-3 card-section-2">
            <img src={element_5} alt="travel logo" className="mb-4" />
            <div className="body-card">
              <h5>Exciting Travel</h5>
              <p>
                Start and explore a wide range of exciting travel experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
