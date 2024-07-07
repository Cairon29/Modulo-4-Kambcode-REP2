import { useState, useEffect } from 'react'
import { Location } from './components/locations';

export const LocationHandling = () => {
  const [locationsApi, setLocationsApi] = useState('');
  const [offset, setOffset] = useState(1);
  
  const [btnNext, setBtnNext] = useState('');
  const [btnPrev, setBtnPrev] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location?page=${offset}`)
    .then((response) => response.json())
    .then((response) => setLocationsApi(response))

    offset == 1? setBtnPrev('disabledBtn') : setBtnPrev('')
    offset == 7? setBtnNext('disabledBtn') : setBtnNext('')
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
      <h1>LOCATIONS</h1>
      <div className='content'>
        {locationsApi && locationsApi.results.map((element) => (
          <Location key={element.id} lugar={element.name} tipo={element.type} dimension={element.dimension}/>
        ))}
      </div>
      <div className='content'>
        <button className={btnPrev} disabled={offset == 1} onClick={previousPage}> {'<'} </button>
        <h3> Page: {offset}</h3>
        <button className={btnNext} disabled={offset == 7} onClick={nextPage}> {'>'} </button>
      </div>
    </> 
  )
}
