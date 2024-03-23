import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <header>
      <div>tagline</div>
      <nav className="navBar">
        <div className="left">
          <img src="#" placeholder="Logo" alt="Logo" />
          <NavLink to="/">New Arrivals</NavLink>
          <NavLink to="/">Best Sellers</NavLink>
          <NavLink to="/">Beard Care</NavLink>
          <NavLink to="/">Skin Care</NavLink>
          <NavLink to="/">Shave</NavLink>
          <NavLink to="/">Fragrance</NavLink>
        </div>
        <div className="right">
          <input placeholder="search product"></input>
          <NavLink to="/">User</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
