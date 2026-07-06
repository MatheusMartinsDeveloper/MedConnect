"use client";
import { useRouter } from "next/navigation";
import DescriptionCard from "./DescriptionCard";
import PatientInfoCard from "./PatientInfoCard";
import ResumeCard from "./ResumeCard";
import { ArrowLeft } from "lucide-react";
import { AlertDialog,AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

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
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <button 
                            className="flex justify-center w-1/3 bg-linear-to-r from-blue-400 to-cyan-400 rounded-md p-3 text-slate-100 text-base font-poppins font-bold"
                        >Confirmar Agendamento</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white/5 border border-white/10 ring-0">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-slate-100 font-poppins font-bold">Confimar Agendamento</AlertDialogTitle>
                            <AlertDialogDescription className="text-slate-300 font-inter">
                                Você tem certeza que deseja confirmar o seu agendamento?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="text-blue-400 font-poppins !font-bold border-blue-400 cursor-pointer transition-all delay-75 hover:text-slate-100 hover:bg-blue-400">Cancelar</AlertDialogCancel>
                            <AlertDialogAction className="text-slate-100 font-poppins !font-bold shadow-sm border-0 bg-linear-to-r from-blue-400 to-cyan-400 cursor-pointer transition-all delay-75 hover:shadow-blue-400">Confirmar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </section>
    );
}