import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { addReview } from "./reviewsSlice";
import { deleteAppointment } from "../appointments/appointmentsSlice";


function NewReview({appointment}){

    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    const year = today.getFullYear();
    const currentDate = month + " / " + day + " / " + year;
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
   
   
    const {  professional_id, professional} = appointment
    const [reviewData, setReviewData] = useState({
        comment: "",
        date: currentDate,
        professional_id: professional_id,
    })
    function handleSubmitForm(e){
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(reviewData)
        })
        .then((resp) => {
            if(resp.ok){
              resp.json().then((newReview) => {
                console.log(newReview)
                dispatch(addReview(newReview));
               
                fetch(`/appointments/${appointment.id}`, {
                    method: "DELETE",
                  });
                  dispatch(deleteAppointment(appointment))
              });
            }else{
               resp.json().then((errorData) => setErrors(errorData.errors)); 
            }
        })
    }

    function handleChange(e){
        setReviewData({
            ...reviewData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="review-form">
        <h1>Leave a Review for {professional.name}: </h1>
        <form onSubmit={handleSubmitForm}>
            <label>Your Comment:</label>
            <textarea onChange={handleChange} id="comment" name="comment" rows="4" placeholder="Enter your review here..."></textarea>
            
            <label>Date:</label>
            <span>{reviewData.date}</span>
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
            )}  
            <div className="button-container">
                <button type="submit">Submit Review</button>
            </div>
        </form>
        </div>
    );

}

export default NewReview;