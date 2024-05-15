export const TalkItemNav = ({ name, lastMessage, active }) => {
    return (
        <div className={`
            px-3 py-1 flex items-center gap-4 mb-3
            ${active ? 'bg-gray-200' : 'bg-white'} 
        `}>
            <img
                src="/images/girl.jpg" alt=""
                className="w-[64px] h-[64px] rounded-full"
            />
            <div>
                <div className="text-xl font-medium">{name}</div>
                <div className="text-base">{lastMessage}</div>
            </div>
        </div>
    )
}