import Image from "next/image";

export default function PatientStep2({ children }: { children: React.ReactNode; }) {
    return (
        <main className="flex w-full">
            { children }
            <section className="flex flex-col justify-center items-center gap-5 w-1/2 h-screen bg-linear-to-br from-blue-500 to-cyan-500">
                <div className="bg-white rounded-full">
                    <div className="relative w-40 h-40">
                        <Image
                            className="object-cover"
                            src={"/assets/logo.png"}
                            alt="MedConnect Logo"
                            fill
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-white text-3xl font-poppins font-bold">MedConnect</h1>
                    <p className="text-slate-100 text-base font-inter font-semibold">Conectando profissionais da saúde à inovação e networking em tempo real.</p>
                </div>
            </section>
        </main>
    );
}