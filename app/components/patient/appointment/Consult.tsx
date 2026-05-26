import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Pencil } from "lucide-react";

type ConsultType = {
    doctorProfilePicture: string;
    doctorName: string;
    doctorSpecialization: string;
    consultDate: string;
    consultHour: string;
}

export default function Consult({ doctorProfilePicture, doctorName, doctorSpecialization, consultDate, consultHour }: ConsultType) {
    return (
        <div className="flex justify-between items-center w-full bg-white/5 border border-white/10 rounded-2xl p-3 transition-all delay-75 hover:border-blue-400">
            <div className="flex gap-5 w-1/3">
                <div className="relative w-1/3 h-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src={doctorProfilePicture}
                        alt="Doctor Profile Picture"
                        fill
                    />
                </div>
                <div className="text-start space-y-5">
                    <div>
                        <h2 className="text-white text-base font-poppins font-semibold">{doctorName}</h2>
                        <span className="text-slate-400 text-sm font-inter font-normal">{doctorSpecialization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-slate-300 text-sm font-inter font-medium"><Calendar className="text-blue-400" size={20} /> {consultDate}</span>
                        <span className="flex items-center gap-1 text-slate-300 text-sm font-inter font-medium"><Clock className="text-emerald-400" size={20} /> {consultHour}</span>
                    </div>  
                </div>
            </div>
            <div className="flex flex-col gap-2.5 w-1/4">
                <Link 
                    className="flex justify-center items-center gap-1 text-white text-sm font-poppins font-semibold bg-blue-400 rounded-xl p-3 transition-all delay-75 hover:bg-blue-300"
                    href={""}
                >Entrar na Call <ArrowRight size={15} /></Link>
                <button 
                    className="flex justify-center items-center gap-1 text-blue-400 text-sm font-poppins font-semibold border-2 border-blue-400 rounded-xl p-3 cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-400"
                ><Pencil size={15} /> Editar</button>
            </div>
        </div>
    );
}