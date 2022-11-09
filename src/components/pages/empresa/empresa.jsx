import React from "react";
import "./empresa.css";
import auto from "../../images/auto.png";

export const Empresa = () => {
  return (
    <div>
      <div class="caja1 col d-flex flex-column gap-3 p-5 my-3">
        <h1 class="title1">Actividad del negocio</h1>
        <p class="parrafo1">
          V&M Servicio Express es una empresa constituido para brindar seguridad
          en los diferentes traslados a todos nuestros clientes y lleguen a su
          destino a tiempo
        </p>
      </div>
      <div
        class="col d-flex flex-column flex-lg-row my-3"
        style={{ width: "100%" }}
      >
        <div
          class="col-12 col-lg-6 d-flex flex-column"
          style={{ margin: "0", padding: "0" }}
        >
          <div class="contenedor" style={{ height: "100%" }}>
            <div
              class="empresa-card"
              style={{ backgroundColor: "#172b43", height: "100%" }}
            >
              <h1
                class="title10"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                MISIÓN
              </h1>
              <p class="parrafo1">
                Realizar servicio puerta a puerta, con una buena atención,
                horarios cumplidos, organización, realizar su viaje de una forma
                mas segura, responsable, eficiente y con las mejores tarifas del
                mercado.
              </p>
            </div>
          </div>
          <div class="contenedor" style={{ height: "100%" }}>
            <div
              class="empresa-card"
              style={{ backgroundColor: "#172b43", height: "100%" }}
            >
              <h1
                class="title10"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                VISIÓN
              </h1>
              <p class="parrafo1">
                Ser siempre la mejor empresa más confiable y con los años ser
                lider de la empresa de traslado de personas tanto en el sector
                público como en el sector privado, ya que satisfacemos a todos
                nuestros clientes ofreciendole una mayor seguridad con un trato
                adecuado.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-lg-6 d-flex flex-column"
          style={{ margin: "0", padding: "0" }}
        >
          <div class="contenedor" style={{ height: "100%" }}>
            <div
              class="empresa-card"
              style={{ backgroundColor: "#172b43", height: "100%" }}
            >
              <h1 class="title10" data-aos="zoom-in">
                VALORES
              </h1>
              <p class="parrafo1">
                <b style={{ color: "#dad10a" }}>•Responsabilidad:</b> Cumplimos
                con los viajes de manera segura y responsable, nos encargamos
                que llegues a tu destino con toda Seguridad. Trabajamos para ti
                y por ti! <br />
                <br />
                <b style={{ color: "#dad10a" }}>•Puntualidad:</b> Nuestra mayor
                prioridad es que llegue a su lugar final a la hora establecida,
                cumplimos cabalmente con toda seguridad y a tiempo por nuestros
                clientes <br />
                <br />
                <b style={{ color: "#dad10a" }}>
                  •Buen servicio al cliente:
                </b>{" "}
                contamos con un equipo de trabajo empático y colaborativo, para
                que nuestros clientes se sientan agustos con nuestros servicios,
                mantenemos una sana convivencia para que nuestro ambiente sea
                agradable y saludable.
                <br />
                <br />
                <b style={{ color: "#dad10a" }}>•Honorabilidad:</b>Todos
                nuestros conductores cumplen acabalidad con sus deberes con
                todos nuestros clientes <br />
                <br />
                <b style={{ color: "#dad10a" }}>•Honradez:</b> Somos justos con
                nuestros precios y servicios realizados
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col my-3">
        <div
          class="col contenedor1 d-flex flex-column-reverse flex-lg-row justify-content-between p-5"
          data-aos="fade-down"
        >
          <div class="historia-content">
            <h1 class="title3" data-aos="fade-up">
              Historia
            </h1>
            <p class="parrafo8 py-3 py-lg-0">
              Es una empresa que se creo en el año 2018 creado principalmente
              para brindar servicio de traslados de personas y encomiendas de
              una manera eficaz y segura.
            </p>
          </div>
          <img
            class="auto"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            src={auto}
            align="LEFT"
            hspace="100"
            vspace="30"
            text-align="justify"
          />
        </div>
      </div>
    </div>
  );
};
