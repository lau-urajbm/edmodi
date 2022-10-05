import React, { useState }  from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import '../Auth.css'
import useAuthP from '../authP'

const LoginP = () => {
    const authP =useAuthP()
const {html}=authP
return(
    html('Iniciar sesión')
    )
    /* const [showpass, setShowPass]= useState(false)
    const [showpassP, setShowPassP]= useState(false)
  
    const initialValues ={
      userName:'',
      password:'',
      passwordP:'',
    }
    const required = 'Campo requerido'
    const validationSchema = Yup.object().shape({
      userName:Yup.string().min(4, 'El nombre de usuario debe contener mínimo 6 caracteres').required(required),
      password:Yup.string().min(6, 'La contraseña debe contener mínimo 6 caracteres').max(50, 'Demasiados caracteres').required(required),
      passwordP:Yup.string().min(6, 'La contraseña debe contener mínimo 6 caracteres').max(50, 'Demasiados caracteres').required(required)
      })
      const handleShowPass = ()=>{
        setShowPass(!showpass)
      }
      const handleShowPassP = ()=>{
        setShowPassP(!showpassP)
      }
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
      <div className='auth'>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>UserName</label>
            <input type='text' name='userName' className={errors.userName ? "error" : ""} value={values.userName} onBlur={handleBlur} onChange={handleChange}></input>
            
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
            <label>Tu clave de profesor</label>
            <input type={showpassP? 'text':'password'} className={errors.passwordP ? "error" : ""} name='passwordP' value={values.passwordP} onBlur={handleBlur} onChange={handleChange}></input>
            
            {errors.passwordP && touched.passwordP && (
              <span className="error-message">{errors.passwordP}</span>
            )}
            <span onClick={handleShowPassP} className='show'>{showpassP?'Ocultar contraseña':'Ver contraseña'}</span>
          </div>
          <button type='submit'>Registrarse</button>
        </form>
  
      </div>
    ) */
}

export default LoginP
