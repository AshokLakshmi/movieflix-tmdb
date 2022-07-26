import "../styles/404.style.css";
import SVG from "../images/errorpage.svg";

function PageNotFound() {
  return (
    <div className="notfound__page pages">
      <img src={SVG} />
    </div>
  );
}

export default PageNotFound;
