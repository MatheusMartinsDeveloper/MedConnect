import Link from "next/link";
import CardPatientReview from "./CardPatientReviews";
import { ArrowRight } from "lucide-react";

export default function SectionPatientsReviews() {
    return (
        <section className="flex flex-col justify-center gap-5 w-2/3">
            <div className="flex justify-between items-center w-full">
                <h2 className="text-slate-100 text-base font-poppins font-bold">Feedback dos Pacientes</h2>
                <Link
                    className="flex items-center gap-2 text-blue-400 text-sm font-poppins font-bold transition-all delay-75 hover:text-blue-300"
                    href={""}
                >Ver Todos <ArrowRight size={15} /></Link>
            </div>
            <CardPatientReview />
            <CardPatientReview />
        </section>
    );
}