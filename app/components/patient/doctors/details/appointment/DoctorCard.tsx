import { Dot } from "lucide-react";
import Image from "next/image";

export default function DoctorCard() {
    return (
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
    );
}