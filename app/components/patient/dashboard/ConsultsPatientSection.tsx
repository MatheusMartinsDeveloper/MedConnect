import NextConsults from "./NextConsults";

export default function ConsultsPatientSection() {
    return (
        <section className="flex justify-center items-center w-full pt-10">
            <div className="flex justify-between w-2/3">
                <NextConsults />
            </div>
        </section>
    );
}