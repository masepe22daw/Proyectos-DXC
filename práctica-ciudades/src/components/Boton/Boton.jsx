import "./Boton.css";
const Boton = ({onClick,width,height,texto}) => {
  
 

  
  const buttonStyle = {
    width: width,
    height: height,
  }
  return (
    <button style={buttonStyle} onClick={onClick}>{texto}</button>
  )
}

export default Boton