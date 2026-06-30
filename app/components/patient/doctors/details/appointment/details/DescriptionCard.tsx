"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DescriptionCard() {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-between bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="space-y-5">
                <div className="space-y-3">
                    <h2 className="text-slate-100 text-2xl font-poppins font-bold">Detalhes do Paciente</h2>
                    <p className="text-slate-300 text-sm font-inter font-medium">Por favor, descreva mais informações sobre o motivo da sua consulta para o médico(a) se preparar.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="">Observações</label>
                    <textarea 
                        className="bg-white/5 border border-white/10 rounded-2xl p-3 outline-0 placeholder:text-slate-100 hover:border-blue-400 focus:border-blue-400" 
                        name="" 
                        id=""
                        rows={5} 
                        placeholder="Descreva o que você está sentindo, como começou..."
                    ></textarea>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-5 w-full">
                <div className="space-y-3">
                    <h2 className="text-slate-100 text-xl font-poppins font-bold">Informações de Contato</h2>
                    <div className="flex justify-between items-center gap-2 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="">Email para Confirmação</label>
                            <input 
                                className="bg-white/5 border border-white/10 rounded-2xl p-3 outline-0 placeholder:text-slate-100 hover:border-blue-400 focus:border-blue-400" 
                                type="text" 
                                placeholder="meu@email.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="">Número Telefone</label>
                            <input 
                                className="bg-white/5 border border-white/10 rounded-2xl p-3 outline-0 placeholder:text-slate-100 hover:border-blue-400 focus:border-blue-400" 
                                type="text" 
                                placeholder="(XX) XXXXX-XXXX"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <button 
                        className="flex justify-center items-center gap-1 w-1/4 border border-blue-400 rounded-md p-3 text-blue-400 text-base font-poppins font-bold" 
                        onClick={() => router.back()} 
                    ><ArrowLeft size={20} /> Voltar</button>
                    <Link 
                        className="flex justify-center w-1/2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-md p-3 text-slate-100 text-base font-poppins font-bold" 
                        href={"/user/patient/doctors/doctor/schedule/details/confirmation"}
                    >Continuar para Confirmação</Link>
                </div>
            </div>
        </div>
    );
}