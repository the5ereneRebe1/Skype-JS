import React from "react";
import "./Empty.css";
const Empty = ({user,activeUserId})=>{
    const {name,profile_pic,status} = user;
    const firstName = name.split(" ")[0];

    return (
        <div className="Empty">
            <h1 className="Empty_name">Welcome, {firstName}</h1>
            <img src={profile_pic} alt={name} className="Empty_img"/>
            <p className="Empty_status">
                <b>Status:</b> {status}
            </p>
            <button className="Empty_btn">Start a conversation</button> 
            <p className="Empty_info">
                Search for someone to start chatting with or go to Contatcts to see who is available
            </p>
        </div>
    );
};

export default Empty;