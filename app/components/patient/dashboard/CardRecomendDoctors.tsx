import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Dot, Star } from "lucide-react";

type CardRecomendDoctorsType = {
    doctorProfilePicture: string;
    doctorName: string;
    doctorSpecialization: string;
    doctorNote: string;
    doctorActive: string;
    doctorExperience: string;
    doctorConsultPrice: string;
}

export default function CardRecomendDoctors({ doctorProfilePicture, doctorName, doctorSpecialization, doctorNote, doctorActive, doctorExperience, doctorConsultPrice }: CardRecomendDoctorsType) {
    return (
        <Link className="group w-full bg-white/5 border border-white/10 rounded-2xl p-4 transition-all delay-75 hover:border-blue-400" href={""}>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                        <Image
                            className="object-cover rounded-xl"
                            src={doctorProfilePicture}
                            alt="Doctor Profile Picture"
                            fill
                        />
                    </div>
                    <div>
                        <h2 className="text-white text-base font-poppins font-semibold transition-all delay-75 group-hover:text-blue-400">{doctorName}</h2>
                        <span className="text-slate-400 text-sm font-inter">{doctorSpecialization}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                        <span 
                            className="flex items-center gap-1 text-white text-sm font-poppins font-semibold"
                        ><Star fill="yellow" color="yellow" size={20} /> {doctorNote}</span>
                        <span className="text-slate-400 text-sm font-inter">(312)</span>
                    </div>
                    <span className="flex items-center text-green-500 text-sm font-inter font-semibold"><Dot size={30} />{doctorActive}</span>
                </div>
                <Separator className="flex-1 w-full bg-white/10" orientation="horizontal" />
                <div className="flex justify-between items-center w-full">
                    <span className="text-slate-400 text-sm font-inter font-semibold">{doctorExperience} anos exp.</span>
                    <span className="text-white text-base font-poppins font-semibold">R$ {doctorConsultPrice}</span>
                </div>
            </div>
        </Link>
    );
}