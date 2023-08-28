import React from "react";
import {useNavigate} from "react-router-dom"

function Home() {

  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Relax and Enjoy</h1>
        <p>Escape the ordinary at our luxurious spa</p>
      </div>
      <div className="services-div">
        <div className="service">
          <h1 className="service-title">Body Treatments</h1>
          <p className="service-description">
           Rejuvenate your body and mind.
          </p>
        </div>
        <div className="service">
          <h1 className="service-title">Facials</h1>
          <p className="service-description">
            Feel good about yourself.
          </p>
        </div>
        <div className="service">
          <h1 className="service-title">Massages</h1>
          <p className="service-description">
            Escape the stress and noisiness of everyday life.
          </p>
        </div>
      </div>
      <div className="cta-div">
        <h2 className="cta-heading">Create An Account And Book Your Spa Experience Today</h2>
        <p className="cta-text">
          Find your favorite service with our experienced professionals.
        </p>
        <button className="cta-button" onClick={()=> navigate("/signup")}>Create Account Now</button>
      </div>
    </div>
  );
}

export default Home;
