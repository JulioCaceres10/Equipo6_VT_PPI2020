import React from "react";
import "../Style/Login.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div class="panta">
     <div class="body"></div>
      <div class="grad"></div>
      <div class="header">
        <div>CREA</div>
      </div>
      <br />
      <div class="login">
        <input type="text" placeholder="username" name="user" />
        <br />
        <input type="password" placeholder="password" name="password" />
        <br />
        <Link class="btn btn-primayr" to="/inicio" role="button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
