import Logo from "./elements/Logo";
import { useState } from "react";
import "../App.css";
import axios from "axios";
const LoginPage = () => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const signIn = () => {
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/auth",
      data: {
        login: login,
        password: password,
      },
    }).then((response) => {
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      window.location.replace("/");
    });
  };
  return (
    <>
      <div className="loginPage">
        <Logo></Logo>
        <form className="login-formStyle">
          <h2>Zaloguj się:</h2>
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
              onClick={() => signIn()}
            >
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
