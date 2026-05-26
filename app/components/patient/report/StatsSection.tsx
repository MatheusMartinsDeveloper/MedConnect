import ProfileCard from "./ProfileCard";
import AllergiesCard from "./AllergiesCard";
import VitalSignsCard from "./VitalSignsCard";

export default function StatsSection() {
    return (
        <section className="flex justify-center items-center w-full pt-10">
            <div className="flex justify-between items-center gap-4 w-2/3">
                <ProfileCard />
                <AllergiesCard />
                <VitalSignsCard />
            </div>
        </section>
    );
}