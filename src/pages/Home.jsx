import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "../pages/MovieGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRateURL = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRateURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">
        Melhores filmes:
      </h2>
      <div className="movies-container">
      {topMovies.length === 0 && <p>Carregando...</p>}
      
      {topMovies.length > 0 &&
        topMovies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
