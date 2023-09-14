import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchServices } from "./servicesSlice";
import Service from "./Service";



function Services() {

  const services = useSelector((state) => state.services.services);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

 
  const serviceCard = services.map((service) => (
    <Service key={service.id} service={service}/>
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
