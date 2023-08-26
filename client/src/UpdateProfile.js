import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "./features/users/usersSlice";



function UpdateProfile({setIsUpdating}){

    const user = useSelector((state) => state.users.user);
    const {first_name, last_name, email, profile_picture} = user;
    const dispatch = useDispatch()
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

    return(
        <form className="update-profile-form" onSubmit={handleFormSubmit}>
            <div className="update-picture-div">
                <img alt="profile picture" src={profileData.profile_picture} className="profile-picture"/>
                <input
                type="text"
                name="profile_picture"
                value={profileData.profile_picture}
                onChange={handleChange}
                />
                <label className="upload-picture-button">CHANGE PICTURE</label>
            </div>
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
            <label>Email: </label>
            <input
            type="text"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            />
             <input className="update-profile-button" type="submit" value="UPDATE PROFILE" />
        </form>
    )
}


export default UpdateProfile;