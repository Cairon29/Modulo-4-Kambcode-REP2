import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import { Home } from './assets/components/home'
import { CharacterHandling } from './assets/characterHandling'
import { ChapterHandling } from './assets/chapterHandling'
import { LocationHandling } from './assets/locationHandling'
import { NotFound } from './assets/notFound'
import './estilosTarjeta.css'
import imagen from './assets/Rick-and-Morty-Logo-Vector.png'


function App() {
  return (
    <>
      <Router>
          <nav>
            <Link style={{ textDecoration: 'none' }} to='/home'>
              <img src={imagen} alt="rick and morty logo" className='rYmLogo' />
            </Link>
          </nav>
          <nav className='seccionesPagina'>
          <ul>
              <Link style={{ textDecoration: 'none' }} to='/home'><li> Home </li></Link>
              <Link style={{ textDecoration: 'none' }} to='/characters'><li> Characters </li></Link>
              <Link style={{ textDecoration: 'none' }} to='/chapters'><li> Chapters </li></Link>
              <Link style={{ textDecoration: 'none' }} to='/locations'><li> Locations </li></Link> 
          </ul> 
          </nav>
          <Routes>
              <Route path= '/home' element={<Home/>} />
              <Route path= '/characters' element={<CharacterHandling/>} />
              <Route path= '/chapters' element={<ChapterHandling/>} />
              <Route path= '/locations' element={<LocationHandling/>} />
              <Route path= '*' element={<NotFound/>} />
          </Routes>
      </Router>
    </> 
  )
}

export default App
