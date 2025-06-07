import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <NavLink to="/" className="navbar__link-home">
          <li className="navbar__link">Home</li>
        </NavLink>
        <NavLink to="/trips" className="navbar__link-trips">
          <li className="navbar__link">Trips</li>
        </NavLink>

        <NavLink to="/calendar" className="navbar__link-calendar">
          <li className="navbar__link">Calendar</li>
        </NavLink>

        <NavLink to="/about" className="navbar__link-about">
          <li className="navbar__link">About</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
