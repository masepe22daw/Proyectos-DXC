import "./Boton.css";
const Boton = ({numero,width,height,texto,activo}) => {
  
  const handleClick = () => {
    onclick(numero)
  }

  
  const buttonStyle = {
    width: width,
    height: height,
  }
  return (
    <button style={buttonStyle} className={activo ? 'activo' : ''} onClick={() => handleClick}>{texto}</button>
  )
}

export default Boton