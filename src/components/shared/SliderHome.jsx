import { useRef, useEffect } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import iess from "../images/iess.png";
import mutualista from "../images//mutualista.png";
import banco_pacifico from "../images/banco_pacifico.png";
import FUNDACION_ALTROPIC from "../images/FUNDACION_ALTROPIC.png";
import PADF from "../images/PADF.png";
import FUNDACION_LUNITA from "../images/FUNDACION_LUNITA.png";
import HOSPITAL_SAN_VICENTE from "../images/HOSPITAL_SAN_VICENTE.png";
import PUNTO_NET from "../images/PUNTO_NET.png";
import BANCO_CODESARROLLO from "../images/BANCO_CODESARROLLO.png";
import LITYA from "../images/LITYA.png";

const Carousel2 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const IMAGENES = [
      iess,
      mutualista,
      banco_pacifico,
      FUNDACION_ALTROPIC,
      PADF,
      FUNDACION_LUNITA,
      HOSPITAL_SAN_VICENTE,
      PUNTO_NET,
      BANCO_CODESARROLLO,
      LITYA,
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
  }, []);

  return (
    <div class="container-fluid">
      <div class="cuadro5">
        <h1 class="title5">NUESTROS CLIENTES</h1>
        <div class="carousel1">
          <button id="retroceder">
            {" "}
            <AiFillCaretLeft size={20} />
          </button>
          <div id="imagen1"></div>
          <div id="imagen2"></div>
          <div id="imagen3"></div>
          <button id="avanzar">
            {" "}
            <AiFillCaretRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
