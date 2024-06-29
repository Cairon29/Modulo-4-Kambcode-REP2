export const ArtistaInfo = (props) => {

    return (
        <div>
            <h2>{props.nombre}</h2>
            <img src={props.img} alt="imagen del artista" width="500" />
            <p>{props.descripcion}</p>
        </div>
    )
}