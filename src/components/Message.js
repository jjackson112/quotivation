import React from "react";

// destructure props from App.js
// onClick handler to invoke removeMessage - nothing needed to pass to it
const Message = ({messageText, removeMessage}) => {

    return (
        <div className="message">
            <p>{messageText}</p>
            <span className="close-message" onClick={removeMessage}>X</span>
        </div>
    )
}

export default Message;