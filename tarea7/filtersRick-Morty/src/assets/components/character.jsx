export const Character = (props) => {
    return (
        <article className="tarjeta-animes">
            <img className="contenedor-imagenes" src={props.imagen}/>
            <section className='informacion'>
                    <strong className="personaje">{props.nombre}</strong>
            </section>
            <section className="rating">
                <div className="datos">
                    <h3 className="autor">Gender</h3>
                    <h2 className='subtitle'>{props.genero}</h2>
                </div>
                <div className="datos">
                    <h3 className="autor">Status</h3>
                    <h2 className='subtitle'>{props.estado}</h2>
                </div>
            </section>
        </article>
    )
}
