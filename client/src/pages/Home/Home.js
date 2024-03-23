import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage">
      this is the homepage
      <br></br>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Home;
