import "./Topbar.css"
import pokeballcolor from "../images/Poke_Ball.png"
import pokeballnegra from "../images/black_poke_ball.png"

const Topbar = () => {
    return (
        <div className="title">
            <div className="title__left">
                <p>Pokédex</p>
                <div className="caught-seen">
                    <div className="caught">
                        <img src={pokeballcolor} alt="pokeball" style={{ width: "30px", marginRight: "10px" }} />
                        <p>438</p>
                    </div>
                    <div className="seen">
                        <img src={pokeballnegra} alt="pokeball" style={{ width: "30px", marginRight: "10px" }} />
                        <p>649</p>
                    </div>
                </div>

            </div>
            <p style={{ color: "white" }}>A -&gt; Z</p>
        </div>
    )
}

export default Topbar