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
        <li>
        <Link class="nav-ite" title="Cerrar sesion" to="/">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-door-open-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
</svg>
</Link>
        </li>
      </ul>
    </>
  );
}

export default Header1;
