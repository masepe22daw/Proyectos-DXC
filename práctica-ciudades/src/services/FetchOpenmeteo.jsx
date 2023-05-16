import { useEffect, useState } from "react";

 const FetchOpenmeteo = (latitud, longitud) => {


  const [times, setTimes] = useState([]);
  const [temperatures, setTemperatures] = useState([]);

  const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&hourly=temperature_2m`;

  const fetchOpenmeteo = (apiURL) => {

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setTimes(data.hourly.time);
        setTemperatures(data.hourly.temperature_2m);
        console.log("Mirar error",data.hourly.time)

      })
      .catch((error) => {
        console.log("Ha habido un error:", error);
      })
  };

  useEffect(() => {
    fetchOpenmeteo(apiURL);
  }, [apiURL]);

  return {times, temperatures}
};

export default FetchOpenmeteo;