import { ArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CardReportType = {
    patientProfilePicture: string;
    patientName: string;
    patientAge: string;
    patientBloodType: string;
    patientAllergies: string;
    patientMedicines: string;
}

export default function CardReport({ patientProfilePicture, patientName, patientAge, patientBloodType, patientAllergies, patientMedicines }: CardReportType) {
    return (
        <div className="flex flex-col justify-between w-1/3 bg-white/5 border border-white/10 rounded-2xl p-5 transition-all delay-75 has-[.link:hover]:border-blue-400">
            <div className="space-y-5">
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                        <Image
                            className="object-cover rounded-xl"
                            src={patientProfilePicture}
                            alt="Patient Profile Picture"
                            fill
                        />
                    </div>
                    <div>
                        <h2 className="text-white text-base font-poppins font-semibold">{patientName}</h2>
                        <div>
                            <span className="flex items-center text-slate-400 text-sm font-inter">{patientAge} anos <Dot /> {patientBloodType}</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 w-full">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm font-inter">Tipo Sanguíneo</span>
                        <span className="text-red-400 text-sm font-inter">{patientBloodType}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm font-inter">Alergias</span>
                        <span className="text-yellow-400 text-sm font-inter">{patientAllergies} registradas</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm font-inter">Medicamentos</span>
                        <span className="text-blue-400 text-sm font-inter">{patientMedicines} ativos</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <Link
                    className="link flex items-center text-blue-400 text-sm font-poppins font-medium transition-all delay-75 hover:text-blue-300"
                    href={""}
                >Ver prontuário completo <ArrowRight size={15} /></Link>
            </div>
        </div>
    )
}