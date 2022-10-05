import React from "react";
import useResize from "../../Hooks/useResize";
import logo from "../../imgs/edmodi.png";
import { useLocation } from "react-router-dom";
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { v4 as uuidv4 } from 'uuid';
import "./NavBar.css";

const NavBar = () => {
    const location = useLocation()
    const {pathname}=location
    const splitLocation = pathname.split('/')
  const { isPhone } = useResize();
  const initialValues ={
    group_name:'',
    code:uuidv4(),
    
  }
  const required = 'Campo requerido'
  const validationSchema = Yup.object().shape({
    group_name:Yup.string().min(1, 'El nombre del grupo debe contener mínimo 1 caracteres').max(35, '35 caracteres son demasiados, intenta algo más corto').required(required),
    code:Yup.string().required(required),
   
    })
   
    const onSubmit=()=>{
      
console.log(formik.values)
alert('hola')

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
    <header>
      {isPhone ? (
        <nav className="navbar navbar-expand-lg bg-light">
            
          <div className="container">
          <img src={logo}></img>
            <input type="search" placeholder="search"></input>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 lista">
                {splitLocation[1]==='homes'?'':<li className="nav-item">
                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#creacion-grupo">Nuevo grupo</button>
        {/* modal */}
        <div className="modal fade" id="creacion-grupo" tabIndex="-1" aria-labelledby="creacion-grupo" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="creacion-grupo">Agrega una nueva tarea</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='auth-h'>
        {/* formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del grupo</label>
          <input type='text' name='group_name' className={errors.group_name ? "error" : ""} value={values.group_name} onBlur={handleBlur} onChange={handleChange}></input>
          
          {errors.group_name && touched.group_name && (
            <span className="error-message">{errors.group_name}</span>
          )}
        </div>
        
        <div>
          <label>Código del grupo</label>
          <input type='text' className={errors.code ? "error" : ""} name='code' value={values.code} onBlur={handleBlur} onChange={handleChange} readOnly></input>
          
          {errors.code && touched.code && (
            <span className="error-message">{errors.code}</span>
          )}
          
        </div>
        
        <div className="modal-footer">
        
        <button type="submit" className="btn btn-primary">Crear</button>
      </div>
      </form>

    </div>
      </div>
      
    </div>
  </div>
</div>
                </li>}
                <li className="nav-item">
                  <button>Cerrar Sesión</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <div>
            <img src={logo}></img>
            <input type="search" placeholder="search"></input>
          {splitLocation[1]==='homes'?'':
          <>
           <button type="button" className=" " data-bs-toggle="modal" data-bs-target="#creacion-grupo">Nuevo grupo</button>
           
           <div className="modal fade" id="creacion-grupo" tabIndex="-1" aria-labelledby="creacion-grupo" aria-hidden="true">
     <div className="modal-dialog ">
       <div className="modal-content">
         <div className="modal-header">
           <h1 className="modal-title fs-5 " id="creacion-grupo">Agrega un nuevo grupo</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="modal-body">
         <div className='auth-h'>
           {/* formulario */}
         <form onSubmit={handleSubmit}>
           <div>
             <label>Nombre del grupo</label>
             <input type='text' name='group_name' className={errors.group_name ? "error" : ""} value={values.group_name} onBlur={handleBlur} onChange={handleChange}></input>
             
             {errors.group_name && touched.group_name && (
               <span className="error-message">{errors.group_name}</span>
             )}
           </div>
           
           <div>
             <label>Código del grupo</label>
             <input type='text' className={errors.code ? "error" : ""} name='code' value={values.code} onBlur={handleBlur} onChange={handleChange} readOnly></input>
             
             {errors.code && touched.code && (
               <span className="error-message">{errors.code}</span>
             )}
             
           </div>
           
           <div className="modal-footer">
           
           <button type="submit" className="btn btn-primary">Crear</button>
         </div>
         </form>
   
       </div>
         </div>
         
       </div>
     </div>
   </div>
   </>}
          
          <button>Cerrar Sesión</button>
        </div>
      )}
    </header>
  );
};
export default NavBar;
