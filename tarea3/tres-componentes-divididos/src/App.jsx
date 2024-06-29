import { Titulo } from './assets/title'
import { Imagen } from './assets/image'
import { Descripcion } from './assets/description'
import './App.css'

function App() {

  return (
    <>
      <div>
        <section><Titulo title='Cillian Murphy' /></section>
        <Imagen img='https://www.hola.com/horizon/landscape/a322cfde6d65-peaky-blinders.jpg'/>
        <br />
        <Descripcion desc={'Cillian Murphy nació el 25 de mayo de 1976 en Cork, Irlanda. Es un actor y productor, conocido por 28 días después (2002), Origen (2010) y Sunshine (2007). Está casado con Yvonne McGuinness desde el 1 de agosto de 2004. Tienen dos niños.'}/>
      </div>
    </>
  )
}

export default App
