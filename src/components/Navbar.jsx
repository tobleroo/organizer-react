import React from "react";
import { Link } from "react-router-dom";

//add css file
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <h4>logo here</h4>
      <div className="link-box">
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <Link to="/calendar">calendar</Link>
      </div>
    </nav>
  );
};

export default Navbar;