import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  // manejo del email
  const [email, setEmail] = useState("");
  // manejo del evento de suscribirse
  const [suscrito, setSuscrito] = useState(false);
  //CSRF (Cross-Site Request Forgery) token CSRF para solicitudes POST desde el frontend
  const csrftoken = "...";

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/suscribir/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-CSRFToken": csrftoken,
        },
        body: new URLSearchParams({
          email: email,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Si la suscripción fue exitosa, actualiza el estado para mostrar el mensaje de éxito
        setSuscrito(true);
      } else {
        // Si hubo un error en la suscripción, puedes manejarlo aquí
        console.error(data.error || "Error desconocido en la suscripción");
      }
      console.log(data.message || data.error);
    } catch (error) {
      console.error("Error al enviar la suscripción:", error);
    }
  };
  return (
    <div
      className="section_4-component"
      style={{
        background: "#f7f8fc",
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
            <div className="contet-section-footer d-flex flex-column align-items-center px-4">
              {suscrito ? (
                <div>
                  <h2 className="title-contet-section-footer text-center">
                    Thanks for Suscribe
                  </h2>
                </div>
              ) : (
                <div>
                  <h2 className="title-contet-section-footer text-center">
                    Subscribe and get exclusive deals & offer
                  </h2>
                  <form action="#" className="w-100" onSubmit={handleSubmit}>
                    <div className="input-container">
                      <input
                        className="input-field w-100 rounded-2 border-0 px-3"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your mail"
                        onChange={(ev) => setEmail(ev.target.value)}
                      />
                      <button
                        className="btn__section-footer border-0 rounded-2 py-3 px-4"
                        type="submit"
                      >
                        subscribe
                      </button>
                    </div>
                  </form>
                </div>
              )}
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
                <Link to="https://www.facebook.com/">
                  <img
                    src="images/facebook-icon.svg"
                    alt="facebook-icon"
                    className="img-section-6 cursor-pinter"
                  />
                </Link>
                <Link to="https://www.instagram.com/">
                  <img
                    src="images/instagram-icon.svg"
                    alt="instagram-icon"
                    className="img-section-6 cursor-pinter"
                  />
                </Link>
                <Link to="https://twitter.com/">
                  <img
                    src="images/twiter-icon.svg"
                    alt="twiter-icon"
                    className="img-section-6 cursor-pinter"
                  />
                </Link>
              </span>
            </div>
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start ps-0 ps-lg-4">
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
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start ps-0 ps-lg-4">
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
            <ul className="content-footer_2 d-flex flex-column align-items-center align-items-lg-start ps-0 ps-lg-4">
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
