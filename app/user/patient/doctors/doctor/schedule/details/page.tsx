import DescriptionResumeSection from "@/app/components/patient/doctors/details/appointment/details/DescriptionResumeSection";
import TitleSection from "@/app/components/shared/TitleSection";

export default function Details() {
    return (
        <main className="flex flex-col justify-center items-center gap-10 w-full pt-28">
            <TitleSection />
            <DescriptionResumeSection />
        </main>
    );
}