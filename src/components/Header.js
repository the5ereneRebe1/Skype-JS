import React from "react";
import "./Header.css"

const Header = ({user}) => {
    const {name, status} = user;

    return (
        <div className="Header">
            <h1 className="Header_name">{name}</h1>
            <p className="Header_status">{status}</p>
        </div>
    );
} 

export default Header;