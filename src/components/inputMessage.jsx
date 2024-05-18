import { TiMicrophoneOutline } from "react-icons/ti";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FiImage } from "react-icons/fi";

export const InputMessage = () => {
    return (
        <div className="px-8 py-4">
            <div className="py-3 px-4 flex w-full border border-gray-200 rounded-lg">
                <input placeholder="Enviar mensagem..." className="flex-1 outline-none"/>
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