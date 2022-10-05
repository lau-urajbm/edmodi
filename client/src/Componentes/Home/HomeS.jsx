import React from 'react'
import BarraLateral from '../BarraLateral/BarraLateral'
import NavBar from '../NabBar/NavBar'
import './HomeP.css'
import useResize from '../../Hooks/useResize'

const HomeS = () => {
    const {isPhone}=useResize()
    return (
      <>
      <NavBar></NavBar>
      {isPhone?
      <div className='home-contenedor'>
          
          <BarraLateral></BarraLateral>
          
          <div>sasasa
              sss
              sss
          </div>
          
          {/* <button>Agregar nueva tarea</button> */}
      
      </div>:
      <div className='home-contenedor'>
          <div>
          <BarraLateral></BarraLateral>
          <div className='contenido'>
          
              sasasa
              sss
              sss
             
          </div>
          
          </div>
          
      
      </div>}
      
      </>
    )
}
export default HomeS