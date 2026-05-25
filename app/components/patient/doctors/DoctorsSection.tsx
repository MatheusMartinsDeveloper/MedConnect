import DoctorsCard from "./DoctorsCard";
import PaginationDoctor from "./PaginationDoctor";

export default function DoctorsSection() {
    return (
        <section className="flex justify-center items-center w-full pt-10">
            <div className="w-2/3">
                <div className="grid grid-cols-3 gap-5 w-full">
                    <DoctorsCard
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Mariana Souza"
                        doctorNote="4.9"
                        doctorSpecialization="Cardiologia"
                        doctorExperience="12 anos"
                        doctorDescription="Especialista em prevenção cardiovascular e acompanhamento clínico avançado."
                        doctorLocalWork="Hospital São Lucas"
                        doctorPrice="450"                    
                    />
                    <DoctorsCard
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Mariana Souza"
                        doctorNote="4.9"
                        doctorSpecialization="Cardiologia"
                        doctorExperience="12 anos"
                        doctorDescription="Especialista em prevenção cardiovascular e acompanhamento clínico avançado."
                        doctorLocalWork="Hospital São Lucas"
                        doctorPrice="450"                    
                    />
                    <DoctorsCard
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Mariana Souza"
                        doctorNote="4.9"
                        doctorSpecialization="Cardiologia"
                        doctorExperience="12 anos"
                        doctorDescription="Especialista em prevenção cardiovascular e acompanhamento clínico avançado."
                        doctorLocalWork="Hospital São Lucas"
                        doctorPrice="450"                    
                    />
                    <DoctorsCard
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Mariana Souza"
                        doctorNote="4.9"
                        doctorSpecialization="Cardiologia"
                        doctorExperience="12 anos"
                        doctorDescription="Especialista em prevenção cardiovascular e acompanhamento clínico avançado."
                        doctorLocalWork="Hospital São Lucas"
                        doctorPrice="450"                    
                    />
                    <DoctorsCard
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Mariana Souza"
                        doctorNote="4.9"
                        doctorSpecialization="Cardiologia"
                        doctorExperience="12 anos"
                        doctorDescription="Especialista em prevenção cardiovascular e acompanhamento clínico avançado."
                        doctorLocalWork="Hospital São Lucas"
                        doctorPrice="450"                    
                    />
                    <DoctorsCard
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Mariana Souza"
                        doctorNote="4.9"
                        doctorSpecialization="Cardiologia"
                        doctorExperience="12 anos"
                        doctorDescription="Especialista em prevenção cardiovascular e acompanhamento clínico avançado."
                        doctorLocalWork="Hospital São Lucas"
                        doctorPrice="450"                    
                    />
                    <DoctorsCard
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Mariana Souza"
                        doctorNote="4.9"
                        doctorSpecialization="Cardiologia"
                        doctorExperience="12 anos"
                        doctorDescription="Especialista em prevenção cardiovascular e acompanhamento clínico avançado."
                        doctorLocalWork="Hospital São Lucas"
                        doctorPrice="450"                    
                    />
                    <DoctorsCard
                        doctorProfilePicture="/assets/doctor_profile_picture.png"
                        doctorName="Dra. Mariana Souza"
                        doctorNote="4.9"
                        doctorSpecialization="Cardiologia"
                        doctorExperience="12 anos"
                        doctorDescription="Especialista em prevenção cardiovascular e acompanhamento clínico avançado."
                        doctorLocalWork="Hospital São Lucas"
                        doctorPrice="450"                    
                    />
                </div>
                <PaginationDoctor />
            </div>
        </section>
    );
}