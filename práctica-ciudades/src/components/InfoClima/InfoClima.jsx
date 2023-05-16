import React from "react";
import  FetchOpenmeteo  from "../../services/FetchOpenmeteo";
import "./InfoClima.css";

const InfoClima = (props) => {
  const { times, temperaturas, loading, error } = FetchOpenmeteo(
    props.latitud,
    props.longitud
  );

  return (
    <div>
      {props.loading ? (
        <img src="/img/miscalenea/loading.gif" alt="cargando" />
      ) : props.error ? (
        <p>No hay resultados</p>
      ) : (
        <div className="global">
          <div className="mensajes">
            {times.map((hora, index) => (
              <p key={index}>
                {hora.slice(11)} ({temperaturas[index]} Cº)
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoClima;