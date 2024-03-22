import { Component } from "react";
import ImageTest from "../assets/card-img-test.jpg";


export default function CardMovie() {
  return (
    <> 
     <div className="card">
        <img className="movie-poster" src={ImageTest} alt="" />
        <div className="content">
        <h3 className="title"> Panda O filme</h3>
        <p className="description"> 02 de Março de 2024</p>
        </div>
     </div>
     
    </>
  );
}


