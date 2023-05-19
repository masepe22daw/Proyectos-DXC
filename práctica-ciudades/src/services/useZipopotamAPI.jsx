import { useEffect, useState } from 'react';

const useZipopotamAPI = (codigoPostal) => {
  const [nombreCiudad, setNombreCiudad] = useState('');
  const [comunidad, setComunidad] = useState('');
  const [comunidadAbr, setComunidadAbr] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [longitud, setLongitud] = useState('');
  const [latitud, setLatitud] = useState('');
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`http://api.zippopotam.us/es/${codigoPostal}`);
        const jsonData = await response.json();

        setNombreCiudad(jsonData.places[0]['place name']);
        setComunidad(jsonData.places[0]['state']);
        setComunidadAbr(jsonData.places[0]['state abbreviation']);
        setLongitud(jsonData.places[0].longitude);
        setLatitud(jsonData.places[0].latitude);

        // Añadir el código postal consultado al historial
        setHistorial(prevHistorial => [...prevHistorial, codigoPostal]);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    if (codigoPostal) {
      fetchData();
    }
  }, [codigoPostal]);

  return { nombreCiudad, comunidad, comunidadAbr, loading, error, longitud, latitud, historial };
};

export default useZipopotamAPI;
