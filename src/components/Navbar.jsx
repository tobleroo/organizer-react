import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//add css file
import "../styles/Navbar.css"
import { isTokenExpired } from "../Api/OrganizerAuth";

const Navbar = ({setUserLoggedIn}) => {

  function logout() {
    setUserLoggedIn(false);
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  

  return (
    <nav>
      <h4>Organizer</h4>
      <div className="link-box">
        <Link to="/">Home</Link>
        
        
        {isTokenExpired() ? (
            <>
              <Link to="/calendar">Calendar</Link>
              <Link to="/todo">Todo</Link>
              <button type="button" id="logoutBtn" onClick={logout}>logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
      </div>
    </nav>
  );
};

export default Navbar;