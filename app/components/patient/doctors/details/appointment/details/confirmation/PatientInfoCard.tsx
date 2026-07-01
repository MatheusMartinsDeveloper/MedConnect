import { Separator } from "@/components/ui/separator"

export default function PatientInfoCard() {
    return (
        <div className="w-1/2 bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="space-y-5">
                <h3 className="text-blue-400 text-xs uppercase font-poppins font-bold">Informações de Contato</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center w-full">
                        <span className="text-slate-400 text-sm font-inter font-semibold">Nome</span>
                        <span className="text-slate-100 text-sm font-poppins font-semibold">Ana Martins</span>
                    </div>
                    <Separator className="bg-slate-100 flex-5 h-1" orientation="horizontal" />
                    <div className="flex justify-between items-center w-full">
                        <span className="text-slate-400 text-sm font-inter font-semibold">E-mail</span>
                        <span className="text-slate-100 text-sm font-poppins font-semibold">ana.martins@email.com</span>
                    </div>
                    <Separator className="bg-slate-100 flex-5 h-1" orientation="horizontal" />
                    <div className="flex justify-between items-center w-full">
                        <span className="text-slate-400 text-sm font-inter font-semibold">Número</span>
                        <span className="text-slate-100 text-sm font-poppins font-semibold">(12) 91273-1723</span>
                    </div>
                </div>
            </div>
        </div>
    );
}