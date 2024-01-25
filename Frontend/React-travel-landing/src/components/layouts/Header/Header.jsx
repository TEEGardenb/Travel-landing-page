import React from "react";
import "./header.css";
import image from "../../../../public/images/Image.png";
import tourist from "../../../../public/images/Group 1000003524.png";

const Header = () => {
  return (
    <div
      className="header-component container-xxl mt-3 mb-5 d-flex flex-column align-items-center"
      style={{
        background: "#fefcfb",
        minHeight: "540px",
      }}
    >
      <div className="row d-flex align-items-center mb-5">
        <div className="dos col-12 col-md-6 d-flex flex-column align-items-center mb-5 mb-md-0">
          <div className="container-left d-flex flex-column align-items-start gap-3 gap-md-2">
            <h1 className="tittle">
              Get started your exciting <span className="orange">journey </span>
              with us.
            </h1>
            <p className="header-text">
              A team of experienced tourism professionals will provide you with
              the best advice and tips for you desire place.
            </p>
            <button type="button" className="btn btn-primary">
              Discover Now
            </button>
          </div>
        </div>
        <div className="container-img col-12 col-md-6 d-flex justify-content-center">
          <img src={tourist} alt="tourist" className="tourist-img" />
          <img src={image} alt="ellipse" className="position ellipse-img" />
        </div>
      </div>
      <div
        className="explore-container d-flex flex-row align-items-center gap-3 flex-wrap"
        style={{
          background: "#fff",
        }}
      >
        <div className="card-header">
          <h5 className="cursor">location</h5>
          <p>Where are you going</p>
        </div>
        <div className="card-header">
          <h5 className="cursor">Date</h5>
          <p>When you will go</p>
        </div>
        <div className="card-header">
          <h5 className="cursor">Guest</h5>
          <p>Number of guest</p>
        </div>
        <button className="btn btn-primary">Explore Now</button>
      </div>
    </div>
  );
};

export default Header;
