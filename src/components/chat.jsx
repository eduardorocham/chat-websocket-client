import { Recipient } from "./recipient"
import { MessagesArea } from "./messagesArea"
import { InputMessage } from "./inputMessage"

export const Chat = ({ talk }) => {
    return (
        <div className="w-[60%] max-h-screen">
            <Recipient />
            <MessagesArea messages={talk?.messages}/>
            <InputMessage />
        </div>
    )
}