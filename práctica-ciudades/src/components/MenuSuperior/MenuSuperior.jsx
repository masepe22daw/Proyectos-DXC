import "./MenuSuperior.css";
import { useNavigate } from "react-router-dom";
import Boton from "../Boton/Boton";
import React from "react";

export const MenuSuperior = () => {
  const navigate = useNavigate();


  const handleNavigate = (ruta) => {
    navigate(ruta);
  };


  return (
    <div className="contenedor">
      <div className="div-1"><img src="./img/miscalenea/logo.png" className="imagen" alt="Logo de la aplicacion(ciudad) "></img></div>
      <div className="div-2"><h1 className="titulo">Ciudades</h1></div>
      <div className="div-3">
        <Boton
          onClick={() => {
            handleNavigate("/");
          }} texto="Buscar" width="60px" height="25px"></Boton>
        <Boton 
          onClick={() => {
            handleNavigate("historial");
          }}
          texto="Historial" width="60px" height="25px" ></Boton>
      </div>
    </div>
  );
};
export default MenuSuperior