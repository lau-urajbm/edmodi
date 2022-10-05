import React, { useState }  from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Link, useLocation} from 'react-router-dom'

const useAuthS = ()=>{
    const location = useLocation()
    const {pathname}=location
    const splitLocation = pathname.split("/")
  
    const [showpass, setShowPass]= useState(false)
   
    const initialValues ={
        userName:'',
        password:'',
        code:'',
      }
      const required = 'Campo requerido'
      const validationSchema = Yup.object().shape({
        userName:Yup.string().min(4, 'El nombre de usuario debe contener mínimo 6 caracteres').required(required),
        password:Yup.string().min(6, 'La contraseña debe contener mínimo 6 caracteres').max(50, 'Demasiados caracteres').required(required),
        code:Yup.string().min(6, 'El Código debe contener más de 6 caracteres').max(50, 'Demasiados caracteres').required(required)
        })

        const handleShowPass = ()=>{
            setShowPass(!showpass)
          }
          
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

    const html=(action)=>{
        return(
            <div className='auth'>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label>UserName</label>
              <input type='text' name='userName' className={errors.password ? "error" : ""} value={values.userName} onBlur={handleBlur} onChange={handleChange}></input>
              {errors.userName && touched.userName && (
                <span className="error-message">{errors.userName}</span>
              )}
            </div>
            <div>
              <label>Password</label>
              <input type={showpass? 'text':'password'} className={errors.password ? "error" : ""} name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}></input>
              {errors.password && touched.password && (
                <span className="error-message">{errors.password}</span>
              )}
              <span onClick={handleShowPass} className='show' >{showpass?'Ocultar contraseña':'Ver contraseña'}</span>
            </div>
            <div>
              <label>Código de clase</label>
              <input type='text' name='code' value={values.code} className={errors.password ? "error" : ""} onBlur={handleBlur} onChange={handleChange}></input>
              {errors.code && touched.code && (
                <span className="error-message">{errors.code}</span>
              )}
            </div>
            <div>
            <Link className='linkTo' to={splitLocation[1] === 'registers'?'/logins':'/registers'}>{splitLocation[1] === 'registers'?'Iniciar Sesión':'Registrarse'}</Link>
            <button type='submit'>{action}</button>
            </div>
          </form>
          
    
        </div>
        )
    }

    return{html,initialValues, required,validationSchema }
}

export default useAuthS