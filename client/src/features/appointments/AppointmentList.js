import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Appointment from "./Appointment"
import { setAppointments } from "./appointmentsSlice";
import {useNavigate} from "react-router-dom";

function AppointmentList(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const appointments = useSelector((state) => state.users.user.appointments);

    useEffect(() => {
        dispatch(setAppointments(appointments))
    },[dispatch, appointments])

    console.log(appointments)
    const appointment = appointments.map((appointment) => (
        <Appointment key={appointment.id} appointment={appointment}/>
    ))
    return (
        <div className="appointment-container">
            <h1>Your Appointments:</h1>
            {appointments !==  [] ? appointment : ( <h1>You don't have any appointments</h1>)}
            <button onClick={() => navigate("/appointments/new")} className="new-appointment-button">Book New Appointment</button>
        </div>
    )
}

export default AppointmentList;