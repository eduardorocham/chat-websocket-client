import { useState, useEffect } from 'react'
import './App.css'
import { NavBar } from './components/navBar';
import { MessagesAreaTop } from './components/messagesAreaTop';
import { TalkProfile } from './components/talkProfile';
import { socket } from './socket'

function App() {
  const [talk, setTalk] = useState(null);

  useEffect(() => {
    socket.emit("get_talk", "664380c7a0c0f171f653db30", (response) => {
      setTalk(response);
    });
  }, []);

  return (
    <main className='flex'>
      <NavBar />
      <MessagesAreaTop />
      <TalkProfile />
    </main>
  )
}

export default App
