import React from "react"
import Titulo from "../Titulo/Titulo"
import DefaultImage from "../DefaultImage/DefaultImage"
import imagenes from "../../config/imagenes.json"
import Separador from "../Separador/Separador"

const GameLayout = (props) => {
    const style = {
        backgroundColor: "gray",
        height: "100%",
        width: "100%"
    }

    return <div style={style} className="puntuacion_page" >
        <div className="game_layout_header">
            <DefaultImage {...imagenes.flecha} reverse ></DefaultImage>
            <Titulo position="center" texto={props.texto}></Titulo>
        </div>
        <div className="game_layout_body">
            <Separador size={5}></Separador>
            {props.children}
            <Separador size={5}></Separador>
        </div>
        <div className="game_layout_footer">
            <div>Barra inferior</div>
        </div>




    </div>
}

export default GameLayout