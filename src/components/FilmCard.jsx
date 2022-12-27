import Star from "./elements/star.png";
import "../App.css";
import { Link } from "react-router-dom";
const FilmCard = (props) => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/details">
        <div className="filmCard">
          <img src={props.image} alt="image" width="239" height="240" />
          <p>
            <strong>{props.title}</strong>
          </p>
          <a>{props.opis}</a>
          <div style={{ flexDirection: "row" }}>
            <img src={Star} alt="gwaizda" width="35" height="35" />
            {props.rate}
          </div>
        </div>
      </Link>
    </>
  );
};
export default FilmCard;
