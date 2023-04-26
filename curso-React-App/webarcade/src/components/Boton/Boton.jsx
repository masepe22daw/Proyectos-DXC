
import PropTypes from "prop-types"
import "./Boton.css"

const Boton = (props) => {
  return (
    <div className="boton" onClick={props.onClick}>{props.texto}</div>
  )
}
Boton.propTypes = {
    onclick : PropTypes.func,
    texto : PropTypes.string
}

Boton.defaultProps = {
    onClick : () => {console.log("Esta funcion no va")},
    texto: ""
}

export default Boton