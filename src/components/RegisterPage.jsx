import Logo from "./elements/Logo";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const RegisterPage = () => {
  const [login, setLogin] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const signUp = () => {
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/create",
      data: {
        name: login,
        email: email,
        password: password,
      },
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <>
      <div className="loginPage">
        <Link></Link>
        <Logo></Logo>
        <form className="login-formStyle">
          <h2>Zarejestruj się:</h2>
          <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput">
              <h4>Login:</h4>{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          {/* <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput2">
              <h4>Nazwa:</h4>{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Nazwa"
            />
          </div> */}
          <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput2">
              <h4>Email:</h4>{" "}
            </label>
            <input
              type="email"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput2">
              <h4>Hasło:</h4>{" "}
            </label>
            <input
              type="password"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Hasło"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-buttonLogin">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => signUp()}
            >
              zarejestruj się
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegisterPage;
