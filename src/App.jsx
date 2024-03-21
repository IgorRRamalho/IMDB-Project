import { useState } from "react";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import MovieList from "./components/MovieList";
// eslint-disable-next-line no-unused-vars


function App() {
  const [count, setCount] = useState();

  return (
    <>
      <body className="main">
        <header className="head">
          <Head />
        </header>
        <Body />
        <MovieList/>
      </body>
    </>
  );
}

export default App;
