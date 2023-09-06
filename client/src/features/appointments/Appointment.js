import React, { useState } from "react";
import { useSelector } from "react-redux";
import UpdateAppointment from "./UpdateAppointment";

function Appointment({ appointment}) {

  const [isUpdating, setIsUpdating ] = useState(false);  
  const { service_name, service_type, date, time, cost, location, duration, professional_id } = appointment;

  const professionals = useSelector((state) => state.professionals.professionals);
  const professional = professionals.map((pro) => {
    if(pro.id === professional_id){
        return pro.name
    }
  });




  return (
    <>
      {isUpdating ? (
          <UpdateAppointment appointment={appointment} setIsUpdating={setIsUpdating}/>
       
      ) : (
        <div className="appointment-card">
          <div className="appointment-info">
              <h2>{service_name}</h2>
              <p>Service Type: <span className="highlight">{service_type}</span></p>
              <p>Professional: <span className="highlight">{professional}</span></p>
              <p>Duration: <span className="highlight">{duration}</span></p>
              <p>Cost: <span className="highlight">{cost}</span></p>
              <p>Date: <span className="highlight">{date}</span></p>
              <p>Time: <span className="highlight">{time}</span></p>
              <p>Location: <span className="highlight">{location}</span></p>
          </div>
          <div className="update-appointment-actions">
              <button className="modify-button" onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>Modify</button>
              <button className="delete-button">Delete</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Appointment;
