import React from "react";

function Review({review}){
    console.log(review)
    const {comment, date, user} = review
    return(
            <li className="review">
                <p className="review-comment">{comment}</p>
                <div className="user-date">
                    <span className="user-name">By: {user.username} - </span>
                    <span className="review-date"> {date}</span>
                </div>
            </li>
    
    )
}

export default Review;