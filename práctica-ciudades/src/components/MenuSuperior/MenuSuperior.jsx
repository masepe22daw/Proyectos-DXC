import "./MenuSuperior.css";
import Boton from "../Boton/Boton";
import { useState } from "react";

const MenuSuperior = () => {
  const [activo, setActivo] = useState(1);

  const handleClick = (boton) => {
    setActivo(boton)
  }

  return (
    <div className="contenedor">
      <div className="div-1"><img src="./img/ciudad.png" className="imagen" alt="Icono de una ciudad "></img></div>
      <div className="div-2"><h1 className="titulo">Ciudades</h1></div>
      <div className="div-3">
        <div className="caja-abajo ">
          <Boton numero={1} onClick={handleClick} activo={activo === 1} texto="Buscar" width="60px" height="25px"></Boton>
          <Boton numero={2} onClick={handleClick} activo={activo === 2} texto="Historial" width="60px" height="25px"></Boton>
        </div>

      </div>


    </div>
  )
}

export default MenuSuperior