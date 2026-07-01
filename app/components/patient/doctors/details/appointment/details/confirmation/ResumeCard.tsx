import { Calendar, Dot } from "lucide-react";
import Image from "next/image";

export default function ResumeCard() {
    return (
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-full bg-blue-400 rounded-tl-2xl rounded-tr-2xl p-5">
                <h2 className="text-slate-100 text-2xl font-poppins font-bold">Resumo da Consulta</h2>
            </div>
            <div className="flex justify-between items-center gap-5 w-full p-5">
                <div className="flex gap-2 w-full bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="relative w-14 h-auto">
                        <Image
                            className="object-cover rounded-2xl"
                            src={"/assets/doctor_profile_picture.png"}
                            alt="Doctor Profile Picture"
                            fill
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-blue-400 text-xs uppercase font-poppins font-bold">Especialista Selecionado(a)</span>
                        <span className="text-slate-100 text-base font-poppins font-semibold">Dr. Alvaro Rodrigues</span>
                        <div className="flex items-center">
                            <span className="text-slate-400 text-sm font-inter font-semibold">Cardiologista</span>
                            <Dot className="text-slate-400" />
                            <span className="text-slate-400 text-sm font-inter font-semibold">CRM 12345-SP</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 w-full bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex justify-center items-center min-h-14 bg-blue-400/20 rounded-md p-2">
                        <Calendar className="text-blue-400" size={20} />
                    </div>
                    <div>
                        <span className="text-blue-400 text-xs uppercase font-poppins font-bold">Agendamento</span>
                        <div className="flex flex-col">
                            <span className="text-slate-100 text-sm font-poppins font-semibold">6 de Maio 2026</span>
                            <span className="text-slate-400 text-sm font-inter font-semibold">Segunda-feira, às 09:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}