import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAppointment } from "./appointmentsSlice";

function UpdateAppointment({ appointment, setIsUpdating }) {
  const services = useSelector((state) => state.services.services);
  const professionals = useSelector((state) => state.professionals.professionals);
  const locations = useSelector((state) => state.locations.locations);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { service_name, service_type, duration, cost, date, time, location, professional} = appointment;

  const [errors, setErrors] = useState([]);
  const [appointmentData, setAppointmentData] = useState({
    service_name: service_name,
    service_type: service_type,
    duration: duration,
    cost: cost,
    date: date,
    time: time,
    location: location,
  });

  const professionalList = professionals.filter(
    (pro) => pro.service_type === appointmentData.service_type
  );

 
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/appointments/${appointment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData)
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((updatedAppointment) => {
            dispatch(updateAppointment(updatedAppointment));
            setIsUpdating(false);
            navigate("/appointments");
        });
      } else {
        resp.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

  function handleChange(e) {
    if(e.target.name === "service"){
      const service = services.find((service) => service.service_name === e.target.value);

      setAppointmentData({
        ...appointmentData, 
          service_name: service.service_name,
          service_type: service.service_type,
          duration: service.duration,
          cost: service.cost,
      })

    }else{
      setAppointmentData({
          ...appointmentData,
          [e.target.name]: e.target.value
      });
    }


  }

  function handleClick(){
    setIsUpdating(false);
    navigate("/appointments");
  }

  return (
  <div className="update-appointment-card">
    <form onSubmit={handleSubmit} className="update-appointment-form">
    <p>Service Name:
     <select onChange={handleChange} id="service-name" name="service">
        <option value={appointmentData.service_name} selected disabled hidden>{appointmentData.service_name}</option>
      {services.map((service) => (
        <option key={service.id} value={service.service_name} >{service.service_name}</option>
      ))}
    </select>
    </p>
    <p>Service Type:
    <span> {appointmentData.service_type}</span>
    </p>
    <p>Duration:
    <span> {appointmentData.duration}</span>
    </p>
    <p>Cost: 
    <span> {appointmentData.cost}</span>
    </p>
    <p>Professional:
    <select onChange={handleChange} id="professional-name" name="professional_id">
        <option value="" selected disabled hidden>{professional.name}</option>
          {professionalList.map((pro) => (
            <option key={pro.id} value={pro.id}>{pro.name}</option>
          ))}
    </select>
    </p>
    <p>Date:
    <input 
    onChange={handleChange} 
   
    type="date" 
    id="date" 
    name="date" 
    value={appointmentData.date}
    />
    </p>
    <p>Time: 
    <input 
    onChange={handleChange} 
    type="time" 
    id="time" 
    name="time" 
    value={appointmentData.time}
    />
    </p>
    <p>Location:
    <select onChange={handleChange} id="location-name" name="location">
      <option value={appointmentData.location} selected disabled hidden>{appointmentData.location}</option>
      {locations.map((location) => (
        <option key={location.id} value={location.name}>{location.name}</option>
      ))}
    </select> 
    </p> 
    {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
    )}
    <div className="update-appointment-actions">
      <button type="submit" className="save-button">Save Changes</button>
      <button onClick={handleClick}className="cancel-button"> Cancel</button>
    </div>
  </form>
  </div>
  );
}

export default UpdateAppointment;
