import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Buscador.css";
import Boton from "../Boton/Boton";
import { HistoryContext } from "../../context/HistoryContext";



 const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");
  const [mensajeError, setMensajeError] = useState();
  const navigate = useNavigate();
  const { addToHistory } = useContext(HistoryContext);

  const handleInput = (e) => {
    setBusqueda(e.target.value);
    console.log("Búsqueda:", e.target.value);
  };

  const handleBusqueda = (evt) => {
    evt.preventDefault();
    if (busqueda === "") {
      setMensajeError("Se ha de introducir un código postal");
    } else if (isNaN(busqueda)) {
      setMensajeError("El código postal ha de ser numérico");
    } else if (busqueda.length !== 5) {
      setMensajeError("El código postal ha de  tener almenos 5 dígitos");
    } else {
      setMensajeError("");
      addToHistory(busqueda);
      navigate("/buscar/" + busqueda);
      

    }

    
  };

  return (
    <div className="container-buscador">
      <form onSubmit={handleBusqueda}>
        <input
          placeholder="Introduce código postal: 08041"
          type="text"
          onChange={handleInput}
        ></input>
         <Boton texto="Buscar" width="60px" height="25px" type="submit" ></Boton>
      </form>
      <p className="error">{mensajeError}</p>
    </div>
  );
};

export default Buscador;