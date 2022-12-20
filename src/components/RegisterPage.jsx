import Logo from "./elements/Logo";
import "../App.css";
import { Link } from "react-router-dom";
const RegisterPage = () => {
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
            />
          </div>
          <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput2">
              <h4>Nazwa:</h4>{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Nazwa"
            />
          </div>
          <div class="form-group" style={{ paddingTop: 30 }}>
            <label for="formGroupExampleInput2">
              <h4>Email:</h4>{" "}
            </label>
            <input
              type="email"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="email"
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
            />
          </div>
          <div className="login-buttonLogin">
            <button type="button" class="btn btn-secondary">
              zarejestruj się
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegisterPage;
