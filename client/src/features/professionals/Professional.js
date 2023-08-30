import React from "react";

function Professional({ professional }) {

  const { id, name, picture, gender, about, service_type } = professional;
    console.log()
  return (
    <div className="professional-card">
      <div className="professional-image">
        <img src={picture} alt="Professional's Image" />
      </div>
      <div className="professional-details">
        <h2 className="professional-name">{name}</h2>
        <p className="professional-gender">{gender === "Male" ? "♂️" : "♀️" }</p>
        <p className="professional-about">
          {about}
        </p>
        <p className="professional-service">{service_type}</p>
      </div>
    </div>
  );
}

export default Professional;
