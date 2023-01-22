import "../App.css";
import FilmCard from "./FilmCard";
import axios from "axios";
import { useState, useEffect } from "react";
const Movies = () => {
  const [movies, setmovies] = useState([]);
  function getFilm() {
    axios.get(`https://at.usermd.net/api/movies`).then((res) => {
      const data = res.data;
      setmovies(data);
    });
  }
  useEffect(() => {
    getFilm();
  }, []);
  return (
    <>
      <div className="hp-filmCard">
        {movies.map((movie) => (
          <FilmCard
            image={movie.image}
            title={movie.title}
            opis={movie.content}
          />
        ))}
      </div>
    </>
  );
};
export default Movies;
