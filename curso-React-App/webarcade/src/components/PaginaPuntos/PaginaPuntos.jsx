import React from "react";
import "./PaginaPuntos.css"
import DefaultImage from "../DefaultImage/DefaultImage";

const PaginaPuntos = (props) => {
    
    return <DefaultImage reverse={props.reverse} src="/img/avance-rapido.png" alt="Botón para cargar más puntuaciones"  ></DefaultImage>
}

export default PaginaPuntos