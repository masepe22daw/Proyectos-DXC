import ListaPuntuaciones from "../ListaPuntuaciones/ListaPuntuaciones"
import PaginaPuntos from "../PaginaPuntos/PaginaPuntos"
import "./CajaPuntos.css"

const CajaPuntos = () => {
    const puntuaciones = [
        {
            puntos: 1500,
            iniciales: "JCH"
        },
        {
            puntos: 1600,
            iniciales: "CYG"
        },
        {
            puntos: 7000,
            iniciales: "ERT"
        },
    ]

    return <div className="caja_puntos_container">
        <div className="caja_puntos_columna_1">
            <PaginaPuntos reverse></PaginaPuntos>
        </div>
        <div className="caja_puntos_columna_2">
            <ListaPuntuaciones puntuaciones={puntuaciones}></ListaPuntuaciones>
        </div>
        <div className="caja_puntos_columna_3">
            <PaginaPuntos></PaginaPuntos>
        </div>
    </div>

}

export default CajaPuntos