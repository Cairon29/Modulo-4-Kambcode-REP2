export const Location = (props) => {

    return (
        <article className="tarjeta-animes">
            <section className='informacion'>
                    <strong className="personaje">{props.lugar}</strong>
            </section>
            <section className="rating">
                <div className="datos">
                    <h3 className="autor">Gender</h3>
                    <h2 className='subtitle'>{props.tipo}</h2>
                </div>
                <div className="datos">
                    <h3 className="autor">Status</h3>
                    <h2 className='subtitle'>{props.dimension}</h2>
                </div>
            </section>
        </article>
    )
}