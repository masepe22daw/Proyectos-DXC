import React from "react";
import "./InfoClima.css";
import useOpenMeteoAPI from "../../services/useOpenMeteoAPI";


const InfoClima = (props) => {
  const { times } = useOpenMeteoAPI(
    props.latitud,
    props.longitud
  );

  return (
    <div>
      {props.loading ? (
        <img src="/img/miscalenea/loading.gif" alt="cargando" />
      ) : props.error || !times ? (
        <p>No va</p>
      ) : (
        <div className="global">
          <div className="mensajes">
            {times.map((hora, index) => (
              <p key={index}>
                {hora.slice(11)} ({props.temperatures[index]} Cº)
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoClima;
