import { TiMicrophoneOutline } from "react-icons/ti";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FiImage } from "react-icons/fi";

export const InputMessage = () => {
    return (
        <div className="py-1 px-2">
            <input placeholder="Enviar mensagem..." />
            <div>
                <TiMicrophoneOutline />
                <RiEmotionHappyLine />
                <FiImage />
            </div>
        </div>
    )
}