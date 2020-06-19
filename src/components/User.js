import React from "react";
import "./User.css";
import store from "../store";
import {setActiveUserId} from "../actions";
const User = ({user}) =>{
    const {name, profile_pic, status} = user;
    function handleUserClick({user_id}){
        store.dispatch(setActiveUserId(user_id));
    }
    return (
        <div className="User" onClick={handleUserClick.bind(null,user)}>
            <img src={profile_pic} alt={name} className="User_pic"/>
            <div className="User_details">
                <p className="User_details-name">{name}</p>
                <p className="User_details-status">{status}</p>
            </div>
        </div>
    );
}

export default User;