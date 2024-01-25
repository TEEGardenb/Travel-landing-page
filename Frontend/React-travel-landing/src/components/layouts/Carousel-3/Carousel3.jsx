import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import de imagenes
import star from "../../../../public/images/star.png";
import map from "../../../../public/images/map.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel3.css";

// import required modules
import { Pagination } from "swiper/modules";

// import del imageMapping
import idToImage from "../../../../public/imageMapping";

// Carousel ;-)
export const Carousel3 = (props) => {
  const { consulta } = props;

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {consulta.map((destino) => (
          <SwiperSlide key={destino.id} className="mb-2">
            <div className="card-1 card-section-3">
              <div className="img-container-carousel3">
                <div className="div-effect-carousel3"></div>
                <img
                  src={idToImage[destino.id]}
                  className="img-div-effect"
                  alt={destino.ciudad}
                />
              </div>
              <div className="card-body p-2">
                <div className="text-size-carousel3 d-flex justify-content-between">
                  <p>{destino.description}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="d-flex align-items-center">
                    {destino.fecha_publicacion}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
