import DescriptionCard from "./DescriptionCard";
import ResumeCard from "./ResumeCard";

export default function DescriptionResumeSection() {
    return (
        <section className="flex justify-between gap-5 w-2/3">
            <DescriptionCard />
            <ResumeCard />
        </section>
    );
}