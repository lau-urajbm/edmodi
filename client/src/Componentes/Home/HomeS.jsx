import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import BarraLateral from '../BarraLateral/BarraLateral'
import NavBar from '../NabBar/NavBar'
import './HomeP.css'
import useResize from '../../Hooks/useResize'
import { getRole } from '../../Store/actions/userActions'

const HomeS = () => {
    const {isPhone}=useResize()
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const {user}= useSelector(state=>{
      return state.usersReducer
    })
    const getUserRole=async()=> await dispatch(getRole(token))
    const token = localStorage.getItem('token')
    useEffect( ()=>{
        
      if(!token){
        return navigate('/')
      }
      
      if(!user.length){
      getUserRole()
       if(user.isProf){
        navigate('/')
       }

      }
    }, [])
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