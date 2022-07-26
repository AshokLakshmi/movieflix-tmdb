import { NavLink } from "react-router-dom";

function NavComponent({ onClickFunction }) {
  const NavItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Movies",
      url: "/movies",
    },
    {
      title: "Series",
      url: "/series",
    },
    {
      title: "About",
      url: "/about",
    },
  ];

  return (
    <>
      {NavItems.map(({ title, url }, index) => {
        return (
          <NavLink
            onClick={onClickFunction}
            className="navbar--links-item"
            key={index}
            to={url}
          >
            {title}
          </NavLink>
        );
      })}
    </>
  );
}

export default NavComponent;
