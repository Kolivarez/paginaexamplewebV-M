import React from "react";
import "./inicio.css";
import Slider from "../../inc/Slider.jsx";
import SliderHome from "../../inc/SliderHome.jsx";
import vistas from "../../images/vistas.png";
import ubicacion from "../../images/ubicacion.png";

export const Inicio = () => {
  return (
    <div>
      <Slider />
      <div class="d-flex flex-column flex-lg-row container-fluid my-4">
        <div class="col-12 col-lg-6 cuadro1">
          <h1 class="title1" data-aos="zoom-out">
            Servicio
          </h1>
          <p class="parrafo1" data-aos="zoom-out">
            Viajes en autos compartidos,nuestros conductores son capacitados en
            seguridad individual, contamos con nuestra aplicación móvil, para
            agilitar los servicio dentro de cada ciudad modalidad individual,
            servicio vip exclusivo de ciudad a ciudad y en servicio compartido.
          </p>
        </div>
        <div class="col-12 col-lg-6 cuadro2">
          <h1 class="title2" data-aos="zoom-out">
            Actividad del negocio
          </h1>
          <p class="parrafo2" data-aos="zoom-out">
            Brindamos servicio de transporte terrestre de personas y paquetería
            de una manera muy responsable lo más importante son los conductores
            porque sus principales objetivos son llevarlos en forma segura,
            oportuna y discreta.
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
          <h4 style={{ textAlign: "center", color: "white" }}>
            Cobertura auto ejecutivo
          </h4>
          <p class="centrado">
            <img class="image4" src={ubicacion} alt="" />
          </p>
          <h2 class="number">2</h2>
        </div>
      </div>

      <SliderHome />
    </div>
  );
};
