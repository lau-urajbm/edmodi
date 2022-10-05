import React from 'react'
import BarraLateral from '../BarraLateral/BarraLateral'
import NavBar from '../NabBar/NavBar'
import './HomeP.css'
import useResize from '../../Hooks/useResize'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Link, useLocation} from 'react-router-dom'
import Card from '../Card/Card'

const HomeP = () => {
    const {isPhone}=useResize()
    const initialValues ={
        homework:'',
        description:'',
        date:'',
        links:''
      }
      const required = 'Campo requerido'
      const validationSchema = Yup.object().shape({
        homework:Yup.string().min(4, 'El nombre de la tarea debe contener mínimo 4 caracteres').required(required),
        description:Yup.string().min(10, 'La descripción debe contener mínimo 10 caracteres').max(300, 'Demasiados caracteres').required(required),
        date:Yup.date().required(required),
        links:Yup.string()
        })
       
        const onSubmit=()=>{
          
    console.log(formik.values)
    alert('hola')
    formik.resetForm()
    
        }
      const formik = useFormik({initialValues, validationSchema, onSubmit} )
      const{handleSubmit,
        handleChange,
        errors,
        touched,
        handleBlur,
        values,
        setFieldValue,}=formik
  return (
    <>
    <NavBar></NavBar>
    {isPhone?
    <div className='home-contenedor'>
        
        <BarraLateral></BarraLateral>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Nueva tarea</button>
        {/* modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Agrega una nueva tarea</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='auth-h'>
        {/* formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la tarea</label>
          <input type='text' name='homework' className={errors.homework ? "error" : ""} value={values.homework} onBlur={handleBlur} onChange={handleChange}></input>
          
          {errors.homework && touched.homework && (
            <span className="error-message">{errors.homework}</span>
          )}
        </div>
        <div>
          <label>Descripción</label>
          <textarea  className={errors.description ? "error" : ""} name='description' value={values.description} onBlur={handleBlur} onChange={handleChange}></textarea>
          
          {errors.description && touched.description && (
            <span className="error-message">{errors.description}</span>
          )}
          
          
        </div>
        <div>
          <label>Fecha de entrega</label>
          <input type='date' className={errors.date ? "error" : ""} name='date' value={values.date} onBlur={handleBlur} onChange={handleChange}></input>
          
          {errors.date && touched.date && (
            <span className="error-message">{errors.date}</span>
          )}
          
        </div>
        <div>
          <label>Links de apoyo</label>
          <textarea  className={errors.links ? "error" : ""} name='links' value={values.links} onBlur={handleBlur} onChange={handleChange}></textarea>
          
          {errors.links && touched.links && (
            <span className="error-message">{errors.links}</span>
          )}
          
        </div>
        <div className="modal-footer">
        
        <button type="submit" className="btn btn-primary">Agregar</button>
      </div>
      </form>

    </div>
      </div>
      
    </div>
  </div>
</div>
        <Card></Card>
        <Card></Card>
<Card></Card>
        
        {/* <button>Agregar nueva tarea</button> */}
    
    </div>:
    <div className='home-contenedor'>
        <div>
        <BarraLateral></BarraLateral>
        <div className='contenido'>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Nueva tarea</button>
         {/* modal */} 
         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Agrega una nueva tarea</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='auth-h'>
        {/* formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la tarea</label>
          <input type='text' name='homework' className={errors.homework ? "error" : ""} value={values.homework} onBlur={handleBlur} onChange={handleChange}></input>
          
          {errors.homework && touched.homework && (
            <span className="error-message">{errors.homework}</span>
          )}
        </div>
        <div>
          <label>Descripción</label>
          <textarea  className={errors.description ? "error" : ""} name='description' value={values.description} onBlur={handleBlur} onChange={handleChange}></textarea>
          
          {errors.description && touched.description && (
            <span className="error-message">{errors.description}</span>
          )}
          
          
        </div>
        <div>
          <label>Fecha de entrega</label>
          <input type='date' className={errors.date ? "error" : ""} name='date' value={values.date} onBlur={handleBlur} onChange={handleChange}></input>
          
          {errors.date && touched.date && (
            <span className="error-message">{errors.date}</span>
          )}
          
        </div>
        <div>
          <label>Links de apoyo</label>
          <textarea  className={errors.links ? "error" : ""} name='links' value={values.links} onBlur={handleBlur} onChange={handleChange}></textarea>
          
          {errors.links && touched.links && (
            <span className="error-message">{errors.links}</span>
          )}
          
        </div>
        <div className="modal-footer">
        
        <button type="submit" className="btn btn-primary">Agregar</button>
      </div>
      </form>

    </div>
      </div>
      
    </div>
  </div>
</div>
<Card></Card>
<Card></Card>
<Card></Card>
           
        </div>
        
        </div>
        
    
    </div>}
    
    </>
  )
}
export default HomeP