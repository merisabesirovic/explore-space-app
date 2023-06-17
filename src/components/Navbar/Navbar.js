import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          style={{ width: "50px", height: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
        ></img>
      </div>
      <div className="navbar-list">
        <h3>SEARCH</h3>
        <NavLink
          to={"/MarsGenerator"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <h3>GENERATOR</h3>
        </NavLink>
        <NavLink to={"/PlanetImages"} style={{ textDecoration: "none" }}>
          <h3>IMAGES</h3>
        </NavLink>
        <NavLink to={"/AboutUs"} style={{ textDecoration: "none" }}>
          <h3>OUR TEAM</h3>
        </NavLink>
      </div>
    </div>
  );
}
