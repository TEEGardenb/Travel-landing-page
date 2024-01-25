import React from "react";

import "./Section5.css";

//images
import Element_4 from "../../../../public/images/Element_4.png";
import perfil_photo from "../../../../public/images/Image_8.png";

const Section5 = () => {
  return (
    <div
      className="section_5-component"
      style={{
        background: "#f7f8fc",
        minHeight: "540px",
      }}
    >
      <div className="container-section-5 d-flex justify-content-center align-items-center">
        <section className="container d-flex flex-column flex-lg-row justify-content-center gap-5">
          <div className="container-card-1">
            <h2 className="Volkhov">
              What people say <span className="orange">about you</span>
            </h2>
            <p className="text-card-1">
              Our clients send us bunch of smiles with our services and we love
              them
            </p>
            <div>
              <img src="images/Btn-1.svg" alt="Btn-1" className="Btn" />
              <img src="images/Btn-2.svg" alt="Btn-2" className="Btn" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section5;
