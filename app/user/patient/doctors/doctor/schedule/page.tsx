import TitleSection from "@/app/components/shared/TitleSection";
import DoctorDateSection from "@/app/components/patient/doctors/details/appointment/DoctorDateSection";
import ResumeCard from "@/app/components/patient/doctors/details/appointment/ResumeCard";

export default function Schedule() {
    return (
        <main className="flex flex-col justify-center items-center gap-10 w-full pt-28">
            <TitleSection />
            <div className="flex gap-5 w-2/3">
                <DoctorDateSection />
                <ResumeCard />
            </div>
        </main>
    );
}