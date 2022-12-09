import Logo from "./elements/Logo";
import '../App.css';
const LoginPage=()=>{
    return(
    <>
    <div  className="loginPage" >
            <Logo></Logo>
            <form className="login-formStyle">
                <h2>Zaloguj się:</h2>
                <div class="form-group" style={{ paddingTop: 30 }}>
                    <label for="formGroupExampleInput"><h4>Login:</h4> </label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Login" />
                </div>
                <div class="form-group" style={{ paddingTop: 30 }}>
                    <label for="formGroupExampleInput2"><h4>Hasło:</h4> </label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Hasło" />
                </div>
                <div className="login-buttonLogin">
                    <button type="button" class="btn btn-secondary">Zaloguj się</button>
                </div>
            </form>
        </div></>
    )
}
export default LoginPage;