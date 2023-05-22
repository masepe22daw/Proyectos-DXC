import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HistoryContext } from "../../context/HistoryContext";
import "./HistorialPage.css"

const HistorialPage = () => {
  const { history } = useContext(HistoryContext);
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/buscar/${item}`);
  };

  return (
    <div>
      <h2>Historial de búsqueda</h2>
      {history.length === 0 ? (
        <p>Aún no has hecho ninguna búsqueda</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li onClick={() => handleClick(item)} key={index}>{item}</li>
          ))}
          <br></br>
        </ul>
      )}
    </div>
  );
};

export default HistorialPage;