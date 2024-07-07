export const Chapter = (props) => {

    return (
        <article className="tarjeta-animes">
            <section className='informacion'>
                    <strong className="personaje">{props.titulo}</strong>
            </section>
            <section className="rating">
                <div className="datos">
                    <h3 className="autor">Gender</h3>
                    <h2 className='subtitle'>{props.numEpisodio}</h2>
                </div>
                <div className="datos">
                    <h3 className="autor">Status</h3>
                    <h2 className='subtitle'>{props.estreno}</h2>
                </div>
            </section>
        </article>
    )
}