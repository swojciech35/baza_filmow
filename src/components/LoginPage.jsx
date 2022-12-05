import Logo from "./elements/Logo";
const LoginPage=()=>{
    return(
    <>
    <div style={{ minHeight: "100vh", backgroundColor: "#bababa", justifyContent: "flex-start", alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Logo></Logo>
            <form style={{marginTop:"3%", width: "25%", borderWidth: 2, borderStyle: "solid", padding: "2%" }}>
                <h2>Zaloguj się:</h2>
                <div class="form-group" style={{ paddingTop: 30 }}>
                    <label for="formGroupExampleInput"><h4>Login:</h4> </label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Login" />
                </div>
                <div class="form-group" style={{ paddingTop: 30 }}>
                    <label for="formGroupExampleInput2"><h4>Hasło:</h4> </label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Hasło" />
                </div>
                <div style={{paddingTop:30,justifyContent:"center" ,alignItems:"center",display:"flex",}}>
                    <button type="button" class="btn btn-secondary">Zaloguj się</button>
                </div>
            </form>
        </div></>
    )
}
export default LoginPage;