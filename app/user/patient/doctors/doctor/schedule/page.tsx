import TitleSection from "@/app/components/patient/doctors/details/appointment/TitleSection";
import DoctorDateSection from "@/app/components/patient/doctors/details/appointment/DoctorDateSection";

export default function Schedule() {
    return (
        <main className="flex flex-col items-center gap-10 w-full pt-28">
            <TitleSection />
            <DoctorDateSection />
        </main>
    );
}