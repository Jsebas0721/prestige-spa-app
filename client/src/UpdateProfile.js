import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "./features/users/usersSlice";
import { useHistory } from "react-router-dom";



function UpdateProfile({setIsUpdating}){

    const user = useSelector((state) => state.users.user);
    const {first_name, last_name, email, profile_picture} = user;
    const dispatch = useDispatch();
    const history = useHistory();
    const [profileData, setProfileData] = useState({
        first_name: first_name,
        last_name: last_name,
        profile_picture: profile_picture,
        email: email
    })
    
    function handleFormSubmit(e){
        e.preventDefault();
        fetch(`/users/${user.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
        })
        .then((resp) => resp.json())
        .then((updatedProfile) => {
            setIsUpdating(false)
            dispatch(userUpdate(updatedProfile))
            
        })
    }

    function handleChange(e){
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    }
    
    function handleUserUpdate(updatedProfile){
        fetch("/users")
        .then((resp) => resp.json())
        .then((users) => console.log(users))
        
    }

    return(
        <form className="update-profile-form" onSubmit={handleFormSubmit}>
           <label>First Name: </label>
           <input
            type="text"
            name="first_name"
            value={profileData.first_name}
            onChange={handleChange}
            />
            <label>Last Name: </label>
            <input
            type="text"
            name="last_name"
            value={profileData.last_name}
            onChange={handleChange}
            />
            <label>Profile Picture: </label>
            <input
            type="text"
            name="profile_picture"
            value={profileData.profile_picture}
            onChange={handleChange}
            />
            <label>Email: </label>
            <input
            type="text"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            />
             <input type="submit" value="UPDATE PROFILE" />
        </form>
    )
}


export default UpdateProfile;