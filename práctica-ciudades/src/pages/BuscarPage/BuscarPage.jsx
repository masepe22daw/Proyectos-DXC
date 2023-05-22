import React from "react";
import { useParams } from "react-router-dom";
import Buscador from "../../components/Buscador/Buscador";
import Card from "../../components/Card/Card";
import InfoGeografica from "../../components/InfoGeografica/InfoGeografica";
import InfoClima from "../../components/InfoClima/InfoClima";
import InfoPolitica from "../../components/InfoPolitica/InfoPolitica";
import "./BuscarPage.css";
import useZipopotamAPI from "../../services/useZipopotamAPI";


const BuscarPage = () => {
  const { ciudad } = useParams();
  const {
    nombreCiudad,
    comunidad,
    comunidadAbr,
    loading,
    error,
    longitud,
    latitud,
  } = useZipopotamAPI(ciudad);

  // Verificar si los datos se han cargado antes de renderizar las Card
  if (loading) {
    return (
      <div>
        <Buscador></Buscador>
        <p className="loading-message">Cargando...</p>
      </div>
    );
  }

  return (
    <div>
      <Buscador></Buscador>

      {error ? (
        <p className="error-message"> No hay resultados</p>
      ) : (
        <>
          <Card title="Información política">
            <InfoPolitica
              nombreCiudad={nombreCiudad}
              comunidad={comunidad}
              comunidadAbr={comunidadAbr}
              error={error}
              loading={loading}
            ></InfoPolitica>
          </Card><br></br>
          <Card title="Información climática">
            <InfoClima
              latitud={latitud}
              longitud={longitud}
              loading={loading}
              error={error}
            ></InfoClima>
          </Card><br></br>
          <Card title="Información geográfica">
            <InfoGeografica
              latitud={latitud}
              longitud={longitud}
              error={error}
              loading={loading}
            ></InfoGeografica>
          </Card>
        </>
      )}
    </div>
  );
};

export default BuscarPage;
