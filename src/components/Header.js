import React from "react";
import "./Header.css";
import {setActiveUserId} from "../actions";
import store from "../store";
const Header = ({user}) => {
    const {name, status} = user;
    const closeWindow = (e) => {
        store.dispatch(setActiveUserId(null));
    }
    return (
        <div className="Header">
            <h1 className="Header_name">{name}</h1>
            <p className="Header_status">{status}</p>
            <button className="Header_close" onClick={closeWindow}>X</button>
        </div>
    );
} 

export default Header;