import { useState, useEffect } from 'react'
import { Chapter } from './components/chapters';

export const ChapterHandling = () => {
  const [chapterApi, setChapterApi] = useState('');
  const [offset, setOffset] = useState(1);
  
  const [btnNext, setBtnNext] = useState('');
  const [btnPrev, setBtnPrev] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${offset}`)
    .then((response) => response.json())
    .then((response) => setChapterApi(response))

    offset == 1? setBtnPrev('disabledBtn') : setBtnPrev('')
    offset == 3? setBtnNext('disabledBtn') : setBtnNext('')
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
      <h1>CHAPTERS</h1>
      <div className='content'>
        {chapterApi && chapterApi.results.map((element) => (
          <Chapter key={element.id} titulo={element.name} numEpisodio={element.episode} estreno={element.air_date}/>
        ))}
      </div>
      <div className='content'>
        <button className={btnPrev} disabled={offset == 1} onClick={previousPage}> {'<'} </button>
        <h3> Page: {offset}</h3>
        <button className={btnNext} disabled={offset == 3} onClick={nextPage}> {'>'} </button>
      </div>
    </> 
  )
}
