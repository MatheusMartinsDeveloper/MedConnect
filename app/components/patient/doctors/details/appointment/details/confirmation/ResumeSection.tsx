"use client";
import { useRouter } from "next/navigation";
import DescriptionCard from "./DescriptionCard";
import PatientInfoCard from "./PatientInfoCard";
import ResumeCard from "./ResumeCard";
import { ArrowLeft } from "lucide-react";

export default function ResumeSection() {
    const router = useRouter();
    
    return (
        <section className="flex flex-col gap-5 w-2/3">
            <div className="flex flex-col gap-5">
                <ResumeCard />
                <div className="flex justify-between items-stretch gap-5 w-full">
                    <PatientInfoCard />
                    <DescriptionCard />
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <button 
                    className="flex justify-center items-center gap-1 w-1/5 border border-blue-400 rounded-md p-3 text-blue-400 text-base font-poppins font-bold"
                    onClick={() => router.back()}
                ><ArrowLeft size={20} /> Voltar</button>
                <button 
                    className="flex justify-center w-1/3 bg-linear-to-r from-blue-400 to-cyan-400 rounded-md p-3 text-slate-100 text-base font-poppins font-bold"
                >Confirmar Agendamento</button>
            </div>
        </section>
    );
}