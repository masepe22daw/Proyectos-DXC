import "./InfoPolitica.css";
import banderas from "../../config/banderas.json";
import InfoGeografica from "../InfoGeografica/InfoGeografica";

const InfoPolitica = (props) => {
  return (
    <div>
      {props.loading ? (
        <img src="/img/miscalenea/loading.gif" alt="cargando" />
      ) : props.error ? (
        <p>No hay resultados</p>
      ) : (
        <div className="container-politico">
          <img
            alt={banderas[props.comunidadAbr].alt}
            src={banderas[props.comunidadAbr].src}
          ></img>
          <div>
            <p>
              <b>Ciudad: </b>
              {props.nombreCiudad}
            </p>
            <p>
              <b>Comunidad: </b>
              {props.comunidad}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPolitica;