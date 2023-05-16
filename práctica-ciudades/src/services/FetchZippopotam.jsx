import { useContext, useEffect, useState } from "react";
import HistoryContext from "../context/HistoryContext";

const FetchZipopotam = (ciudad) => {
  const [loading, setLoading] = useState(true);
  const [nombreCiudad, setNombreCiudad] = useState("");
  const [comunidad, setComunidad] = useState("");
  const [comunidadAbr, setComunidadAbr] = useState("");
  const [error, setError] = useState(false);
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");

  const {history, setHistory} = useContext(HistoryContext)

  const apiURL = `https://api.zippopotam.us/es/${ciudad}`;
  const fetchPolitica = (apiURL) => {
    setLoading(true);
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setNombreCiudad(data.places[0]["place name"]);
        setComunidad(data.places[0].state);
        setComunidadAbr(data.places[0]["state abbreviation"]);
        console.log(data);
        setLatitud(data.places[0].latitude);
        setLongitud(data.places[0].longitude);
        console.log(data.places[0]["state abbreviation"]);

        setHistory([{codigoPostal: ciudad, nombreCiudad: data.places[0]["place name"], comunidad: data.places[0].state}, ...history,]);
        console.log("Historial:", history);
        setLoading(false);
        setError(false);
        
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchPolitica(apiURL);
  }, [apiURL]);

  return {
    nombreCiudad,
    comunidad,
    comunidadAbr,
    loading,
    error,
    longitud,
    latitud,
  };
};

export default FetchZipopotam;