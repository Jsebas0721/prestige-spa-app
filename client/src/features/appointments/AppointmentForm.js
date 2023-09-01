import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

function AppointmentForm() {

  const services = useSelector((state) => state.services.services)
  const locations = useSelector((state) => state.locations.locations)
  const [errors, setErrors]= useState([]);
  const [appointmentData, setAppointmentData] = useState({
      service_name: "",
      service_type: "",
      date_time: "",
      duration: "",
      location: "",
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData)
    })
    .then((resp) => {
      if(resp.ok){
        resp.json().then((newAppointment) => {
        
        });
      }else{
         resp.json().then((errorData) => setErrors(errorData.errors)); 
      }
    
    })
    
  }

  function handleChange(e){
    console.log(e.target.value)
    setAppointmentData({
        ...appointmentData,
        [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit} className="appointment-form">

      <label>Service:</label>
      <select onChange={handleChange} id="service-name" name="service">
        {services.map((service) => (
          <option key={service.id} value={service.service_name}>{service.service_name}</option>
        ))}
      </select>
      <label>Date:</label>
      <input 
      onChange={handleChange} 
     
      type="date" 
      id="date" 
      name="date" 
      />
      <label>Time:</label>
      <input 
      onChange={handleChange} 
      type="time" 
      id="time" 
      name="time" 
      />
      <label>Location:</label>
      <select onChange={handleChange} id="location-name" name="location">
        {locations.map((location) => (
          <option key={location.id} value={location.name}>{location.name}</option>
        ))}
      </select>
      {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}    
      <div className="button-container">
        <button type="submit">Schedule Appointment</button>
      </div>
    </form>
  );
}

export default AppointmentForm;
