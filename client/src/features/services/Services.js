import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchServices } from "./servicesSlice";
import { useNavigate } from "react-router-dom";


function Services() {
  
  const navigate = useNavigate();

  const services = useSelector((state) => state.services.services);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);


  const serviceCard = services.map((service) => (
    <div key={service.id} className="service-card">
      <h2 className="service-name">{service.service_name}</h2>
      <p className="service-type">{service.service_type}</p>
      <p className="service-description">
       {service.description}
      </p>
      <div className="service-details">
        <span className="service-duration">{service.duration}</span>
        <span className="service-cost">{service.cost}</span>
      </div>
      <button className="book-now-link" onClick={() => navigate("/appointments/new")}>
        Book Now
      </button>
    </div>
  ));

  return (
    <div className="services">
      <h1 >Know Our Services...</h1>
      <hr/>
      <div className="service-container">
        {serviceCard}
      </div>
    </div>
  );
}

export default Services;
