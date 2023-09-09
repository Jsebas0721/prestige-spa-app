import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setProfessional } from "./professionalsSlice";

function Professional({ professional}) {

  const { name, picture, gender, about, service_type, reviews } = professional;
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(setProfessional(professional))
  }
  return (
    <div className="professional-card">
      <div className="professional-image">
        <img src={picture} alt="Professional's Pic" />
      </div>
      <div className="professional-details">
        <h2 className="professional-name">{name}</h2>
        <p className="professional-gender">{gender === "Male" ? "♂️" : "♀️" }</p>
        <p className="professional-about">
          {about}
        </p>
        <p className="professional-service">{service_type}</p>
        <NavLink onClick={handleClick} className="professional-reviews-link" to={`/professionals/${name}/reviews`}>See Reviews...({reviews.length})</NavLink>
      </div>
    </div>
  );
}

export default Professional;
