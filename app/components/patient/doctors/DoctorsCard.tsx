import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Dot, Star, MapPin, Banknote } from "lucide-react";

type DoctorsCardType = {
    doctorProfilePicture: string;
    doctorName: string;
    doctorSpecialization: string;
    doctorExperience: string;
    doctorDescription: string;
    doctorLocalWork: string;
    doctorPrice: string;
    doctorNote: string;
}

export default function DoctorsCard({ doctorProfilePicture, doctorName, doctorSpecialization, doctorExperience, doctorDescription, doctorLocalWork, doctorPrice, doctorNote }: DoctorsCardType) {
    return (
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 transition-all delay-75 has-[.button:hover]:border-blue-400">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="relative w-1/2 h-40">
                        <Image
                            className="object-cover rounded-2xl"
                            src={doctorProfilePicture}
                            alt="Doctor Profile Picture"
                            fill
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-white text-base font-poppins font-semibold transition-all delay-75 has-[.button:hover]:text-blue-400">{doctorName}</h2>
                            <span className="flex items-center gap-1 text-yellow-400 text-sm font-inter bg-yellow-400/10 rounded-2xl px-2 py-1.5"><Star size={15} color="yellow" fill="yellow" /> {doctorNote} (1.2k)</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-400 text-sm font-inter font-medium">{doctorSpecialization}</span>
                            <Dot className="text-blue-400" />
                            <span className="text-blue-400 text-sm font-inter font-medium">{doctorExperience}</span>
                        </div>
                        <div className="w-full">
                            <p className="text-slate-400 text-sm font-inter font-normal text-ellipsis overflow-hidden line-clamp-2">{doctorDescription}</p>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-1">
                                <MapPin className="text-red-400" size={15} />
                                <span className="text-slate-400 text-sm font-inter font-medium text-ellipsis overflow-hidden line-clamp-1">{doctorLocalWork}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Banknote className="text-green-400" size={15} />
                                <span className="text-slate-400 text-sm font-inter font-medium">R${doctorPrice} / sessão</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <Link
                        className="button flex justify-center items-center gap-1.5 w-1/2 text-white text-sm font-poppins font-bold bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md shadow-blue-500/30 px-4 py-2 transition-all delay-75 hover:shadow-blue-500/50"
                        href={""}
                    >Agendar Horário <ArrowRight size={15} /></Link>
                </div>
            </div>
        </div>
    );
}