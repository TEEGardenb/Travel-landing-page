import React from "react";
import { useEffect, useState } from "react";
import { Carousel3 } from "../Carousel-3/Carousel3";

const Section6 = () => {
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
  // Obtener la fecha actual
  const today = new Date();

  // Calcular la fecha de hace una semana
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);

  // Formatear las fechas
  const todayFormatted = today.toISOString().split("T")[0];
  const lastWeekFormatted = lastWeek.toISOString().split("T")[0];

  // Filtra la data para obtener los destinos de la última semana
  const destinosConDescuento = data.filter(
    (destino) => destino.fecha_publicacion >= lastWeekFormatted
  );

  return (
    <div
      className="section_5-component"
      style={{
        background: "#fefcfb",
        minHeight: "540px",
      }}
    >
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="title-container-section-3 text-center mb-5">
          <h2>
            Get update with <span className="orange">latest blog</span>
          </h2>
        </div>
      </div>
      {/* Se pasa la data como props al Carousel */}
      <div className="container">
        <Carousel3 consulta={destinosConDescuento} />
      </div>
    </div>
  );
};

export default Section6;
