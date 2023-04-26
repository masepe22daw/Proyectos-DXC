import GameLayout from "../../components/Layouts/GameLayout"
import { useParams } from "react-router-dom";
import useFetchGames from "../../services/useFetchGames";

const LevelSelectionPage = () => {
    const {game} = useParams();
    const {listaJuegos} = useFetchGames;

    const gameInList =  listaJuegos.filter(elem => {
        return elem.name === game
    } )


    if(gameInList.length > 0 ){
        return <GameLayout texto={"Selecciona el nivel para" + game}>
        {gameInList[0].levels.map(level => {
            return <div>Size: {level.size} Words: {level.nwords}</div>
        })}
    </GameLayout>
    }
    
    return <GameLayout></GameLayout>
}

export default LevelSelectionPage