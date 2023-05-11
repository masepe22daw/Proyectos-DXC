import { useState } from "react";
import Boton from "../Boton/Boton"
import "./Buscador.css"
import Card from "../Card/Card";
const Buscador = () => {
    const [postalCode, setPostalCode] = useState('');
    const [placeData, setPlaceData] = useState(null);
    const [error, setError] = useState('Se debe introducir un codigo postal.');

    const handleInputChange = (e) => {
        setPostalCode(e.target.value);
    };

    const handleSearch = () => {
        
        if (postalCode.trim() === '') return;
        setError('Se debe introducir un codigo postal.');
        if (!/^\d+$/.test(postalCode)) {
            setError('El código postal debe ser numérico');

            return;
          }
        getPlaceData();
    };

    const getPlaceData = () => {
        // Llamada a la API Zipopotam para obtener información del lugar
        fetch(`http://api.zippopotam.us/es/${postalCode}`)
            .then((response) => response.json())
            .then((data) => {
                setPlaceData(data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="cajita">
            <input placeholder="Introduce un codigo postal" type="text" value={postalCode} onChange={handleInputChange} />
            <Boton className="boton" texto="Buscar" width="60px" height="25px" onClick={handleSearch}></Boton>
            {placeData ? (
                <Card title="Información política">
                    <p>Ciudad: {placeData.places[0].placeName}</p>
                    <p>Comunidad: {placeData.places[0].state}</p>
                </Card>
            ) : (
                <p>{error}</p>
            )}
        </div>
    )
}

export default Buscador