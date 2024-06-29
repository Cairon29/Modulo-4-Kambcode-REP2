import { useState } from 'react'
import { Character } from './assets/character'
import './estilosTarjeta.css'

function App() {
  const [buscar, setBuscar] = useState('');

  const [img, setImg] = useState('');
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  const handleInput = (e) => {
    if (e.code == 'Enter'){
      setBuscar(e.target.value)
    }
  }

/// api
  fetch('https://rickandmortyapi.com/api/character?page=1')
    .then(response => response.json())
    .then(data => data.results.find((i) => {
      if (i.id == buscar){
        setImg(i.image);
        setName(i.name);
        setGender(i.gender);
        setStatus(i.status);
      }})).catch
  return (
    <>
      <h2>Rick & Morty character search</h2>
      <Character imagen={img} nombre={name} genero={gender} estado={status}/>
      <input type='number' onKeyDown={handleInput} placeholder='from 1 to 20'/>
    </>
  )
}

export default App
