import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Dot } from "lucide-react";
import Image from "next/image";

export default function ResumeCard() {
    return (
        <div className="flex flex-col justify-between w-1/2 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex justify-start w-full bg-blue-400 rounded-tl-2xl rounded-tr-2xl p-5">
                <h2 className="text-slate-100 text-2xl font-poppins font-bold">Resumo do <br /> Agendamento</h2>
            </div>
            <div className="flex flex-col gap-5 p-5">
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
                        <span className="text-slate-100 text-base font-poppins font-semibold">Dr. Alvaro Rodrigues</span>
                        <div className="flex items-center">
                            <span className="text-slate-400 text-sm font-inter font-semibold">Cardiologista</span>
                            <Dot className="text-slate-400" />
                            <span className="text-slate-400 text-sm font-inter font-semibold">CRM 12345-SP</span>
                        </div>
                    </div>
                </div>
                <Separator className="bg-slate-100 w-full h-1" orientation="horizontal" />
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
        </div>
    );
}