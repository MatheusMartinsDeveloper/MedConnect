import Link from "next/link";
import { Plus } from "lucide-react";

export default function TitleSection() {
    return (
        <section className="flex justify-center w-full pt-10">
            <div className="flex justify-between items-center w-2/3">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-poppins font-bold">Minhas Consultas</h1>
                    <h2 className="text-slate-400 text-base font-inter">Gerencie suas consultas e reveja seu histórico</h2>
                </div>
                <div>
                    <Link 
                        className="flex items-center gap-1.5 text-white text-sm font-poppins font-bold bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg shadow-blue-500/30 px-4 py-3 transition-all delay-75 hover:shadow-blue-500/50" 
                        href=""
                    ><Plus size={15} color="white" />Nova Consulta</Link>
                </div>
            </div>
        </section>
    )
}