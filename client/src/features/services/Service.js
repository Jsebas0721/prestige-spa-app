import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setService } from "./servicesSlice";

function Service({service}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {service_name, service_type, description, duration, cost} = service

    function handleClick(){
        navigate("/appointments/new")
        dispatch(setService(service))
    }

  return (
    <div className="service-card">
      <h2 className="service-name">{service_name}</h2>
      <p className="service-type">{service_type}</p>
      <p className="service-description">{description}</p>
      <div className="service-details">
        <span className="service-duration">{duration}</span>
        <span className="service-cost">{cost}</span>
      </div>
      <button className="book-now-link" onClick={handleClick}>
        Book Now
      </button>
    </div>
  );
}

export default Service;
