import FormDoctor from "@/app/components/auth/register/FormDoctor";
import Image from "next/image";

export default function DoctorStep2() {
    return (
        <section className="flex w-1/2 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900">
            <div className="flex flex-col justify-center items-center gap-10 w-full">
                <div className="flex flex-col w-2/3">
                    <div className="flex items-center">
                        <div className="relative w-10 h-10">
                            <Image
                                className="object-cover"
                                src={"/assets/logo.png"}
                                alt="MedConnect Logo"
                                fill
                            />
                        </div>
                        <h1 className="text-base font-poppins font-semibold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MedConnect</h1>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <h1 className="text-blue-400 text-2xl font-poppins font-semibold">Passo 2: Informações Complementares</h1>
                        <p className="text-slate-400 text-base font-inter font-medium">Crie sua conta para acessar com segurança a MedConnect.</p>
                        <div className="flex justify-between items-center gap-2 w-full">
                            <div className="w-full h-2 bg-blue-400 rounded-full"></div>
                            <div className="w-full h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-blue-400 text-sm font-poppins font-semibold text-nowrap">Passo 2 de 2</span>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <FormDoctor />
                </div>
            </div>
        </section>
    );
}