import CardNextConsults from "./CardNextConsults";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NextConsults() {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center w-full">
                <h2 className="text-white text-xl font-poppins font-bold">Próximas Consultas</h2>
                <Link 
                    className="flex items-center gap-2 text-blue-400 text-sm font-poppins transition-all delay-75 hover:text-blue-300" 
                    href={""}
                >Ver todas <ArrowRight size={15} /></Link>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <CardNextConsults
                    doctorProfilePicture="/assets/doctor_profile_picture.png"
                    doctorName="Dr. João Silva"
                    doctorSpecialization="Pediatria"
                    date="20/05/2026"
                    hour="10:00"
                />
                <CardNextConsults
                    doctorProfilePicture="/assets/doctor_profile_picture.png"
                    doctorName="Dra. Maria Clara"
                    doctorSpecialization="Cardiologista"
                    date="02/06/2026"
                    hour="16:00"
                />
            </div>
        </div>
    );
}