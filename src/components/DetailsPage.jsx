import Logo from "./elements/Logo";
import "../App.css";
import FilmCard from "./FilmCard";
const DetailsPage = (props) => {
  return (
    <>
      <div className="loginPage">
        <Logo></Logo>
        <FilmCard
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/239px-American_Beaver.jpg"
          }
          title={"Przygody Bobra Andrzeja"}
          opis={"Andrzej to dobry bóbr"}
          rate={"9/10"}
        />
      </div>
    </>
  );
};
export default DetailsPage;
