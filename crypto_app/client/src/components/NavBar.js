import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/currencies">Currencies</Link>
      </li>

      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </ul>
  );
};

export default NavBar;
