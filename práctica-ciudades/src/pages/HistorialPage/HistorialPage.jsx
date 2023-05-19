import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './HistorialPage.css';
import { HistoryContextProvider } from '../../context/HistoryContext';

const BusquedaItem = ({ cp, ciudad, comunidad, onClick }) => {
  return (
    <div className='busqueda-container' onClick={onClick}>
      <div className="busqueda">
        <div className='codigo-postal-container'>
          <p className='codigo-postal'>{cp}</p>
        </div>
        <div className='info-container'>
          <p className='info'>{ciudad} ({comunidad})</p>
        </div>
      </div>
    </div>
  );
};

const HistorialPage = () => {
  const { history, setHistory } = useContext(HistoryContextProvider);
  const [historial, setHistorial] = history;
  const navigate = useNavigate();

  const borrarHistorial = () => {
    setHistory([]);
  };
  
  return (
    <div>
      <h2>HistorialPage</h2>

      <div className='container-historial'>
        {historial.map((item, index) => (
          <BusquedaItem
            key={index}
            cp={item.cp}
            ciudad={item.ciudad}
            comunidad={item.comunidad}
            onClick={() => navigate(`/buscar/${item.cp}`)}
          />
        ))}

        <div className='boton-container'>
          {historial.length !== 0 ? (
            <button className='btn' onClick={borrarHistorial}>
              Borrar historial
            </button>
          ) : (
            <p>No hay búsquedas recientes.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistorialPage;