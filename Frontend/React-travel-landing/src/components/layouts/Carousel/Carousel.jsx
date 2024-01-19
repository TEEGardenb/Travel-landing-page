import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import Image_1 from "../../../../public/images/Image_1.png";
import Image_2 from "../../../../public/images/Image_2.png";
import Image_3 from "../../../../public/images/Image_3.png";
import Image_4 from "../../../../public/images/Image_4.png";
import star from "../../../../public/images/star.png";
import map from "../../../../public/images/map.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel() {
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
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card-1 card-section-3">
            <div className="img-container">
              <div className="div-effect"></div>
              <button className="btn-color">Book Now</button>
              <img src={Image_1} className="img-div-effect" alt="Madrid" />
            </div>
            <div className="card-body p-2">
              <div className="d-flex justify-content-between">
                <h5>Madrid</h5>
                <span className="d-flex align-items-center">
                  <img src={star} className="me-2" alt="star" />
                  4.8
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="d-flex align-items-center">
                  <img src={map} alt="map" />
                  Spain
                </span>
                <span>
                  <span className="price me-3">$950</span>
                  <span className="orange">$850</span>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-2 card-section-3">
            <img src={Image_2} alt="Firenze" />
            <div className="card-body">
              <h5>Firenze</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-3 card-section-3">
            <img src={Image_3} alt="Paris" />
            <div className="card-body"></div>
            <h5>Paris</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-4 card-section-3">
            <img src={Image_4} alt="London" />
            <div className="card-body"></div>
            <h5>London</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-1 card-section-3">
            <img src={Image_1} alt="Madrid" />
            <div className="card-body"></div>
            <h5>Madrid</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-3 card-section-3">
            <img src={Image_3} alt="Paris" />
            <div className="card-body"></div>
            <h5>Paris</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
