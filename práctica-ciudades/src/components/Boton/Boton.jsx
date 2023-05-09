import "./Boton.css";

const Boton = (props) => {
  const {width, height} = props;
  const buttonStyle = {
    width: width,
    height: height,
  }
  return (
    <button style={buttonStyle} className="Boton">{props.texto}</button>
  )
}

export default Boton