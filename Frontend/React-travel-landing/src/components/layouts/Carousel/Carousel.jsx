import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//
import { Link } from "react-router-dom";

// import de imagenes
import star from "../../../../public/images/star.png";
import map from "../../../../public/images/map.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Estilos del carousel
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// import del imageMapping
import idToImage from "../../../../public/imageMapping";

// Carousel de descuentos ;-)
export default function Carousel() {
  // Obtener informacion de la API con async await
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
  const destinosConDescuento = data.filter(
    (destino) => destino.descuento === true
  );
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
        {destinosConDescuento.map((destino) => (
          <SwiperSlide key={destino.id} className="mb-3">
            <div className="card-1 card-section-3">
              <div className="img-container">
                <div className="div-effect"></div>
                <Link to={`/Destino/${destino.id}`}>
                  <button className="btn-color">Book Now</button>
                </Link>
                <img
                  src={idToImage[destino.id]}
                  className="img-div-effect"
                  alt={destino.ciudad}
                />
              </div>
              <div className="card-body p-2">
                <div className="d-flex justify-content-between">
                  <h5>{destino.ciudad}</h5>
                  <span className="d-flex align-items-center">
                    <img src={star} className="me-2" alt="star" />
                    {destino.rating}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="d-flex align-items-center">
                    <img src={map} alt="map" />
                    {destino.pais}
                  </span>
                  <span>
                    <span className="price me-3">
                      ${destino.precio_original}
                    </span>
                    <span className="orange">
                      ${destino.precio_con_descuento}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
