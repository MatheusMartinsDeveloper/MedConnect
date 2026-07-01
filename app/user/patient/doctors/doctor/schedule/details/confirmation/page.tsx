import ResumeSection from "@/app/components/patient/doctors/details/appointment/details/confirmation/ResumeSection";
import TitleSection from "@/app/components/shared/TitleSection";

export default function Confirmation() {
    return (
        <main className="flex flex-col justify-center items-center gap-10 w-full pt-28">
            <TitleSection />
            <ResumeSection />
        </main>
    );
}