import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    width: "50px",
    padding: "50px",
    margin: "0 2px 2px",
  };

  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="/home" style={linkStyles}>
        HOME
      </NavLink>
      <NavLink className="nav-link" to="/signup" style={linkStyles}>
        SIGN UP
      </NavLink>
      <NavLink className="nav-link" to="/login" style={linkStyles}>
        LOGIN
      </NavLink>
    </div>
  );
}

export default NavBar;
