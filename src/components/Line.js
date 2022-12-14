import React, {useEffect, useState} from 'react';
import SignOut from './SignOut';
import SendMessage from './SendMessage';
import {auth, db} from '../firebase';

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
      });
  }, [])
  return (
  <div>
    {console.log(messages)}
    <SignOut></SignOut>
    <div className="msgs">
      {messages.map(({id, text, photoURL, uid}) => (
        <div>
          <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : "received"}`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
    <SendMessage></SendMessage>
  </div>
  )
}

export default Line