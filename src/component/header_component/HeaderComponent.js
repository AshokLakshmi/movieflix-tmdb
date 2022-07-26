import "./header.css";
import NavComponent from "./NavComponent";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
// useScroll custom hook
import useScroll from "./useScroll";
// framer motion for navbar animation
import { motion } from "framer-motion";
// framer motion for navbar animation
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-20%" },
};
// framer motion for navbar animation
function HeaderComponent() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
            setIsOpen((isOpen) => !isOpen);
            setToggle(!toggle);
          }}
        />
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={toggle ? "navbar--links show" : "navbar--links hide"}
        >
          <NavComponent onClickFunction={() => setToggle(!toggle)} />
        </motion.div>
      </div>
    </div>
  );
}

export default HeaderComponent;
