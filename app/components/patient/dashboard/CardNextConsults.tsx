import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

type CardNextConsultsType = {
    doctorProfilePicture: string;
    doctorName: string;
    doctorSpecialization: string;
    date: string;
    hour: string;
}

export default function CardNextConsults({ doctorProfilePicture, doctorName, doctorSpecialization, date, hour }: CardNextConsultsType) {
    return (
        <Link 
            className="bg-white/5 border border-white/10 rounded-2xl transition-all delay-100 group hover:border-blue-400" 
            href={""}
        >
            <div className="flex justify-between items-center w-full p-5">
                <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14">
                        <Image
                            className="object-cover rounded-xl"
                            src={doctorProfilePicture}
                            alt="Doctor Profile Picture"
                            fill
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white text-base font-poppins font-semibold">{doctorName}</h3>
                        <span className="text-slate-400 text-sm font-inter">{doctorSpecialization}</span>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 text-white text-sm font-inter font-medium"><Calendar size={20} /> {date}</span>
                            <span className="flex items-center gap-1 text-white text-sm font-inter font-medium"><Clock size={20} /> {hour}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span 
                        className="text-blue-400 text-base font-poppins" 
                    ><ArrowRight className="transition-all delay-100 rounded-full p-2 group-hover:bg-blue-400 group-hover:text-white" size={35} /></span>
                </div>
            </div>
        </Link>
    )
}