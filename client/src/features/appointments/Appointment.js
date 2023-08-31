import React from "react";

function Appointment({appointment}){

    const {service_name, service_type, date_time, location, duration } = appointment
    return (
        <li className="appointment">
            <div className="appointment-service">
                <p>{service_name}</p>
                <p>{service_type}</p>
                <p>{duration}</p>
            </div>
            <div className="appointment-details">
                <p>{date_time}</p>
                <p>{location}</p>
            </div>
            <div className="appointment-actions">
                <button className="modify-button">Modify</button>
                <button className="delete-button">Delete</button>
            </div>
        </li>
    )
}

export default Appointment;