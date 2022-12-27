import { Link } from "react-router-dom";
const Button= (props)=>{

    return(
        // <button style={{width:'13%',marginRight:"2%"}} type="button" class="btn btn-secondary btn-sm">Zaloguj się</button>
        <div style={{marginLeft:10,marginRight:10}}>
        <div  class="btn btn-secondary btn-sm">

       
        <Link to={props.link} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">{props.text}</Link> </div>
                         
                </div>         
    );
};
export default Button;