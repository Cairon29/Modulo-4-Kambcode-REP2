import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import { Home } from './assets/components/home'
import { CharacterHandling } from './assets/characterHandling'
import { ChapterHandling } from './assets/chapterHandling'
import { LocationHandling } from './assets/locationHandling'
import { NotFound } from './assets/notFound'
import './estilosTarjeta.css'


function App() {
  return (
    <>
      <Router>
          <nav>
          <ul>
              <Link style={{ textDecoration: 'none' }} to='/assets/components/home'><li> Home </li></Link>
              <Link style={{ textDecoration: 'none' }} to='/assets/characterHandling'><li> Characters </li></Link >
              <Link style={{ textDecoration: 'none' }} to='/assets/chapterHandling'><li> Chapters </li></Link>
              <Link style={{ textDecoration: 'none' }} to='/assets/locationHandling'><li> Locations </li></Link> 
          </ul>
          </nav>
          <Routes>
              <Route path= '/assets/components/home' element={<Home/>} />
              <Route path= '/assets/characterHandling' element={<CharacterHandling/>} />
              <Route path= '/assets/chapterHandling' element={<ChapterHandling/>} />
              <Route path= '/assets/locationHandling' element={<LocationHandling/>} />
              <Route path='*' element={<NotFound/>} />
          </Routes>
      </Router>
    </> 
  )
}

export default App
