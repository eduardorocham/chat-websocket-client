import { FiPhone } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";

export const MessagesAreaTop = () => {
    return (
        <header className="py-4 px-8 border-b h-[80px] flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img
                    src="/images/girl.jpg"
                    className="w-[48px] h-[48px] rounded-full"
                />
                <div>
                    <div className="font-medium text-base">Helena Hills</div>
                    <div className="text-base text-gray-500">Active 20m ago</div>
                </div>
            </div>
            <div className="flex gap-4">
                <FiPhone className="w-6 h-6" />
                <IoVideocamOutline className="w-6 h-6" />
            </div>
        </header>
    )
}