import React from "react";
import './message.css';

const Message = ({message}) => {
  if (!message) {
    return false;
  }
  console.log(new Date(`${message.date.seconds}`))
  console.log(`${message.date.seconds}000`)

  return (
    <div className="message">
      {message.text}<br/>
      <span className="message-date">{new Date(message.date.seconds*1000).toLocaleDateString()} {new Date(message.date.seconds*1000).toLocaleTimeString()}</span>
    </div>
  );
};


export default Message;
