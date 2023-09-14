import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Appointment from "./Appointment"
import {fetchAppointments} from "./appointmentsSlice"
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { setService } from "../services/servicesSlice";

function AppointmentList(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const appointments = useSelector((state) => state.appointments.appointmentList);
    const user = useSelector((state) => state.users.user);
    useEffect(()=> {
        dispatch(fetchAppointments());
        dispatch(setService(null))
    },[dispatch])
    
    const currentUserAppointments = appointments.filter((appointment) => appointment.user_id === user.id)
    
  
    
    const appointment = currentUserAppointments.map((appointment) => (
        <Appointment key={appointment.id} appointment={appointment}/>
    ))
    return (
        <div className="appointment-container">
            <h1>Your Appointments:</h1>
            <hr/>
            {currentUserAppointments.length !== 0 ? (  
                <div className="appointments-list">
                {appointment}
                </div>
            ) : <p>You don't have any Appointments...</p>}
            <hr/>
            <button onClick={() => navigate("/appointments/new")} className="new-appointment-button">Book New Appointment</button>
        </div>
    )
}

export default AppointmentList;