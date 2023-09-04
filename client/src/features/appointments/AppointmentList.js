import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Appointment from "./Appointment"
import {fetchAppointments} from "./appointmentsSlice"
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

function AppointmentList(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const appointments = useSelector((state) => state.appointments.appointmentList);
    const user = useSelector((state) => state.users.user);
   
    useEffect(()=> {
        dispatch(fetchAppointments());
    },[dispatch])
    
    
    const currentUserAppointments = appointments.filter((appointment) => appointment.user_id === user.id)
    
    const appointment = currentUserAppointments.map((appointment) => (
        <Appointment key={appointment.id} appointment={appointment}/>
    ))
    return (
        <div className="appointment-container">
            <h1>Your Appointments:</h1>
            {appointments !==  [] ? (
                <table className="appointments-table">
                <thead>
                <tr>
                    <th>Service Name</th>
                    <th>Service Type</th>
                    <th>Professional</th>
                    <th>Duration</th>
                    <th>Cost</th>
                    <th>Date & Time</th>
                    <th>Location</th>
                </tr>
                </thead>
                {appointment}
                </table>
            ) : ( 
                <h1>You don't have any appointments</h1>
            )}
            <button onClick={() => navigate("/appointments/new")} className="new-appointment-button">Book New Appointment</button>
        </div>
    )
}

export default AppointmentList;