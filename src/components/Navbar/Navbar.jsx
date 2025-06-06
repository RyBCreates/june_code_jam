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
        <NavLink to="/about" className="navbar__link-about">
          <li className="navbar__link">About</li>
        </NavLink>

        <NavLink to="/skills" className="navbar__link-skills">
          <li className="navbar__link">Skills</li>
        </NavLink>

        <NavLink to="/projects" className="navbar__link-projects">
          <li className="navbar__link">Projects</li>
        </NavLink>

        <NavLink to="/contact" className="navbar__link-contact">
          <li className="navbar__link">Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
