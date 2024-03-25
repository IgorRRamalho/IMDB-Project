/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import MovieList from "./components/MovieList";
import CardMovie from "./components/CardMovie";

function App() {
  // const [count, setCount] = useState();

  return (
    <>
      <body className="main">
        <header className="head">
          <Head />
        </header>
        <Body />
      </body>
    </>
  );
}

export default App;
