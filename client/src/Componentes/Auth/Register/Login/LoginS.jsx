import React from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import '../Auth.css'
import useAuthS from '../authS'

const LoginS = () => {
  const authS=useAuthS()
  const {html, initialValues}=authS

  return(
    html('Iniciar sesión')
  )
  /* const initialValues ={
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
          <input type='text' name='userName' value={values.userName} onBlur={handleBlur} onChange={handleChange}></input>
          {errors.userName && touched.userName && (
            <span className="error-message">{errors.userName}</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}></input>
          {errors.password && touched.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div>
          <label>Código de clase</label>
          <input type='text' name='code' value={values.code} onBlur={handleBlur} onChange={handleChange}></input>
          {errors.code && touched.code && (
            <span className="error-message">{errors.code}</span>
          )}
        </div>
        <button type='submit'>Iniciar sesión</button>
      </form>

    </div>
  ) */
}

export default LoginS
