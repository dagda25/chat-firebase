import React, { useEffect, useRef } from 'react';
import Message from '../message/message';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './chat.css';

/**
 *
 * Компонент, отображающий список сообщений
 */
const Chat = ({ firestore }) => {
  /**
   * Определение списка сообщений
   */
  const chatList = useRef(null);

  /**
   * Функция, получающая сообщения из firebase
   */

  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('date')
  );

  /**
   * Функция, прокручивающая чат вниз при каждом обновлении
   */

  useEffect(() => {
    chatList.current.scrollTop = chatList.current.scrollHeight;
  }, [messages]);

  return (
    <section className="chat">
      <div className="chat-header">
        <div className="chat-title">Чат</div>
      </div>
      <div className="chat-list" ref={chatList}>
        {loading ? (
          <div className="chat-loader"></div>
        ) : messages ? (
          messages.map((message) => {
            return <Message message={message} key={message.date} />;
          })
        ) : (
          <div>No messages</div>
        )}
      </div>
    </section>
  );
};

export default Chat;
