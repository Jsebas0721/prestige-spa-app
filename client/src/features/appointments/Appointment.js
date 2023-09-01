import React from "react";

function Appointment({ appointment }) {

  const { service_name, service_type, date_time, location, duration } = appointment;

  return (
    <table className="appointments-table">
      <thead>
        <tr>
          <th>Service Name</th>
          <th>Service Type</th>
          <th>Duration</th>
          <th>Date & Time</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
              <p>{service_name}  </p>
          </td>
          <td>
              <p>{service_type} </p>
          </td>
          <td>
              <p>{duration} </p>
          </td>
          <td>
              <p>{date_time }</p>  
          </td>
          <td>
              <p>{location} </p>  
          </td>
          <td>
              <div className="appointment-actions">
                  <button className="modify-button">Modify</button>
                  <button className="delete-button">Cancel</button>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Appointment;
