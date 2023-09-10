import React from "react";
import { useSelector } from "react-redux";
import Review from "./Review";
import { useNavigate } from "react-router-dom";


function ReviewList(){

    const navigate = useNavigate();
    const professional = useSelector((state) => state.professionals.currentProfessional)
    const { name, picture, service_type, reviews} = professional
    console.log(professional)
    
    const reviewList = reviews.map((review) => (
        <Review key={review.id} review={review}/>
    ))
    return(
        <div className="reviews-professional-info" >
           <div className="reviews-professional-details">
            <img src={picture} alt="Professional"/>
            <h2 className="reviews-professional-name">{name}</h2>
            <p className="reviews-professional-service-type">{service_type}</p>
            <div className="user-reviews">
                <h1>Reviews:</h1>
                <hr/>
                <ul className="review-list">
                    {reviews.length !== 0 ?  reviewList : <p>No User Reviews...</p>}
                </ul>
            </div>
            <button onClick={() => navigate("/professionals")}className="reviews-back-to-button">Back To Professionals</button>
           </div>
        </div>
    )
}

export default ReviewList;