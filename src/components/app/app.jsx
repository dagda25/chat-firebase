
import React from "react";
import Chat from "../chat/chat";
import SendForm from "../send-form/send-form";
import './app.css';

import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBcniAkbTDapNTZVo4QNgGW1IHo8j3yoaU",
  authDomain: "chatfirebase-593d6.firebaseapp.com",
  projectId: "chatfirebase-593d6",
  storageBucket: "chatfirebase-593d6.appspot.com",
  messagingSenderId: "425833234903",
  appId: "1:425833234903:web:bfae7d06fe27139e594b92"
}
);

const firestore = firebase.firestore();

const App = () => {


  return (
    <main className="main-container">
      <Chat firestore={firestore} />
      <SendForm firestore={firestore}/>
    </main>
  );
};

export default App;
