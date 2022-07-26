import "./header.css";
import NavComponent from "./NavComponent";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
// useScroll custom hook
import useScroll from "./useScroll";

function HeaderComponent() {
  const [toggle, setToggle] = useState(false);

  // useScroll custom hook
  const { navbar } = useScroll();

  return (
    <div className={navbar ? "header active" : "header"}>
      <div className="navbar">
        <div className="logo">
          <Link to="/">React Logo </Link>
        </div>
        <MdMenu
          onClick={() => {
            setToggle(!toggle);
          }}
        />

        <div className={toggle ? "navbar--links show" : "navbar--links hide"}>
          <NavComponent onClickFunction={() => setToggle(false)} />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
