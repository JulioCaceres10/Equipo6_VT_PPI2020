import React from "react";
import "../Style/inicio.css";

function Inici() {
  return (
    <>
      <div class="header4">
        <h1 class="tIN">Crea</h1>
        <h3 class="subIN">Bienvenidos cultivadores</h3>
        <svg
          class="wave3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,149.3C840,171,960,181,1080,170.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <p class="texini">
        este es un espacio para ustedes y sus cultivos donde pueden interactuar
        con otras personas llevar un registro de sus cultivos y poder investigar
        sobre otros temas
      </p>
    </>
  );
}

export default Inici;
