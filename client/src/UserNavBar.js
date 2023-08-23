import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
   
    const linkStyles = {
        width: "50px",
        padding: "50px",
        margin: "0 2px 2px",
        color: "white",
    };

    return (
        <div className="nav-bar">
            <NavLink
            activeClassName="active"
            to="/services"
            style={linkStyles}
            >
            SERVICES
            </NavLink>
            <NavLink
            to="/profesionals"
            style={linkStyles} 
            >
            PROFESIONALS
            </NavLink>
            <NavLink
            to="/locations"
            style={linkStyles} 
            >
            LOCATIONS
            </NavLink>
            <NavLink
            to="/signup"
            style={linkStyles} 
            >
            SIGN UP
            </NavLink>
            <NavLink
            to="/login"
            style={linkStyles} 
            >
            LOGIN
            </NavLink> 
        </div>
    )
}

export default NavBar;