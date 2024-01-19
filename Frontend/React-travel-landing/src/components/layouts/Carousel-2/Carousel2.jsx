import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import Image_6 from "../../../../public/images/Image_6.png";
import Image_2 from "../../../../public/images/Image_7.png";
import Image_3 from "../../../../public/images/Image_7.png";
import Image_4 from "../../../../public/images/Image_4.png";
import star from "../../../../public/images/star.png";
import NavIcon from "../../../../public/images/Navigation.png";
import btnPrev from "../../../../public/images/Btn-1.png";
import btnNext from "../../../../public/images/Btn-2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel2.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function Carousel2() {
  return (
    <>
      <div className="container-carousel2">
        <div className="container-swiper-btn d-xl-flex justify-content-between mb-4 d-md-none">
          <div className="swiper-button-prev">
            <img src={btnPrev} alt="btn-prev" />
          </div>
          <div className="swiper-button-next">
            <img src={btnNext} alt="btn-next" />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card-1 card-section-4">
              <div className="img-container">
                <div className="div-effect-carousel2"></div>
                <img src={Image_6} className="img-div-effect" alt="Rome" />
              </div>
              <div className="card-body p-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5>Rome, italy</h5>
                  <span className="orange size-carousel2">$5,42K</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="d-flex align-items-center gap-2">
                    <img src={NavIcon} alt="map" />
                    <p className="m-0">10 Days Trip</p>
                  </span>
                  <span>
                    <span className="d-flex align-items-center">
                      <img src={star} className="me-2" alt="star" />
                      4.8
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-2 card-section-4">
              <img src={Image_2} alt="Firenze" />
              <div className="card-body">
                <h5>Firenze</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-3 card-section-4">
              <img src={Image_3} alt="Paris" />
              <div className="card-body"></div>
              <h5>Paris</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-4 card-section-4">
              <img src={Image_6} alt="London" />
              <div className="card-body"></div>
              <h5>London</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-1 card-section-4">
              <img src={Image_6} alt="Madrid" />
              <div className="card-body"></div>
              <h5>Madrid</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-3 card-section-4">
              <img src={Image_3} alt="Paris" />
              <div className="card-body"></div>
              <h5>Paris</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
