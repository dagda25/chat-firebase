import React, { useState } from 'react';
import './send-form.css';

const SendForm = ({ firestore }) => {
  const [value, setValue] = useState('');

  const sendMessage = async (evt) => {
    evt.preventDefault();
    firestore.collection('messages').add({
      text: value,
      date: new Date(),
    });
    setValue('');
  };

  return (
    <section className="send-panel">
      <form
        action="/"
        encType="multipart/form-data"
        onSubmit={sendMessage}
        className="send-form"
      >
        <textarea
          name="message"
          className="send-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="send-button">
          Отправить
        </button>
        <button type="submit" className="send-button-mobile"></button>
      </form>
    </section>
  );
};

export default SendForm;
