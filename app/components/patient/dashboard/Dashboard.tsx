import TitleSection from "./TitleSection";
import CardsSection from "./CardsSection";
import ConsultsPatientSection from "./ConsultsPatientSection";
import RecomendDoctorsSection from "./RecomendDoctorsSection";

export default function Dashboard() {
    return (
        <>
            <TitleSection />
            <CardsSection />
            <ConsultsPatientSection />
            <RecomendDoctorsSection />
        </>
    );
}