import "../App.css";
import Logo from "./elements/Logo";
import Search from "./elements/Search";
import Button from "./elements/Button";
import Movies from "./Movies";
import { isExpired } from "react-jwt";
const HomePage = () => {
  return (
    <>
      <div className="hp-background">
        <div className="hp-header">
          <Logo></Logo>
          <Search></Search>
          {!isExpired(localStorage.getItem('token'))?(<Button text={"DODAJ FILM"} link={"/add"} />):(null)}
          
          {!isExpired(localStorage.getItem('token'))?(<Button text={"Wyloguj się "} fun={()=>{localStorage.setItem('token',null);window.location.reload();}} />):(<Button text={"Zaloguj się "} link={"/signin"} />)}
          
          {!isExpired(localStorage.getItem('token'))?(null):(<Button text={"Zarejestruj się  "} link={"/signup"} />)}
          
        </div>
        <div className="hp-filmCard">
          <Movies></Movies>
        </div>
      </div>
    </>
  );
};
export default HomePage;
