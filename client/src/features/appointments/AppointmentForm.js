import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAppointment } from "./appointmentsSlice";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {

  const services = useSelector((state) => state.services.services)
  const professionals = useSelector((state) => state.professionals.professionals)
  const locations = useSelector((state) => state.locations.locations)
  const [errors, setErrors]= useState([]);
  const [appointmentData, setAppointmentData] = useState({
      service_name: "",
      service_type: "",
      duration: "",
      cost: "",
      date: "",
      time: "",
      location: "",
      professional_id: null,
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(appointmentData)

  const professionalList = professionals.filter((pro) => pro.service_type === appointmentData.service_type);
  
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
          console.log(newAppointment)
          dispatch(addAppointment(newAppointment));
          navigate("/appointments")
        });
      }else{
         resp.json().then((errorData) => setErrors(errorData.errors)); 
      }
    
    })
    
  }

  function handleChange(e){
   
    if(e.target.name === "service"){
      const service = services.find((service) => service.service_name === e.target.value);
      console.log(service)
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
    <form onSubmit={handleSubmit} className="appointment-form">

      <label>Service:</label>
      <select onChange={handleChange} id="service-name" name="service">
          <option value="" selected disabled hidden>Select Service</option>
        {services.map((service) => (
          <option key={service.id} value={service.service_name} >{service.service_name}</option>
        ))}
      </select>
      { appointmentData.service_type ? ( 
        <>
          <label>Professional:</label>
          <select onChange={handleChange} id="professional-name" name="professional_id">
            <option value="" selected disabled hidden>Select Professional</option>
            {professionalList.map((pro) => (
              <option key={pro.id} value={pro.id}>{pro.name}</option>
            ))}
          </select>
        </>
      ) : null}
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
