import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogout } from "./features/users/usersSlice";


function UserNavBar(){

    const user = useSelector((state) => state.users.entities);
    const dispatch = useDispatch();

   
    const linkStyles = {
        width: "50px",
        padding: "50px",
        margin: "0 2px 2px",
        color: "white",
    };

    function handleLogout(){
        fetch("/logout", { method: "DELETE" }).then((response) => {
            if (response.ok) {
              dispatch(userLogout(null));
            }
          });
      }

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
            to="/appointments"
            style={linkStyles} 
            >
            MY APPOINTMENTS
            </NavLink>
            <NavLink
            to={`/profile/${user.username}`}
            style={linkStyles} 
            >
            PROFILE
            </NavLink>
            <NavLink
            onClick={handleLogout}
            to="/"
            style={linkStyles} 
            >
            LOG OUT
            </NavLink>
        </div>
    )
}

export default UserNavBar;