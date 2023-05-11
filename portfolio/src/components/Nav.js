import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="li-n">
          <Link to="/">Back to the Loading Screen!</Link>
        </li>
        <li className="li-n">
          <Link to="/home">Home</Link>
        </li>
        <li className="li-n">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
