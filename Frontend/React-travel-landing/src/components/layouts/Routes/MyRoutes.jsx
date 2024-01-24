import React from "react";

import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Login from "../Login/Login";
import VistaDestino from "../VistaDestino/VistaDestino";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Destino/:id" element={<VistaDestino />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
