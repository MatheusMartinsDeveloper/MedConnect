import CardDoctorInfo from "@/app/components/patient/doctors/details/CardDoctorInfo";
import SectionDescriptionOffice from "@/app/components/patient/doctors/details/SectionDescriptionOffice";
import SectionPatientsReviews from "@/app/components/patient/doctors/details/SectionPatientsReviews";

export default function Doctor() {
    return (
        <main className="flex flex-col justify-center items-center gap-10 w-full pt-10">
            <CardDoctorInfo />
            <SectionDescriptionOffice />
            <SectionPatientsReviews />
        </main>
    );
}