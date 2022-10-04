import logo from './logo.svg';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Landing from './Componentes/Landing/Landing';
import RegisterP from './Componentes/Auth/Register/Register/RegisterP';
import RegisterS from './Componentes/Auth/Register/Register/RegisterS';
import LoginP from './Componentes/Auth/Register/Login/LoginP';
import LoginS from './Componentes/Auth/Register/Login/LoginS';
import HomeP from './Componentes/HomeP/HomeP';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/registerp' element={<RegisterP/>}></Route>
      <Route path='/registers' element={<RegisterS/>}></Route>
      <Route path='/loginp' element={<LoginP/>}></Route>
      <Route path='/logins' element={<LoginS/>}></Route>
      <Route path='/homep' element={<HomeP/>}></Route>
    </Routes>
  );
}

export default App;
