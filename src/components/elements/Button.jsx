import { Link } from "react-router-dom";
const Button= ()=>{

    return(
        // <button style={{width:'13%',marginRight:"2%"}} type="button" class="btn btn-secondary btn-sm">Zaloguj się</button>
        <div>
        <div  class="btn btn-secondary btn-sm">

       
        <Link to="/signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Zaloguj się</Link> </div>
                         
                </div>         
    );
};
export default Button;