import { useState, useEffect } from 'react'
import './App.css'
import { socket } from './socket'

function App() {
  const [talk, setTalk] = useState(null);

  useEffect(() => {
    socket.emit("get_talk", "664380c7a0c0f171f653db30", (response) => {
      setTalk(response);
    });
  }, []);

  return (
    <div>
      <div>Olá, mundo!</div>
      {JSON.stringify(talk)}
    </div>
  )
}

export default App
