import React from "react";
import store from "../store";
import {setTypingValue,sendMessage} from "../actions";
import "./MessageInput.css";
import sendbutton from "../assets/send-button.svg";

const MessageInput=({value})=>{
    const state = store.getState();
    const handleChange = (e) =>{
        store.dispatch(setTypingValue(e.target.value));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const {typing,activeUserId} = state;
        store.dispatch(sendMessage(typing,activeUserId));
    }
    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input className="Message_input" onChange={handleChange} value={value} 
            placeholder="Write a message"/>
            <img className="Message_send" src={sendbutton} onClick={handleSubmit} alt="Send Button"/>
        </form>
    );
};

export default MessageInput;