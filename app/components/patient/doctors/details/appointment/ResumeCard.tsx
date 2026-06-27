"use client";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResumeCard() {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-between w-1/2 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex justify-start w-full bg-blue-400 rounded-tl-2xl rounded-tr-2xl p-5">
                <h2 className="text-slate-100 text-2xl font-poppins font-bold">Resumo do <br /> Agendamento</h2>
            </div>
            <div className="flex flex-col gap-5 p-5">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-400/20 rounded-md p-2">
                        <Calendar className="text-blue-400" size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-400 text-sm font-inter font-bold">Data Selecionada</span>
                        <span className="text-slate-100 text-base font-poppins font-bold">Terça-feira 14 de Maio</span>
                    </div>
                </div>
                <Separator className="bg-slate-100 w-full h-1" orientation="horizontal" />
                <div className="flex items-center gap-2">
                    <div className="bg-blue-400/20 rounded-md p-2">
                        <Clock className="text-blue-400" size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-400 text-sm font-inter font-bold">Horário</span>
                        <span className="text-slate-100 text-base font-poppins font-bold">09:00</span>
                    </div>
                </div>
                <Separator className="bg-slate-100 w-full h-1" orientation="horizontal" />
            </div>
            <div className="p-5 w-full">
                <div className="flex justify-between items-center w-full bg-blue-400/20 rounded-md p-5">
                    <div>
                        <span className="text-slate-100 text-base font-inter font-bold">Valor da Consulta</span>
                    </div>
                    <div>
                        <span className="text-blue-400 text-xl font-poppins font-bold">R$ 250,00</span>
                    </div>
                </div>
            </div>
            <div className="space-y-3 p-5 w-full">
                <Link className="flex justify-center bg-linear-to-r from-blue-400 to-cyan-400 rounded-md p-3 text-slate-100 text-base font-poppins font-bold" href={""}>Continuar para Detalhes</Link>
                <Link className="flex justify-center items-center gap-1 border border-blue-400 rounded-md p-3 text-blue-400 text-base font-poppins font-bold" onClick={() => router.back()} href={""}><ArrowLeft size={20} /> Voltar</Link>
            </div>
        </div>
    );
}