import React from "react";
import "./InfoGeografica.css";

const InfoGeografica = (props) => {
  const url = `https://www.google.com/maps/@${props.latitud},${props.longitud},13z`;
  const handleMapa = () => {
    window.open(url);
  };
  return (
    <div>
      {
        props.loading ? (<img src="/img/miscalenea/loading.gif" alt="cargando" />) : props.error ? (<p>No va</p>)
        : (
          <div className="contenedor-geografico">
          <div>
            <br></br>
        <p>
          <b>Latitud: </b>
          {props.latitud}
        </p>
        <p>
          <b>Longitud: </b>
          {props.longitud}
        </p>
      </div>
      <div className="mapa" onClick={handleMapa}>
        <img
          src="/img/miscalenea/mapa.png"
          alt="mapa"
          
        ></img>
        <p>Ver mapa</p>
        </div>
        </div>
        )
      }
      </div>
    
  );
};

export default InfoGeografica;