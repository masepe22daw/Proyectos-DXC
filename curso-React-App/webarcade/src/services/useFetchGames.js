import { useEffect, useState } from "react";

const useFetchGames = () => {
    const [listaJuegos, setListaJuegos] = useState([]);


    useEffect(() => {
        fetch("localhost:8888/api/warcade/v1/games/").then(
            (response) => response.json().then((json) => setListaJuegos(json))
        )
    }, [])

    return {listaJuegos};
}

export default useFetchGames