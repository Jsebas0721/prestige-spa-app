import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogout } from "./usersSlice";
import { useNavigate } from "react-router-dom";

function UserNavBar() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkStyles = {
    width: "50px",
    padding: "50px",
    margin: "0 2px 2px",
  };

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        dispatch(userLogout(null));
        navigate("/");
      }
    });
  }

  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="/services" style={linkStyles}>
        SERVICES
      </NavLink>
      <NavLink className="nav-link" to="/professionals" style={linkStyles}>
        PROFESSIONALS
      </NavLink>
      <NavLink className="nav-link" to="/locations" style={linkStyles}>
        LOCATIONS
      </NavLink>
      <NavLink className="nav-link" to="/appointments" style={linkStyles}>
        MY APPOINTMENTS
      </NavLink>
      <NavLink
        className="nav-link"
        to={`/profile/${user.username}`}
        style={linkStyles}
      >
        PROFILE
      </NavLink>
      <NavLink
        className="nav-link"
        onClick={handleLogout}
        to="/"
        style={linkStyles}
      >
        LOG OUT
      </NavLink>
    
    </div>
  );
}

export default UserNavBar;
