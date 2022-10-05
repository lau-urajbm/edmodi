/* https://cdn-icons-png.flaticon.com/512/6101/6101129.png */
import React from 'react'
import { useLocation } from 'react-router-dom'
import './BarraLateral.css'

const BarraLateral = () => {
    const location = useLocation()
    const {pathname}=location
    const splitLocation = pathname.split('/')
    
  return (
    <div className='barra-lateral'>
        <section>
            <div>
            <img src='https://cdn-icons-png.flaticon.com/512/6101/6101129.png'></img>
            <div>
                <p>nombre</p>
                <p>nombre</p>
                {splitLocation[1]==='homes'?'':<p>Código de este grupo: </p>}
            </div>
            </div>
            <div>
                <ul>
                    {splitLocation[1]==='homes'?<h6>Mis Clases</h6>:<h6>Mis grupos</h6>}
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>

                </ul>
            </div>
        </section>
    </div>
  )
}

export default BarraLateral