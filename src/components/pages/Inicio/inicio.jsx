import React from "react";
import './inicio.css';
import Slider from "../../inc/Slider";
import vistas from "../../images/vistas.png"
import ubicacion from "../../images/ubicacion.png"

import iess from "../../images/iess.png"
import mutualista from "../../images/mutualista.png"
import banco_pacifico from "../../images/banco_pacifico.png"
import FUNDACION_ALTROPIC from "../../images/FUNDACION_ALTROPIC.png"
import PADF from "../../images/PADF.png"
import FUNDACION_LUNITA from "../../images/FUNDACION_LUNITA.png"
import HOSPITAL_SAN_VICENTE from "../../images/HOSPITAL_SAN_VICENTE.png"
import PUNTO_NET from "../../images/PUNTO_NET.png"
import BANCO_CODESARROLLO from "../../images/BANCO_CODESARROLLO.png"
import LITYA from "../../images/LITYA.png"


export const Inicio = () => {
  window.onload = function () {
    // Variables
    const IMAGENES = [
      "iess",
      "mutualista",
      "banco_pacifico",
      "FUNDACION_ALTROPIC",
      "PADF",
      "FUNDACION_LUNITA",
      "HOSPITAL_SAN_VICENTE",
      "PUNTO_NET",
      "BANCO_CODESARROLLO",
      "LITYA",
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector("#retroceder");
    let $botonAvanzar = document.querySelector("#avanzar");
    let $imagen1 = document.querySelector("#imagen1");
    let $imagen2 = document.querySelector("#imagen2");
    let $imagen3 = document.querySelector("#imagen3");
    let intervalo;
  
    // Funciones
  
    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
      if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
      } else {
        posicionActual += 3;
      }
      renderizarImagen();
    }
  
    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
      if (posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
      } else {
        posicionActual -= 3;
      }
      renderizarImagen();
    }
  
    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
      $imagen1.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
      $imagen2.style.backgroundImage = `url(${IMAGENES[posicionActual + 1]})`;
      $imagen3.style.backgroundImage = `url(${IMAGENES[posicionActual + 2]})`;
    }
  
    /**
     * Activa el autoplay de la imagen
     */
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
      clearInterval(intervalo);
      // Activamos los botones de control
      $botonAvanzar.removeAttribute("disabled");
      $botonRetroceder.removeAttribute("disabled");
    }
  
    // Eventos
    $botonAvanzar.addEventListener("click", pasarFoto);
    $botonRetroceder.addEventListener("click", retrocederFoto);
    // Iniciar
    renderizarImagen();
  };
  return (
    <div>
      <Slider />
      <div class="d-flex flex-column flex-lg-row container-fluid my-4">
        <div class="col-12 col-lg-6 cuadro1">
          <h1 class="title1" data-aos="zoom-out">Servicio</h1>
          <p class="parrafo1" data-aos="zoom-out">
            Viajes en autos compartidos,nuestros conductores son capacitados en seguridad
            individual, contamos con nuestra aplicación móvil, para agilitar los servicio
            dentro de cada ciudad modalidad individual, servicio vip exclusivo de ciudad a
            ciudad y en servicio compartido.
          </p>
        </div>
        <div class="col-12 col-lg-6 cuadro2">
          <h1 class="title2" data-aos="zoom-out">Actividad del negocio</h1>
          <p class="parrafo2" data-aos="zoom-out">
            Brindamos servicio de transporte terrestre de personas y paquetería de una
            manera muy responsable lo más importante son los conductores porque sus
            principales objetivos son llevarlos en forma segura, oportuna y discreta.
          </p>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row container-fluid my-4">
        <div
          class="col-12 col-lg-6 cuadro3"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 class="title3">Visitas</h1>
          <p class="centrado">
            <img class="image3" src={vistas} alt="" />
          </p>
          <h2 class="number1">250</h2>
        </div>
        <div
          class="col-12 col-lg-6 cuadro4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 class="title4">Ciudades</h1>
          <h4 style={{ textAlign: "center", color: "white" }}>Cobertura auto ejecutivo</h4>
          <p class="centrado">
            <img class="image4" src={ubicacion} alt="" />
          </p>
          <h2 class="number">2</h2>
        </div>
      </div>
      <div class="container-fluid">
        <div class="cuadro5">
          <h1 class="title5">NUESTROS CLIENTES</h1>
          <div class="carousel1">
            <button id="retroceder">a</button>
            <div id="imagen1"></div>
            <div id="imagen2"></div>
            <div id="imagen3"></div>
            <button id="avanzar">b</button>
          </div>
        </div>
      </div>
    </div>

  );
};
