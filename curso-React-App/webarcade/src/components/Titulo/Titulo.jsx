import "./Titulo.css";

const Titulo = (props) => {


  const style = {
    textAlign: props.position
  }

  return (
    <h1 style={style} className="titulo">{props.texto}</h1>
  )
}

export default Titulo