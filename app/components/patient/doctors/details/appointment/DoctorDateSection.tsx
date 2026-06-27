import { CalendarDate } from "./CalendarDate";
import DoctorCard from "./DoctorCard";
import TimePicker from "./TimePicker";

export default function DoctorDateSection() {
    return (
        <section className="flex flex-col gap-5 w-full">
            <DoctorCard />
            <div className="flex justify-between gap-2 w-full">
                <CalendarDate />
                <TimePicker />
            </div>
        </section>
    );
}