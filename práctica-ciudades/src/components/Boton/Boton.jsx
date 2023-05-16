import "./Boton.css";
const Boton = ({onClick,width,height,texto,type}) => {
  
 

  
  const buttonStyle = {
    width: width,
    height: height,
  }
  return (
    <button type={type} style={buttonStyle} className="boton" onClick={onClick}>{texto}</button>
  ) 
}

export default Boton