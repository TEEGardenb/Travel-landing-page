import React, { useRef, useEffect, useState } from "react";
// Hook de react-router-dom
import { useParams } from "react-router-dom";
// import del imageMapping
import idToImage from "../../../../public/imageMapping";

// import de imagenes
import star from "../../../../public/images/star.png";
import map from "../../../../public/images/map.png";

import "./VistaDestino.css";

const VistaDestino = () => {
  const { id } = useParams();
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    const fetchDestino = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/post/${id}`);
        const result = await response.json();
        setDestino(result);
      } catch (error) {
        console.error("Error fetching destination:", error);
      }
    };

    fetchDestino();
  }, [id]);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "#fefcfb",
        minHeight: "100vh",
      }}
    >
      {destino ? (
        <div className="card-1 card-section-3 VistaDestinoCard">
          <div className="img-container">
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
                <span className="price me-3">${destino.precio_original}</span>
                <span className="orange">${destino.precio_con_descuento}</span>
              </span>
            </div>
            <p>{destino.description}</p>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default VistaDestino;
