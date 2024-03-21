import { Component } from "react";
import Logo from "../assets/logo_original.svg";

export default function Head() {
  return (
    <> 
        <div className="nav-bar">
          <img
            src={Logo}
            alt="The Movie Database (TMDB)"
            width="154"
            height="20"
            className="logo"
          />

          <ul>
            <li>
              <a href="#">Filmes</a>
            </li>
            <li>
              <a href="#">Séries</a>
            </li>
            <li>
              <a href="#">Pessoas</a>
            </li>
            <li>
              <a href="#">Mais</a>
            </li>
          </ul>
        </div>

        <div className="login">
          <a href="#">Fazer Login</a>
        </div>
    </>
  );
}


