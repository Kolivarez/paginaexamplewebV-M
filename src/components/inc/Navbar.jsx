import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand" href="#" >
        <a class="navbar-brand" to="/" href="#">
          <img src={logo} alt="logo" width="100" height="100" />
        </a>
          SERVICIO EXPRESS</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" >Inicio</Link>
            </li>
            <li class="nav-item">
              <Link to="/servicio" class="nav-link active" >Servicio</Link>
            </li>
            <li class="nav-item">
              <Link to="/contacto" class="nav-link active" >Contacto</Link>
            </li>
            <li class="nav-item">
              <Link to="/empresa" class="nav-link active" >Empresa</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
