import React, { useState } from "react";
import NavBar from "./NavBar.css";

const NavBar = () => {
  return (
    <div onClick={navToggle} className={toggleIcon}>
      <nav>
        <ul className={active}>
          <li>
            <a href src="/">
              Link 1
            </a>
          </li>
          <li>
            <a href src="/">
              Link 1
            </a>
          </li>
          <li>
            <a href src="/">
              Link 1
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
