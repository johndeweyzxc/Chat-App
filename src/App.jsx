import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';

import ChatView from './components/ChatView';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import './App.css';
import { useState } from 'react';

const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
})

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

function App() {
  const [user] = useAuthState(auth);
  const [headerTitle, setHeaderTitle] = useState()

  if (user) {
    if (headerTitle != 'Messages') {
      setHeaderTitle('Messages')
    }
  } else {
    if (headerTitle != 'Welcome to Chat App') {
      setHeaderTitle('Welcome to Chat App')
    }
  }

  return (
    <div className="App">
      <header>
        <h3>{headerTitle}</h3>
        <SignOut auth={auth} />
      </header>
      <section>
        {user ? <ChatView fireStore={firestore} auth={auth} /> : <SignIn auth={auth} />}
      </section>
    </div>
  );
}

export default App;
