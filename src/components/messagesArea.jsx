import { MessagesAreaTop } from "./messagesAreaTop"
import { InputMessage } from "./inputMessage"

export const MessagesArea = () => {
    return (
        <div className="w-[60%]">
            <MessagesAreaTop />
            <InputMessage />
        </div>
    )
}