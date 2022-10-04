import React from "react";
import useResize from "../../Hooks/useResize";
import logo from "../../imgs/edmodi.png";
import "./NavBar.css";

const NavBar = () => {
  const { isPhone } = useResize();
  return (
    <header>
      {isPhone ? (
        <nav class="navbar navbar-expand-lg bg-light">
            
          <div class="container">
          <img src={logo}></img>
            <input type="search" placeholder="search"></input>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 lista">
                <li class="nav-item">
                  <button className="">
                    Nuevo grupo
                  </button>
                </li>
                <li class="nav-item">
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
          <button className="">Nuevo grupo</button>
          <button>Cerrar Sesión</button>
        </div>
      )}
    </header>
  );
};
export default NavBar;
