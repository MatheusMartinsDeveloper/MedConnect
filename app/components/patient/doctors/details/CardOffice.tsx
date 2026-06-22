import { Separator } from "@/components/ui/separator";
import { MapPin, Map, Phone, Mail } from "lucide-react";

export default function CardOffice() {
    return (
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="space-y-3 w-full">
                <div className="flex items-center gap-2">
                    <MapPin className="text-blue-400" size={17} />
                    <span className="text-slate-100 text-base font-poppins font-bold">Localização do Escritório</span>
                </div>
                <Separator className="w-full bg-slate-500" />
                <div className="flex items-start gap-2">
                    <Map className="text-blue-400" size={20} />
                    <p className="text-slate-400 text-base font-poppins font-bold">Av. 25, 1000 - Centro, Barretos - SP, 14780-330</p>
                </div>
                <Separator className="w-full bg-slate-500" />
                <div className="flex flex-col gap-3">
                    <span className="text-slate-100 text-base font-poppins font-bold">Contato</span>
                    <div className="flex items-center gap-2">
                        <Phone className="text-blue-400" size={17} />
                        <span className="text-slate-400 text-sm font-poppins font-bold">+55 (17) 99123-1235</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="text-blue-400" size={17} />
                        <span className="text-slate-400 text-sm font-poppins font-bold">silva@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}