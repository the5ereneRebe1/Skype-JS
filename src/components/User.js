import React from "react";
import "../components/User.css";

const User = ({user}) =>{
    const {name, profile_pic, status} = user;

    return (
        <div className="User">
            <img src={profile_pic} alt={name} className="User_pic"/>
            <div className="User_details">
                <p className="User_details-name">{name}</p>
                <p className="User_details-status">{status}</p>
            </div>
        </div>
    );
}

export default User;