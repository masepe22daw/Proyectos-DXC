import { useEffect, useState } from "react"
import GameLayout from "../../components/Layouts/GameLayout"
import { useNavigate } from "react-router-dom";

const GameSelectionPage = () => {
    const [listaJuegos, setListaJuegos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("localhost:8888/api/warcade/v1/games/").then(
            (response) => response.json().then((json) => setListaJuegos(json))
        )
    }, [])

    const onClickHandler = (target) => {
        navigate("/levels/" + target)
    }

    return <GameLayout texto="Selección de juegos">
        {listaJuegos.map(juego => {
            return <div onClick={onClickHandler(juego.name)}>{juego.name}</div>
        })}

    </GameLayout>

}

export default GameSelectionPage