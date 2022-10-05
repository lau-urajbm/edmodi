import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className='home-cont'>
        <h2>Bienvenido a Edmodi</h2>
    <section className='sec-inicios-sesion'>
        <h3>¿Ya tienes una cuenta?</h3>
        <div className='inicios-sesion'>
            <div>
              <h6>Inicia sesión como profesor</h6>
              <center>
              <Link to='/loginp'>
                <img src='https://cdn-icons-png.flaticon.com/256/6101/6101814.png'></img>
                </Link>
              </center>

              </div>
            <div>
              <h6>Inicia sesión como estudiante</h6>
              <center>
                <Link to='/logins'>
                <img src='https://cdn-icons-png.flaticon.com/256/6101/6101571.png'></img>
                </Link>
              </center>
            </div>
        </div>
    </section>
    <section className='sec-register'>
        <h3>¿Aún no tienes una cuenta? Regístrate gratis</h3>
        <div className='register'>
            <div>
              <h6>Crea una cuenta como profesor</h6>
              <center>
                <Link to='/registerp'>
                <img src='https://cdn-icons-png.flaticon.com/256/6101/6101113.png'></img>
                </Link>
              </center>

              </div>
            <div>
              <h6>Crea una cuenta como estudiante</h6>
              <center>
                <Link to='/registers'>
                <img src='https://cdn-icons-png.flaticon.com/256/6101/6101269.png'></img>
                </Link>
              </center>
            </div>
        </div>
    </section>
    </div>
  )
}
export default Landing
