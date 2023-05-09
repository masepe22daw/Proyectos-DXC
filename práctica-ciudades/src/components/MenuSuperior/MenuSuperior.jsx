import "./MenuSuperior.css";
import Boton from "../Boton/Boton";

const MenuSuperior = () => {
  return (
    <div className="contenedor">
      <div className="div-1"><img src="./img/ciudad.png" className="imagen" alt="Icono de una ciudad "></img></div>
      <div className="div-2"><h1 className="titulo">Ciudades</h1></div>
      <div className="div-3">
        <div className="caja-abajo ">
          <div className="separar">
            <Boton texto="Buscar" width="50px" height="15px"></Boton>
          </div>
          <div>
            <Boton texto="Historial" width="50px" height="15px"></Boton>
          </div>

        </div>

      </div>


    </div>
  )
}

export default MenuSuperior