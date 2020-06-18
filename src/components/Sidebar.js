import React from "react";
import "./Sidebar.css";
import User from "./User.js";
const Sidebar = ({contacts})=>{

    return <aside className="Sidebar">
        {contacts.map(contact=><User user={contact} key={contact.id}/>)}
    </aside>
}

export default Sidebar;