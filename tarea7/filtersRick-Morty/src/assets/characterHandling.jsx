import { useState, useEffect } from 'react'
import { Character } from './components/character'

export const CharacterHandling = () => {
  const [rmApi, setRmApi] = useState('');
  const [offset, setOffset] = useState(1);
  
  const [btnNext, setBtnNext] = useState('');
  const [btnPrev, setBtnPrev] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${offset}`)
    .then((response) => response.json())
    .then((response) => setRmApi(response))

    offset == 1? setBtnPrev('disabledBtn') : setBtnPrev('')
    offset == 42? setBtnNext('disabledBtn') : setBtnNext('')
  }, [offset]);
  
  const previousPage = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
  setOffset(offset - 1)
}
const nextPage = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  setOffset(offset + 1)
}
  return (
    <>
      <div className="filterCategory">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder='ej: Morty'/>
      </div>
      <div className="filterCategory">
        <form>
              <input type="radio" id="alive" name="fav_language" value="alive"/>
              <label for="alive">Alive</label>
              <input type="radio" id="dead" name="fav_language" value="dead"/>
              <label for="dead">Dead</label>
        </form>
      </div>
      <div className="filterCategory">
        <form>
              <input type="radio" id="alive" name="fav_language" value="alive"/>
              <label for="alive">Alive</label>
              <input type="radio" id="dead" name="fav_language" value="dead"/>
              <label for="dead">Dead</label>
        </form>
      </div>
      <div className="filterCategory">
        <form>
              <input type="radio" id="alive" name="fav_language" value="alive"/>
              <label for="alive">Alive</label>
              <input type="radio" id="dead" name="fav_language" value="dead"/>
              <label for="dead">Dead</label>
        </form>
      </div>

      <div className='content'>
        {rmApi && rmApi.results.map((element) => (
          <Character key={element.id} imagen={element.image} nombre={element.name} genero={element.gender} estado={element.status}/>
        ))}
      </div>
      <div className='content'>
        <button className={btnPrev} disabled={offset == 1} onClick={previousPage}> {'<'} </button>
        <h3> Page: {offset}</h3>
        <button className={btnNext} disabled={offset == 42} onClick={nextPage}> {'>'} </button>
      </div>
    </> 
  )
}
