import Puntuacion from "../Puntuacion/Puntuacion"

const ListaPuntuaciones = (props) => {
    return <div>
        {props.puntuaciones.map(puntuacion => {
            return <Puntuacion puntuacion={puntuacion}>Puntuacion</Puntuacion>
        })}
    </div>


}

export default ListaPuntuaciones