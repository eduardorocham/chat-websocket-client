import { useState } from "react";
import { socket } from "../socket";
import { TiMicrophoneOutline } from "react-icons/ti";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FiImage } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";

export const InputMessage = ({ setTalk }) => {
    const [message, setMessage] = useState('');

    const now = new Date();
    // Obtém a parte da data e hora no formato ISO
    const isoString = now.toISOString();

    const objectMessage = {
        talk_id: '664b717722bc5f1867d8a4f2',
        message: {
            senderId: "664b717722bc5f1867d8a4ef",
            content: message,
            timestamp: isoString
        }
    }

    const sendMessage = () => {
        socket.emit("send_message", objectMessage, (response) => {
            setTalk(response);
        });
        setMessage('');
    }

    return (
        <div className="px-8 py-4">
            <div className="py-3 px-4 flex w-full border border-gray-200 rounded-lg">
                <input
                    placeholder="Enviar mensagem..."
                    className="flex-1 outline-none"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button
                    className="rounded-full bg-black w-8 h-8 flex items-center justify-center mr-2"
                    onClick={sendMessage}
                >
                    <IoMdSend className="w-4 h-4 text-white" />
                </button>
                <div className="flex items-center gap-3">
                    <button>
                        <TiMicrophoneOutline className="w-6 h-6 text-gray-400" />
                    </button>
                    <button>
                        <RiEmotionHappyLine className="w-6 h-6 text-gray-400" />
                    </button>
                    <button>
                        <FiImage className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
            </div>
        </div>
    )
}