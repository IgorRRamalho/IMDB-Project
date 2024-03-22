// eslint-disable-next-line no-unused-vars
import { Component } from "react";
import MovieList from "./MovieList";
import CardMovie from "./CardMovie";

export default function Body() {
  return (
    <>
      <div className="content-wrapper">
        <h1> Filmes Populares</h1>

        <MovieList />
      </div>
    </>
  );
}
