import { useState, useEffect } from 'react'
import './App.css'
import { NavBar } from './components/navBar';
import { Chat } from './components/chat';
import { RecipientProfile } from './components/recipientProfile';
import { socket } from './socket'

function App() {
  const [talk, setTalk] = useState(null);

  useEffect(() => {
    socket.emit("get_talk", "664b717722bc5f1867d8a4f2", (response) => {
      setTalk(response);
    });
  }, []);

  return (
    <main className='flex'>
      <NavBar />
      <Chat
        talk={talk}
        setTalk={setTalk}
      />
      <RecipientProfile />
    </main>
  )
}

export default App
