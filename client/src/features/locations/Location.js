import React from "react";

function Location({location}){

    console.log(location)
    const{address, city, state, postal_code, country, phone} = location
    return (
        <div className="location-card">
            <div className="location-details">
                <p className="location-address">{address}</p>
                <p>{city} {state}</p>
                <p>{postal_code}</p>
                <p>{country}</p><hr/>         
                <p className="location-phone">Contact: {phone}</p>
            </div>
        </div>
    )
}

export default Location;