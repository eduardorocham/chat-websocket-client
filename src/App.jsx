import { useState, useEffect } from 'react'
import './App.css'
import { NavBar } from './components/navBar';
import { Chat } from './components/chat';
import { RecipientProfile } from './components/recipientProfile';
import { socket } from './socket'

function App() {
  const [talk, setTalk] = useState(null);

  useEffect(() => {
    socket.emit("get_talk", "6648bf982785f2ec07bb11da", (response) => {
      setTalk(response);
    });
  }, []);

  return (
    <main className='flex'>
      <NavBar />
      <Chat talk={talk} />
      <RecipientProfile />
    </main>
  )
}

export default App
