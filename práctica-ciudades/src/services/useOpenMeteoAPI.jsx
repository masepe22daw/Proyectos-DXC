import { useEffect, useState } from 'react';

const useOpenMeteoAPI = (latitude, longitude) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [latitude, longitude]);

  return { data, isLoading, error };
};

export default useOpenMeteoAPI;
