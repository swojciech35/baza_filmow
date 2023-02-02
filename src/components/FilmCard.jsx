import Star from "./elements/star.png";
import "../App.css";
import { Link } from "react-router-dom";
const FilmCard = (props) => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/details/${props.id}`}>
        <div className="filmCard">
          <img src={props.image} alt="image" width="250" height="330" />
          <p>
            <strong>{props.title}</strong>
          </p>
          <p class="text">{props.opis}</p>
          <div style={{ flexDirection: "row" }}>
            {/* <img src={Star} alt="gwaizda" width="35" height="35" />
            {props.rate} */}
          </div>
        </div>
      </Link>
    </>
  );
};
export default FilmCard;
