"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LogOut } from "lucide-react";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 flex justify-center w-full z-50 bg-slate-900 border-b border-white/5 p-5">
            <div className="flex justify-between items-center w-2/3">
                <div className="flex items-center gap-2">
                    <div className="relative flex justify-center items-center w-9 h-9 bg-linear-to-br from-blue-400 to-cyan-400 rounded-md">
                        <Image
                            className="object-cover brightness-0 invert"
                            src={"/assets/medconnect_logo.png"}
                            alt="MedConnect Logo"
                            fill
                        />
                    </div>
                    <h1 className="text-white text-lg font-poppins font-bold">MedConnect</h1>
                </div>
                <nav className="flex items-center gap-2">
                    <Link className={`text-sm font-poppins font-semibold rounded-md px-3 py-2 transition-all delay-75 ${pathname == "/user/patient" ? "text-blue-400 bg-blue-500/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`} href={"/user/patient"}>Dashboard</Link>
                    <Link className={`text-sm font-poppins font-semibold rounded-md px-3 py-2 transition-all delay-75 ${pathname == "/user/patient/doctors" || "/user/patient/doctors/doctor" ? "text-blue-400 bg-blue-500/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`} href={"/user/patient/doctors"}>Médicos</Link>
                    <Link className={`text-sm font-poppins font-semibold rounded-md px-3 py-2 transition-all delay-75 ${pathname == "/user/patient/appointments" ? "text-blue-400 bg-blue-500/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`} href={"/user/patient/appointments"}>Consultas</Link>
                    <Link className={`text-sm font-poppins font-semibold rounded-md px-3 py-2 transition-all delay-75 ${pathname == "/user/patient/report" ? "text-blue-400 bg-blue-500/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`} href={"/user/patient/report"}>Prontuário</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <div>
                        <Link 
                            className="group flex items-center w-9 h-9 bg-white/5 rounded-lg p-2.5 transition-all delay-75 hover:bg-white/10" 
                            href={""}
                        ><Bell className="text-slate-400 transition-all delay-75 group-hover:text-white" size={20} /></Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative w-9 h-9">
                            <Image
                                className="object-cover rounded-lg"
                                src={"/assets/profile_picture.jpeg"}
                                alt="User Profile Picture"
                                fill
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-inter font-semibold">Lucas</span>
                            <span className="text-slate-400 text-xs font-inter font-semibold">Paciente</span>
                        </div>
                    </div>
                    <div>
                        <Link 
                            className="group flex items-center w-9 h-9 bg-white/5 rounded-lg p-2.5 transition-all delay-75 hover:bg-red-500/20"
                            href={"/"}
                        ><LogOut className="text-slate-400 transition-all delay-75 group-hover:text-red-400" size={15} /></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}