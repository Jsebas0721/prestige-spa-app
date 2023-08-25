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
                    {isUpdating ? (
                        <UpdateProfile
                            setIsUpdating={setIsUpdating}
                        />
                    ):(
                        <div className="profile-container">
                            <h1>PROFILE</h1>
                            <img
                            alt="profile"
                            src={profile_picture}
                            />
                            <div className="profile-info">
                                <p>{first_name} {last_name}</p>
                                <h2>Contact Information</h2>
                                <p>Email: {email}</p>
                            </div>
                            <button className="edit-profile-button" onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>Edit Profile</button>
                        </div>    
                    )}
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

