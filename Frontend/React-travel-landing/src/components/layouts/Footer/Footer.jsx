import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="section_4-component"
      style={{
        background: "#fefcfb",
        minHeight: "540px",
      }}
    >
      <div className="general-container-footer">
        <footer className="container">
          <section className="container-section-footer d-flex justify-content-center align-items-center mb-5">
            <img
              className="container-section-footer__img-1"
              src="images/Element_1.png"
              alt="Element_3"
            />
            <img
              className="Ellipse-19"
              src="images/Ellipse 19.png"
              alt="Ellipse"
            />
            <img
              className="Ellipse-19"
              src="images/Ellipse 20.png"
              alt="Ellipse"
            />
            <img
              className="Ellipse-19"
              src="images/Ellipse 21.png"
              alt="Ellipse"
            />
            <img
              className="Ellipse-19"
              src="images/Ellipse 22.png"
              alt="Ellipse"
            />
            <img
              className="Ellipse-19"
              src="images/Ellipse 23.png"
              alt="Ellipse"
            />
            <img
              className="Ellipse-19"
              src="images/Ellipse 24.png"
              alt="Ellipse"
            />
            <div className="contet-section-footer container d-flex flex-column">
              <h2 className="title-contet-section-footer text-center">
                Subscribe and get exclusive deals & offer
              </h2>
              <form action="#">
                <div className="input-container">
                  <input
                    className="input-field w-100 rounded-2 border-0 px-3"
                    type="email"
                    placeholder="Enter your mail"
                  />
                  <button className="btn__section-footer border-0 rounded-2 py-3 px-4">
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>
          <div className="general-container-content-footer d-flex flex-column flex-lg-row gap-4">
            <div className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start">
              <div>
                <img
                  className="logo mb-4"
                  src="images/Logo.png"
                  alt="Logo.png"
                />
              </div>
              <p className="copy-container__content">
                Book your trip in minute, get full control for much longer
              </p>
              <span>
                <img
                  src="images/facebook-icon.svg"
                  alt="facebook-icon"
                  className="img-section-6"
                />
                <img
                  src="images/instagram-icon.svg"
                  alt="instagram-icon"
                  className="img-section-6"
                />
                <img
                  src="images/twiter-icon.svg"
                  alt="twiter-icon"
                  className="img-section-6"
                />
              </span>
            </div>
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start">
              <li className="title-list">Company</li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Logistic</a>
              </li>
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
            </ul>
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start">
              <li className="title-list">Contact</li>
              <li>
                <a href="#">Help/FAQ</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Affilates</a>
              </li>
            </ul>
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start">
              <li className="title-list">More</li>
              <li>
                <a href="#">Press Cente</a>
              </li>
              <li>
                <a href="#">Our blog</a>
              </li>
              <li>
                <a href="#">Low fare tips</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="copy-container d-flex flex-row justify-content-between mb-5">
            <div className="copy-container__content w-50">
              Copyright, Trabook 2022. All rights reserved.
            </div>
            <div className="copy-container__content">Terms & Conditions</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
