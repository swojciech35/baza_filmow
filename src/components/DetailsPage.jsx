import Logo from "./elements/Logo";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const DetailsPage = () => {
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
        <div style={{backgroundColor:"#696969",flexDirection:"row",display:"flex",width:"60%",marginTop:30,marginBottom:30,borderWidth:2,border:"solid",padding:3}}>
          <img src={movie.image} alt="image" width="350"  />
          <div>
          <p style={{display:"flex",justifyContent:"center",fontSize:40}}>
            <strong>{movie.title}</strong>
          </p>
          <p style={{margin:40}}>{movie.content}</p>
       </div>
        </div>
      </div>
    </>
  );
};
export default DetailsPage;
