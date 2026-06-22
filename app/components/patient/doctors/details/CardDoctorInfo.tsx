import Image from "next/image"
import { Star, BriefcaseBusiness, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CardDoctorInfo() {
    return (
        <section className="flex w-2/3 bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex justify-between items-center w-full">
                <div className="relative w-24 h-20">
                    <Image
                        className="object-cover rounded-2xl"
                        src={"/assets/doctor_profile_picture.png"}
                        alt="Doctor Profile Picture"
                        fill
                    />
                </div>
                <h1 className="text-slate-100 text-xl font-poppins font-bold">Dr. Mauricio Silva</h1>
                <span className="text-slate-300 text-sm font-inter font-medium">Cardiologista</span>
                <span className="flex items-center gap-1 text-yellow-400 text-sm font-inter"><Star size={20} color="yellow" fill="yellow" /> 4.9</span>
                <span className="text-slate-400 text-sm font-inter">(128 Reviews Total)</span>
                <span className="flex items-center gap-1 text-slate-400 text-sm font-inter"><BriefcaseBusiness size={20} /> 15+ Anos Experiência</span>
                <div>
                    <Link
                        className="flex justify-center items-center w-full bg-blue-400 rounded-xl p-2 text-white text-base font-poppins font-semibold"
                        href={""}
                    >Agendar Consulta <ArrowRight size={20} /></Link>
                </div>
            </div>
        </section>
    )
}