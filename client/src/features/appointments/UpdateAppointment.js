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
  const { service_name, service_type, duration, cost, professional_id, date, time, location } = appointment;

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

  const professional = professionals.map((pro) => {
    if(pro.id === professional_id){
        return pro.name
    }
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/appointments/${appointment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData)
    })
    .then((resp) => resp.json())
    .then((updatedAppointment) => {
        console.log(updatedAppointment)
        dispatch(updateAppointment(updatedAppointment));
        navigate("/appointments");
    });
    setIsUpdating(false);
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
        <option value={professional} selected disabled hidden>{professional}</option>
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
    <div className="button-container">
      <button type="submit">Schedule Appointment</button>
    </div>
  </form>
  </div>
  );
}

export default UpdateAppointment;
