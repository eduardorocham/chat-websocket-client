export const Message = ({ message }) => {
    const myProfileId = "6648bf982785f2ec07bb11d7"

    const classNameMyMessage = "rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-bl-[0.625rem] bg-black text-white";
    const classNameRecipientMessage = "rounded-tl-[0.625rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] bg-gray-200 text-black";

    return (
        <div className={`flex ${message.senderId === myProfileId ? 'justify-end' : 'justify-start'} `}>
            <div className={
                `p-2 max-w-max shadow
                ${message.senderId === myProfileId ? classNameMyMessage 
                    : classNameRecipientMessage
                }
                `
            }>
                {message.content}
            </div>
        </div>
    )
}   