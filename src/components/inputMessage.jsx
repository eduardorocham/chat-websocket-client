import { useState } from "react";
import { socket } from "../socket";
import { TiMicrophoneOutline } from "react-icons/ti";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FiImage } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";

export const InputMessage = () => {
    const [message, setMessage] = useState('');

    const now = new Date();
    // Obtém a parte da data e hora no formato ISO
    const isoString = now.toISOString();

    const objectMessage = {
        senderId: "6648bf982785f2ec07bb11d7",
        content: message,
        timestamp: isoString
    }

    const sendMessage = () => {
        socket.emit("send_message", objectMessage, (response) => {
            console.log(response);
        });
    }

    return (
        <div className="px-8 py-4">
            <div className="py-3 px-4 flex w-full border border-gray-200 rounded-lg">
                <input 
                    placeholder="Enviar mensagem..." 
                    className="flex-1 outline-none"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button 
                    className="rounded-full bg-black w-8 h-8 flex items-center justify-center mr-2"
                    onClick={sendMessage}
                >
                    <IoMdSend className="w-4 h-4 text-white"/>
                </button>
                <div className="flex items-center gap-3">
                    <button>
                        <TiMicrophoneOutline className="w-6 h-6 text-gray-400"/>
                    </button>
                    <button>
                        <RiEmotionHappyLine className="w-6 h-6 text-gray-400"/>
                    </button>
                    <button>
                        <FiImage className="w-6 h-6 text-gray-400"/>
                    </button>
                </div>
            </div>
        </div>
    )
}