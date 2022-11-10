import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <nav>
      <ul className={active}>
        <li>
          <a href src="/">
            What's On
          </a>
        </li>
        <li>
          <a href src="/">
            Home
          </a>
        </li>
        <li>
          <a href src="/">
            Book Tickets
          </a>
        </li>
        <li>
          <a href src="/">
            Contact Us
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
