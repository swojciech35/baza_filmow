import Logo from "./elements/Logo";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const DetailsPage = (props) => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  function getFilm() {
    axios.get(`https://at.usermd.net/api/movies/${movieId}`).then((res) => {
      const data = res.data;
      setMovie(data);
    });
  }

  useEffect(() => {
    getFilm();
  }, []);
  return (
    <>
      <div className="loginPage">
        <Logo></Logo>
        <div className="filmCard">
          <img src={movie.image} alt="image" width="239" height="240" />
          <p>
            <strong>{movie.title}</strong>
          </p>
          <p>{movie.content}</p>
          <div style={{ flexDirection: "row" }}></div>
        </div>
      </div>
    </>
  );
};
export default DetailsPage;
