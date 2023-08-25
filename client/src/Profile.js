import React, { useState } from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

function Profile(){

    const [isUpdating, setIsUpdating] = useState(false);
    const user = useSelector((state) => state.users.user);
   
   
    const {first_name, last_name, email, profile_picture} = user;
    
    

    return (
        <div>
            {first_name && email ? (
                <div>
                    <h1>PROFILE</h1>
                    <img
                    alt="profile"
                    src={profile_picture}
                    />
                    <p>First Name: {first_name}</p>
                    <p>Last Name: {last_name}</p>
                    <p>Email: {email}</p>
                    <button onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>Edit Profile</button>
                </div>
            ) : (
                <div>
                    <h1>COMPLETE PROFILE</h1>
                    <UpdateProfile  setIsUpdating={setIsUpdating}/>
                </div>
            )}
        
        </div>
    )
}

export default Profile;

