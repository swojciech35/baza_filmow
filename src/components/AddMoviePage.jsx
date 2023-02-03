import Logo from "./elements/Logo";
import "../App.css";
import { useState } from "react";
import axios from "axios";
const AddMoviePage = () => {
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(null);

  const addMovie = (title, image, content) => {
    axios({
      method: "post",
      url: "https://at.usermd.net/api/movies",
      data: {
        title: title,
        image: image,
        content: content,
      },
    }).then((response) => {
      window.location.replace("/");
    });
  };
  return (
    <>
      <div className="loginPage">
        <Logo></Logo>
        <form className="login-formStyle">
          <h2>Dodaj Film:</h2>
          <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput">
              <h4>Tytuł:</h4>{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Tytuł"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput2">
              <h4>Zdjęcie:</h4>{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="link do zdjęcia"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput3">
              <h4>Opis:</h4>{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput3"
              placeholder="Opis"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="login-buttonLogin">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                if(title!=null&&image!=null&&content!=null){
                addMovie(title, image, content);
              }else{
                alert("Podaj wszystkie dane filmu");
              }
              }}
            >
              Dodaj film
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddMoviePage;
