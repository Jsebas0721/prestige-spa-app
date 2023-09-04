import React from "react";
import { useSelector } from "react-redux";

function Appointment({ appointment}) {

  const { service_name, service_type, date, time, cost, location, duration, professional_id } = appointment;

  const professionals = useSelector((state) => state.professionals.professionals);
  const professional = professionals.map((pro) => {
    if(pro.id === professional_id){
        return pro.name
    }
  });

 
  

  return (
      <tbody className="appointments-table">
        <tr>
          <td>
              <p>{service_name}  </p>
          </td>
          <td>
              <p>{service_type} </p>
          </td>
          <td>
              <p>{professional} </p>
          </td>
          <td>
              <p>{duration} </p>
          </td>
          <td>
              <p>{cost}  </p>
          </td>
          <td>
              <p>{date} / {time}</p>  
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
 
  );
}

export default Appointment;
