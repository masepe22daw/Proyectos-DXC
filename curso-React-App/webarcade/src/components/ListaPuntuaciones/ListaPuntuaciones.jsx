import Puntuacion from "../Puntuacion/Puntuacion"

const ListaPuntuaciones = (props) => {
    return <div>
        {props.puntuaciones.map((puntuacion,index) => {
            return <Puntuacion key={"Puntuacion_" + index} puntuacion={puntuacion}>Puntuacion</Puntuacion>
        })}
    </div>


}

export default ListaPuntuaciones