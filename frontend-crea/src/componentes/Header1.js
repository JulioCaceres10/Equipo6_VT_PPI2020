import React from "react";
import { Link } from "react-router-dom";
import "../Style/navs.css";
function Header1() {
  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link active" to="/inicio">
            Inicio
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/informacion">
            Informacion de semillas
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
          >
            Aprender
          </Link>
          <div class="dropdown-menu">
          <Link class="dropdown-item" to="/aprender/recomendaciones">
              Recomendaciones
            </Link>
            <Link class="dropdown-item" to="/aprender/compostaje">
              Como hacer compost
            </Link>
            <Link class="dropdown-item" to="/aprender/cosechar">
              Aprender a cosechar
            </Link>
            
          </div>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/tienda">
            Tienda
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="#">
            Seguimiento
          </a>
        </li>
      </ul>
    </>
  );
}

export default Header1;
