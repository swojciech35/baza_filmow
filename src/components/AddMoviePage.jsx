import Logo from "./elements/Logo";
import '../App.css';
const AddMoviePage=()=>{
    return(
    <>
    <div  className="loginPage" >
            <Logo></Logo>
            <form className="login-formStyle">
                <h2>Dodaj Film:</h2>
                <div class="form-group" style={{ paddingTop: 30 }}>
                    <label for="formGroupExampleInput"><h4>Tytuł:</h4> </label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Login" />
                </div>
                <div class="form-group" style={{ paddingTop: 30 }}>
                    <label for="formGroupExampleInput2"><h4>Opis:</h4> </label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Hasło" />
                </div>
                <div className="login-buttonLogin">
                    <button type="button" class="btn btn-secondary">Dodaj film</button>
                </div>
            </form>
        </div></>
    )
}
export default AddMoviePage;