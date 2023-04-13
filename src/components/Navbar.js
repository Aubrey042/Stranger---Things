// src/components/Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Navbar = ({ isLoggedIn, setIsLoggedIn, setUser }) => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <Logout setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
};

export default Navbar;
