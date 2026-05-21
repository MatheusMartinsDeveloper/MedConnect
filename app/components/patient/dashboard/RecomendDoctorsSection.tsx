import Link from "next/link";
import CardRecomendDoctors from "./CardRecomendDoctors";
import { ArrowRight } from "lucide-react";

export default function RecomendDoctorsSection() {
    return (
        <section className="flex justify-center items-center w-full pt-10">
            <div className="flex flex-col justify-between items-center gap-5 w-2/3">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-white text-xl font-poppins font-bold">Médicos Recomendados</h2>
                    <Link 
                        className="flex items-center gap-2 text-blue-400 text-sm font-poppins transition-all delay-75 hover:text-blue-300"  
                        href={""}
                    >Ver todos <ArrowRight size={15} /></Link>
                </div>
                <div className="flex justify-between items-center gap-4 w-full">
                    <CardRecomendDoctors
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Ana Beatriz"
                        doctorSpecialization="Cardiologista"
                        doctorNote="4.9"
                        doctorActive="Online"
                        doctorExperience="14"
                        doctorConsultPrice="250"
                    />
                    <CardRecomendDoctors
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dr. Carlos Eduardo"
                        doctorSpecialization="Neurologista"
                        doctorNote="4.8"
                        doctorActive="Online"
                        doctorExperience="10"
                        doctorConsultPrice="300"
                    />
                    <CardRecomendDoctors
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dr. Fernando Oliveira"
                        doctorSpecialization="Dermatologista"
                        doctorNote="4.7"
                        doctorActive="Offline"
                        doctorExperience="8"
                        doctorConsultPrice="200"
                    />
                </div>
            </div>
        </section>
    );
}