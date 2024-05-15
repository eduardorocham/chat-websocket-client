import { CiSearch } from "react-icons/ci";
import { TalkItemNav } from "./talkItemNav";

export const NavBar = () => {
    return (
        <aside className="w-[20%] h-screen border-r">
            <div className="px-4 pt-5 pb-4">
                <h4 className="text-xl font-semibold">Talkchat</h4>
                <div className="flex items-center relative mt-3">
                    <CiSearch className="w-6 h-6 z-10 absolute left-2" />
                    <input
                        type="text"
                        placeholder="Buscar chats"
                        className="border rounded py-1 pl-10 outline-none w-full"
                    />
                </div>
            </div>
            <div>
                <TalkItemNav
                    name="Helena Hills"
                    lastMessage="Will head to the Help Center..."
                    active={true}
                />
                <TalkItemNav
                    name="Helena Hills"
                    lastMessage="Will head to the Help Center..."
                />
            </div>
        </aside>
    )
}