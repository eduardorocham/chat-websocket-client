import { CiSearch } from "react-icons/ci";
import { FiImage } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";

export const RecipientProfile = () => {
    return (
        <div className="px-5 py-6 w-[20%] border-l">
            <div className="flex flex-col gap-4 items-center mb-4">
                <img
                    src="/images/girl.jpg"
                    alt=""
                    className="w-[128px] h-[128px] rounded-full"
                />
                <div>
                    <div className="text-center text-xl font-medium">Helena</div>
                    <div className="text-center text-base">Active 20m ago</div>
                </div>
                <button className="bg-black text-white w-full py-2 rounded-md">
                    Ver perfil
                </button>
            </div>
            <div className="font-medium flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <CiSearch className="w-6 h-6" />
                    <div>Procurar mensagens</div>
                </div>
                <div className="flex items-center gap-3">
                    <FiImage className="w-6 h-6" />
                    <div>Enviar imagens</div>
                </div>
                <div className="flex items-center gap-3">
                    <SlOptions className="w-6 h-6" />
                    <div>Mais opções</div>
                </div>
            </div>
        </div>
    )
}