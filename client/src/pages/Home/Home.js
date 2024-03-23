import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage">
      <img src="/wallpaper.jpg" alt="Home Pets" />
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Home;
