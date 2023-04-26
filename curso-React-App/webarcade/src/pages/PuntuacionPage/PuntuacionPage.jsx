import Titulo from "../../components/Titulo/Titulo"
import CajaPuntos from "../../components/CajaPuntos/CajaPuntos"
import Separador from "../../components/Separador/Separador"
import Boton from "../../components/Boton/Boton"
import { useNavigate } from "react-router-dom"
import GameLayout from "../../components/Layouts/GameLayout"

const PuntuacionPage = () => {
    
    const navigate = useNavigate();
    

    const navigateToJuegoPage = () =>{
        navigate("/juego")
    }

    

    return <GameLayout texto="Puntuación">
         <CajaPuntos></CajaPuntos>
        <Boton onClick={navigateToJuegoPage} texto={"Jugar"}></Boton>
        <Separador size={5}></Separador>
    </GameLayout>
}

export default PuntuacionPage