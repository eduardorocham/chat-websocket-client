import { useState, useEffect } from 'react'
import './App.css'
import { NavBar } from './components/navBar';
import { MessagesArea } from './components/messagesArea';
import { TalkProfile } from './components/talkProfile';
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
      {/* {JSON.stringify(talk)} */}
      <NavBar />
      <MessagesArea />
      <TalkProfile />
    </main>
  )
}

export default App
