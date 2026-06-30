"use client";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ProgressStep() {
    const pathname = usePathname();
    let route1 = false;
    let route2 = false;
    let route3 = false;

    if (pathname === "/user/patient/doctors/doctor/schedule") route1 = true;
    if (pathname === "/user/patient/doctors/doctor/schedule/details") route2 = true;
    if (pathname === "/user/patient/doctors/doctor/schedule/details/confirmation") route3 = true;

    return (
        <div className="flex items-center gap-3 w-full">
            <div className="flex flex-col items-center gap-2 flex-1">
                <div className={`flex justify-center items-center w-14 h-14 bg-blue-400 rounded-2xl`}>
                    <span className={`text-slate-100 text-lg font-poppins font-bold`}>{route2 || route3 ? <Check /> : 1}</span>
                </div>
                <span className={`text-blue-400 text-sm font-inter font-bold text-nowrap`}>Data/Horário</span>
            </div>
            <Separator className="bg-slate-100 flex-5 h-1" orientation="horizontal" />
            <div className="flex flex-col items-center gap-2 flex-1">
                <div className={`${route2 || route3 ? "bg-blue-400" : "bg-slate-400"} flex justify-center items-center w-14 h-14 rounded-2xl`}>
                    <span className={`${route2 || route3 ? "text-slate-100" : "text-slate-200"} text-lg font-poppins font-bold`}>{route3 ? <Check /> : 2}</span>
                </div>
                <span className={`${route2 || route3 ? "text-blue-400" : "text-slate-400"} text-sm font-inter font-bold text-nowrap`}>Detalhes</span>
            </div>
            <Separator className="bg-slate-100 flex-5 h-1" orientation="horizontal" />
            <div className="flex flex-col items-center gap-2 flex-1">
                <div className={`${route3 ? "bg-blue-400" : "bg-slate-400"} flex justify-center items-center w-14 h-14 rounded-2xl`}>
                    <span className={`${route3 ? "text-slate-100" : "text-slate-200"} text-lg font-poppins font-bold`}>3</span>
                </div>
                <span className={`${route3 ? "text-blue-400" : "text-slate-400"} text-sm font-inter font-bold text-nowrap`}>Confirmação</span>
            </div>
        </div>
    );
}