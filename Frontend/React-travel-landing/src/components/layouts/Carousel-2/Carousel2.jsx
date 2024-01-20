import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
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

// import del imageMapping
import idToImage from "../../../../public/imageMapping";

export default function Carousel2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/post/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // filtrar la data con los descuentos
  const mayorRating = data.filter((r) => r.rating > 4);

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
          simulateTouch={false}
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
          {mayorRating.map((r) => (
            <SwiperSlide key={r.id} className="mb-3">
              <div className="card-1 card-section-4">
                <div className="img-container-carousel2">
                  <div className="div-effect-carousel2"></div>
                  <img
                    src={idToImage[r.id]}
                    className="img-div-effect"
                    alt="Rome"
                  />
                </div>
                <div className="card-body p-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5>
                      {r.ciudad}, {r.pais}
                    </h5>
                    <span className="orange size-carousel2">
                      ${r.precio_original}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="d-flex align-items-center gap-2">
                      <img src={NavIcon} alt="map" />
                      <p className="m-0">10 Days Trip</p>
                    </span>
                    <span>
                      <span className="d-flex align-items-center">
                        <img src={star} className="me-2" alt="star" />
                        {r.rating}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
