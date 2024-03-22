import React, { useState, useEffect } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjEzODE5MzM0NDlkNWQxNWY3ZDBiNmE2YjFmODdhMSIsInN1YiI6IjYxMTcxNmY0MzUwMzk4MDAyZGI3Yzk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ys_LkZ7sDiPL14OdvOVP0N5VZr3-IbyR1G4BwIeCLXs",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cards-wrapper">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="content">
            <h3>
              {" "}
              <a className="title" href="#">
                {movie.title}
              </a>
            </h3>
            <p className="description"> {movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
