import React from 'react';
import './message.css';

/**
 *
 * Компонент, отображающий сообщение
 */
const Message = ({ message }) => {
  if (!message) {
    return false;
  }

  return (
    <div className="message">
      {message.text}
      <br />
      <span className="message-date">
        {new Date(message.date.seconds * 1000).toLocaleDateString()}{' '}
        {new Date(message.date.seconds * 1000).toLocaleTimeString()}
      </span>
    </div>
  );
};

export default Message;
