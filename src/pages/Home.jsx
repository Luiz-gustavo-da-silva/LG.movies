import { useState, useEffect } from "react";

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
    <div>
      {topMovies &&
        topMovies.map((movie) => {
          return <p key={movie.id}>{movie.title}</p>;
        })}
    </div>
  );
};

export default Home;
