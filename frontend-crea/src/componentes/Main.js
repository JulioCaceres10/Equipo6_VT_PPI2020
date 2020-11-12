import React from "react";
import "../Style/infor.css";
function Main() {
  return (
    <>
      <div class="Header">
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
        <h1 class="tT">Tomates</h1>
        <h3 class="subT">
          Los tomates son ricos en nutrientes y previenen al organismo de
          ciertas enfermedades cronicas
        </h3>
        <svg
          class="wave"
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
      <p class="tomate">
        Este fruto originario de ecuador, peru y el norte de chile, que a pesar
        de ser fruta se suele consumir como hortaliza,{" "}
        <strong>es uno de los alimentos mas faciles de cultivar</strong> y suele
        ser habitual entre quienes se inician en la aventura de crear un huerto
        casero. La diferencia entre el sabor de un tomate cultivado en casa y el
        del que muchas veces compramos en el supermercado puede llegar a ser
        abismal
      </p>
      <p class="tomate">
        Sus ventajas para la salud radican en las{" "}
        <strong>altas cantidades de nutrientes, </strong>como potasio y fosforo,
        asi como antioxidantes y vitaminas A, B y C. De acuerdo con un estudio
        recienetemente publicado en la revista especializada Medical News Today,
        es un alimento "funcional" ya que, mas alla de su funcion nutritiva,
        beneficia al organismo.
      </p>
      <p class="espaT"></p>
    </>
  );
}

export default Main;
