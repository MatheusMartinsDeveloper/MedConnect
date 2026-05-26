import Link from "next/link";
import HistoryTable from "./HistoryTable";
import { ArrowRight } from "lucide-react";

export default function ConsultHistotySection() {
    return (
        <section className="flex justify-center items-center w-full">
            <div className="space-y-5 w-2/3 pt-10">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-white text-xl font-poppins font-bold">Meu Histórico</h2>
                    <Link 
                        className="flex items-center gap-1 text-blue-400 text-sm font-inter font-semibold transition-all delay-75 hover:text-blue-300"
                        href={""}
                    >Ver todo histórico <ArrowRight size={15} /></Link>
                </div>
                <div className="w-full">
                    <HistoryTable />
                </div>
            </div>
        </section>
    );
}