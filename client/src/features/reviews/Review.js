import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "./reviewsSlice";
import { deleteProfessionalReview} from "../professionals/professionalsSlice"


function Review({review}){
    console.log(review)
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.user);
    const {comment, date, user} = review

    function handleDeleteReview(){
        fetch(`/reviews/${review.id}`, {
            method: "DELETE"
        })
        dispatch(deleteReview(review.id));
        dispatch(deleteProfessionalReview(review.id));
    }
    return(
            <li className="review">
                {currentUser.id === user.id ? (
                    <div className="delete-review">
                        <button onClick={handleDeleteReview}> ❌</button>
                    </div>
                ) : null}
                <p className="review-comment">{comment}</p>
                <div className="user-date">
                    <span className="user-name">By: {user.username} - </span>
                    <span className="review-date"> {date}</span>
                </div>
            </li>
    
    )
}

export default Review;