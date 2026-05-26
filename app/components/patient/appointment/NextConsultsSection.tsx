import Consult from "./Consult";
import UrgentCard from "./UrgentCard";

export default function NextConsultsSection() {
    return (
        <section className="flex justify-center text-center w-full pt-10">
            <div className="flex justify-between gap-5 w-2/3">
                <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-white text-xl font-poppins font-bold">Proxíma Consultas</h2>
                        <span className="text-white text-sm font-inter font-semibold bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl px-4 py-1">2 consultas</span>
                    </div>
                    <div className="flex flex-col gap-3 w-full pt-5">
                        <Consult 
                            doctorProfilePicture="/assets/doctor_profile_picture.png"
                            doctorName="Dr. Thiago Martins"
                            doctorSpecialization="Cardiologista"
                            consultDate="24/06/2026"
                            consultHour="09:00"
                        />
                        <Consult 
                            doctorProfilePicture="/assets/doctor_profile_picture.png"
                            doctorName="Dr. Thiago Martins"
                            doctorSpecialization="Cardiologista"
                            consultDate="24/06/2026"
                            consultHour="09:00"
                        />
                    </div>  
                </div>
                <UrgentCard />
            </div>
        </section>
    );
}