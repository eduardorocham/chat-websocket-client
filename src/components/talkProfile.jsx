export const TalkProfile = () => {
    return (
        <div className="px-4 py-6 w-[20%] border-l">
            <div className="flex flex-col items-center">
                <img
                    src="/images/girl.jpg"
                    alt=""
                    className="w-[128px] h-[128px] rounded-full"
                />
                <div>
                    <div className="text-center">Helena</div>
                    <div className="text-center">Active 20m ago</div>
                </div>
                <button className="bg-black text-white w-full">
                    Ver perfil
                </button>
            </div>
            <div></div>
        </div>
    )
}