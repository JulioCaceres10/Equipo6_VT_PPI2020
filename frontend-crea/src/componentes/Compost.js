import React from "react";
import "../Style/compost.css";
function Cosechar() {
  return (
    <>
      <div class="header3">
        <h1 class="tC">Compostaje</h1>
        <h3 class="subC">Receta para preparar compost casero</h3>
        <svg
          class="wave2"
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
      <p class="texcom">
        Hay muchas recetas o formas diferentes de hacer compostaje o preparar
        compostt casero, pero la que te proponemos a continuacion es una de las
        mas sencillas, asi toda la familia podra disfrutar de esta gratificante
        experiencia. Los datos los hemos extraido en su mayor parte del
        <mark> Manual de Compostaje</mark> publicado por el Ministerio del Medio
        Ambiente y Medio Rural y Marino del Gobierno de España.
      </p>
      <p class="espaC"></p>
    </>
  );
}

export default Cosechar;
