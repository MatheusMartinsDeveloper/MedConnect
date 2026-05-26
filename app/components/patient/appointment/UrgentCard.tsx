import Link from "next/link";
import { MessageSquareText } from "lucide-react";

export default function UrgentCard() {
    return (
        <div
            className="flex flex-col justify-between items-center w-2/6 bg-linear-to-br from-blue-400/60 to-cyan-400/60 border-2 border-l-blue-400 border-t-blue-400 border-r-cyan-400 border-b-cyan-400 rounded-2xl p-5">
            <div className="space-y-2 text-start">
                <h3 className="text-white text-2xl font-poppins font-semibold">Precisa de Ajuda?</h3>
                <p className="text-slate-300 text-base font-inter font-medium">Precisa de alguma urgencia com sua consulta existente?</p>
            </div>
            <Link className="w-full bg-white rounded-xl p-3" href={""}>
                <span
                    className="flex justify-center items-center gap-1 w-full bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" 
                ><MessageSquareText className="text-blue-400" size={20} /> Enviar Menssagem</span>
            </Link>
        </div>
    );
}