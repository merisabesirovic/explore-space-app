import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a target="blank" href="https://www.nasa.gov/">
          <img
            style={{ width: "73px", height: "64px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
          ></img>
        </a>
      </div>
      <div className="navbar-list">
        <NavLink to={"/"} style={{ color: "white", textDecoration: "none" }}>
          <h3>HOME</h3>
        </NavLink>
        <NavLink
          to={"/MarsGenerator"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <h3>GENERATOR</h3>
        </NavLink>
        <NavLink to={"/PlanetImages"} style={{ textDecoration: "none" }}>
          <h3>IMAGES</h3>
        </NavLink>
        <NavLink
          to={"/Galaxies"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h3>GALAXIES</h3>
        </NavLink>
        <NavLink to={"/AboutUs"} style={{ textDecoration: "none" }}>
          <h3>OUR TEAM</h3>
        </NavLink>
      </div>
    </div>
  );
}
