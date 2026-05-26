import Link from "next/link";

export default function TitleSection() {
    return (
        <section className="flex justify-center w-full pt-10">
            <div className="flex justify-between items-center w-2/3">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-poppins font-bold">Meu Prontuário</h1>
                    <h2 className="text-slate-400 text-base font-inter">Veja seus resultados médicos</h2>
                </div>
            </div>
        </section>
    );
}