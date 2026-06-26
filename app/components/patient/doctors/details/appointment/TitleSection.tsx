import ProgressStep from "./ProgressStep";

export default function TitleSection() {
    return (
        <section className="space-y-5 w-2/3">
            <h1 className="text-slate-100 text-2xl font-poppins font-bold">Agendar Consulta</h1>
            <ProgressStep />
        </section>
    );
}