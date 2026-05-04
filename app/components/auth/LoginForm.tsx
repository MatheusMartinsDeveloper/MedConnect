"use client"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    //const { register, handleSubmit } = useForm();

    const changePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    }

    return (
        <form 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 w-1/4"
            action=""
        >
            <div className="flex flex-col gap-5 w-full">
                <div>
                    <h2 className="text-white text-xl font-poppins font-semibold">Entrar na plataforma</h2>
                </div>
                <Tabs className="bg-white/5 rounded-xl p-1 w-full" defaultValue="patient">
                    <TabsList className="gap-2 w-full">
                        <TabsTrigger 
                            className="data-active:text-white data-active:bg-blue-500 text-slate-400 rounded-xl p-4 w-full transition-all delay-100 cursor-pointer hover:text-white" 
                            value="patient"
                        >Paciente</TabsTrigger>
                        <TabsTrigger 
                            className="data-active:text-white data-active:bg-blue-500 text-slate-400 rounded-xl p-4 w-full transition-all delay-100 cursor-pointer hover:text-white" 
                            value="doctor"
                        >Médico</TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="email">E-mail</label>
                        <input 
                            className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400" 
                            type="email" 
                            id="email" 
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="password">Senha</label>
                        <div className="relative flex items-center w-full">
                            <input 
                                className="w-full text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
                                type={passwordVisibility ? "text" : "password"} 
                                id="password" 
                                placeholder="******"
                            />
                            { passwordVisibility ? <EyeOff className="absolute right-5 text-white cursor-pointer" size={20} onClick={changePasswordVisibility} /> : <Eye className="absolute right-5 text-white cursor-pointer" size={20} onClick={changePasswordVisibility} /> }
                        </div>
                        
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="space-x-2.5">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label className="text-slate-400 text-sm font-inter cursor-pointer" htmlFor="checkbox">Lembrar de mim</label>
                        </div>
                        <Link className="text-blue-400 text-sm hover:text-blue-300 transition-colors" href={""}>Esqueci a senha</Link>
                    </div>
                    <div className="flex w-full">
                        <Link 
                            className="text-white text-base font-poppins font-semibold text-center bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/30 p-3 w-full transition-all delay-100 hover:scale-105 hover:shadow-blue-500/50" 
                            href={""}
                        >Entrar</Link>
                    </div>
                    <div className="flex justify-center items-center gap-1 w-full">
                        <span className="text-slate-400 text-sm font-inter">Não tem conta?</span>
                        <Link className="text-blue-400 text-sm font-inter hover:text-blue-300" href={""}>Cadrastre-se grátis</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}