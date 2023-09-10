import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateAppointment from "./UpdateAppointment";
import { deleteAppointment } from "./appointmentsSlice";
import NewReview from "../reviews/NewReview";

function Appointment({ appointment}) {

  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating ] = useState(false);  
  const [isLeavingReview, setIsLeavingReview] = useState(false);
  const { service_name, service_type, date, time, cost, location, duration, professional_id, is_completed } = appointment;

  const professionals = useSelector((state) => state.professionals.professionals);
  const professional = professionals.map((pro) => pro.id === professional_id ? pro.name : null);

  function handleDeleteAppointment(){
    if(window.confirm("Are you sure you want to cancel?")){
      fetch(`/appointments/${appointment.id}`, {
        method: "DELETE",
      });
      dispatch(deleteAppointment(appointment))
    }
  }

  

  return (
    <>
      {isUpdating ? (
        <UpdateAppointment appointment={appointment} setIsUpdating={setIsUpdating}/>
        ) : (
          <div className="appointment-card" >
          {isLeavingReview ? <NewReview appointment={appointment}/> : 
          <div>
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
            {is_completed ? null : (
              <div className="appointment-actions">
                <button className="completed-button" onClick={() => setIsLeavingReview((isLeavingReview) => !isLeavingReview)} >Complete</button>
                <button className="modify-button" onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>Modify</button>
                <button className="delete-button" onClick={handleDeleteAppointment}>Cancel</button>
              </div>
            )}
          </div>
          }
          
          </div>
      )}
      
        
    </>
  );
}

export default Appointment;
