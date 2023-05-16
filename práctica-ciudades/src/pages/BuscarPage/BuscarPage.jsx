import React from "react";
import "./BuscarPage.css"
import  Buscador  from "../../components/Buscador/Buscador";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import  FetchZipopotam  from "../../services/FetchZippopotam";
import  InfoGeografica  from "../../components/InfoGeografica/InfoGeografica";
import  InfoClima  from "../../components/InfoClima/InfoClima";
import  InfoPolitica  from "../../components/InfoPolitica/InfoPolitica";


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
  } = FetchZipopotam(ciudad);

  return (
    <div>
      <Buscador loading={loading}></Buscador>

      {error ? (
        <p style={{ color: "red", marginLeft: "4%"}}>Sin resultados</p>
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
          </Card>
          <Card title="Información climática">
            <InfoClima
              latitud={latitud}
              longitud={longitud}
              loading={loading}
              error={error}
            ></InfoClima>
          </Card>
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