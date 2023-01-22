import "../App.css";
import Logo from "./elements/Logo";
import Search from "./elements/Search";
import Button from "./elements/Button";
import Movies from "./Movies";
const HomePage = () => {
  return (
    <>
      <div className="hp-background">
        <div className="hp-header">
          <Logo></Logo>
          <Search></Search>
          <Button text={"DODAJ FILM"} link={"/add"} />
          <Button text={"Zaloguj się "} link={"/signin"} />
          <Button text={"Zarejestruj się  "} link={"/signup"} />
        </div>
        <div className="hp-filmCard">
          <Movies></Movies>
        </div>
      </div>
    </>
  );
};
export default HomePage;
