import RowCards from "./RowCards";
import "./row_card.css";
import homePageArray from "../../api/apiHomePageArray";

function RowCardContainer({ title, type, fetchUrl }) {
  return (
    <div className="row__card_container">
      <h1>{title}</h1>
      <RowCards fetchUrl={fetchUrl} type={type} />
    </div>
  );
}

export default RowCardContainer;
