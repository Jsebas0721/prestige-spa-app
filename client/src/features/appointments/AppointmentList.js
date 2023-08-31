import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Appointment from "./Appointment"

function AppointmentList(){

    const appointments = useSelector((state) => state.appointments.appointments.appointments);

    console.log(appointments)
    const appointment = appointments.map((appointment) => (
        <Appointment key={appointment.id} appointment={appointment}/>
    ))
    return (
        <div className="appointment-container">
            {appointment}
        </div>
    )
}

export default AppointmentList;