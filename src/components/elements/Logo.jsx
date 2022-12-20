import logo_png from "./logo_image.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img
        style={{ marginRight: "4%", marginLeft: "20%" }}
        src={logo_png}
        alt="zdjecie"
        width="60%"
        height="60%"
      />
    </Link>
  );
};
export default Logo;
