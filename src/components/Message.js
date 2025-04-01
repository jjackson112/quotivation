import React from "react";
import { useEffect } from "react";

// destructure props from App.js
// onClick handler to invoke removeMessage - nothing needed to pass to it
// clear message after 1.5 seconds - useEffect, setTImeout, cleanup function
const Message = ({messageText, removeMessage}) => {
    useEffect (() => {
        const timeout = window.setTimeout (() => {
            removeMessage();
        }, 1500)

        return () => 
            window.clearTimeout(timeout);
        });

    return (
        <div className="message">
            <p>{messageText}</p>
            <span className="close-message" onClick={removeMessage}>X</span>
        </div>
    );
};

export default Message;