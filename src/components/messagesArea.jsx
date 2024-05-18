import { Message } from "./message"

export const MessagesArea = ({ messages }) => {
    return (
        <div className="px-8 py-4 h-full overflow-y-auto flex flex-col gap-3">
            {messages?.map((message) => (
                <Message message={message} key={message.senderId}/>
            ))}
        </div>
    )
}