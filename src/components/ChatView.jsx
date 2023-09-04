import React, { useRef, useState } from 'react';
import { collection, query, orderBy } from 'firebase/firestore';
import { limit, addDoc, serverTimestamp } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

function ChatView(props) {
    const dummy = useRef();
    const messagesRef = collection(props.fireStore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'), limit(25));
    const [messages] = useCollectionData(q, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
  
    // Uploads the message to firebase firestore
    const sendMessage = async (e) => {
      e.preventDefault();
      const { uid, photoURL } = props.auth.currentUser;
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL
      })
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
        {messages && messages.map(
          msg => {
          <ChatMessage key={msg.id} message={msg} auth={props.auth} />
          })}
        <span ref={dummy}></span>
      </main>
  
      <form onSubmit={sendMessage}>
        <input 
          value={formValue} 
          onChange={(e) => 
          setFormValue(e.target.value)} 
          placeholder="Type a message..." />
        <button type="submit" disabled={!formValue}>Send</button>
      </form>
    </>)
  }

export default ChatView