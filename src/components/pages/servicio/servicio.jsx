import React from "react";
import './servicios.css';

export const Servicio = () => {
  return (
    <div class="services">
      <div class="col">
        <div class="box-text-header" data-aos="fade-down">
          <h1 class="title-box-text-header">Nuestros servicios</h1>
          <p class="paragraph">
            Servicios de autos compartidos interprovinciales de ciudad a ciudad; servicios de
            transporte ejecutivo dentro de tu ciudad (Quito e Ibarra), servicio empresarial a
            nivel nacional!🤳🏼🚗🚕
          </p>
        </div>
      </div>
      <div class="col">
        <div class="box-text-header" data-aos="fade-down">
          <h1 class="title-box-text-header">¡Contamos con diferente servicios!</h1>
          <ul>
            <li class="paragraph">
              Viajes en autos compartidos, nuestros conductores son capacitados en seguridad
              personal.
            </li>
            <li class="paragraph">
              Contamos con nuestra aplicación móvil, para agilitar los servicio dentro de cada
              ciudad modalidad auto ejecutiva.
            </li>
            <li class="paragraph">
              Servicio exclusivo a nivel nacional y servicio compartido de ciudad a ciudad.
            </li>
          </ul>
        </div>
      </div>
      <div class="container-fluid d-flex flex-column flex-lg-row my-4 justify-content-between">
        <div class="row col-12 col-lg-6 px-5">
          <div class="box-text-body" data-aos="zoom-in">
            <h1 class="title-box-text-body">Tarifa interprovincial modalidad compartido</h1>
            <p class="paragraph-box-text-body">
              Nuestras tarifas 🚘 🇪🇨 Rango de precios de acuerdo a los sectores · $
            </p>
            <ul>
              <li class="paragraph-box-text-body">
                La mejor opción en transporte compartido. Quito - Ibarra Ibarra - Quito
              </li>
              <li class="paragraph-box-text-body">
                Contrate su servicio de puerta a puerta, en V&M nos encargamos de que llegue
                con toda la SEGURIDAD!
              </li>
              <li class="paragraph-box-text-body">
                Nuestras tarifas son las mejores de todo el mercado!!!!
              </li>
            </ul>
          </div>
        </div>
        <div class="row col-12 col-lg-6 px-5">
          <div class="box-text-body" data-aos="zoom-in">
            <h1 class="title-box-text-body">Encomiendas</h1>
            <p class="paragraph-box-text-body">Nuestro servicio de encomiendas 🚘 🇪🇨</p>
            <ul>
              <li class="paragraph-box-text-body">
                La mejor opción para poder realizar tus encomiendas en transporte compartido.
                Quito - Ibarra Ibarra - Quito
              </li>
              <li class="paragraph-box-text-body">
                Contrata tu servicio de encomiendas, en V&M nos encargamos de que llegue a su
                destino de una forma segura!
              </li>
              <li class="paragraph-box-text-body">
                Envíe sus encomiendas de la forma mas rápida y segura!!!!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid d-flex flex-column flex-lg-row my-4 justify-content-between">
        <div class="row col-12 col-lg-6 px-5">
          <div class="box-text-body" data-aos="zoom-in">
            <h4 class="title-box-text-body">Auto ejecutivo en tu ciudad</h4>
            <p class="paragraph-box-text-body">
              Nuestras autos 🚘 🇪🇨 ejecutivos adecuados para todos nuestros clientes.
            </p>
            <ul>
              <li class="paragraph-box-text-body">
                La mejor opción de servicio express son nuestros autos
              </li>
              <li class="paragraph-box-text-body">
                Nuestros autos se encuentran con todos los documentos legalizados
              </li>
              <li class="paragraph-box-text-body">
                Nuestros autos se encuentan en las mejores condiciones
              </li>
            </ul>
          </div>
        </div>
        <div class="row col-12 col-lg-6 px-5">
          <div class="box-text-body" data-aos="zoom-in">
            <h4 class="title-box-text-body">Servicio empresarial a nivel nacional</h4>
            <p class="paragraph-box-text-body">Nuestros servicios empresariales 🚘 🇪🇨</p>
            <ul>
              <li class="paragraph-box-text-body">
                Contamos con nuestro servicio de reserva
              </li>
              <li class="paragraph-box-text-body">
                Nuestros servicio V&M se caracteriza por ser responsables
              </li>
              <li class="paragraph-box-text-body">
                V&M nuestros conductores estan capacitados para brindarles un buen servicio
                de calidad
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="box-text-header">
          <h3 class="title-box-text-header text-center">
            ¡Siga nuestros enlaces hacía nuestra aplicación móvil!
          </h3>
          <p class="paragraph text-center">¡Escanee nuestros códigos QR!</p>
          <p class="paragraph text-center">¡Contamos con aplicación para Android y Apple!</p>
          <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <img
              class="imagen-qr-right"
              data-aos="fade-right"
              src="https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fbit.ly%2FNuestraAplicaci%C3%B3n&s=6&e=m"
              hspace="30"
              alt="qr_img"
            />
            <img
              class="imagen-qr-left"
              data-aos="fade-left"
              src="https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fapple.co%2F36aBV5D&
                      s=6&e=m"
              hspace="30"
              alt=""
            />
          </div>
          <p class="paragraph text-center">https://bit.ly/NuestraAplicación - https://apple.co/36aBV5D</p>
        </div>
      </div>


    </div>
  );
};
