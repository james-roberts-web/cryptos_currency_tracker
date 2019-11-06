import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">



      <ul>
        <li>
          <Link to="/currencies">Currencies</Link>
        </li>
        
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
