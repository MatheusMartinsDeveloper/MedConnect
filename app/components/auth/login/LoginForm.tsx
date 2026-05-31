"use client";
import z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/app/schemas/login.schema";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

type Inputs = z.infer<typeof User>;
type Role = "PATIENT" | "DOCTOR";

export default function LoginForm() {
    const [role, setRole] = useState<Role>("PATIENT");
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({ resolver: zodResolver(User) });
    const router = useRouter();

    const changePasswordVisibility = () => setPasswordVisibility(!passwordVisibility);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const requestData = {
            ...data,
            role
        };

        console.log(requestData);

        const response = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        console.log(response);
        console.log(role);

        if(response.status == 200 && role == "PATIENT") {
            router.push("user/patient");
        }
    }
    console.log(watch());

    return (
        <form 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 w-1/4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-5 w-full">
                <div>
                    <h2 className="text-white text-xl font-poppins font-semibold">Entrar na plataforma</h2>
                </div>
                <Tabs 
                    className="bg-white/5 rounded-xl p-1 w-full" 
                    value={role}
                    onValueChange={(value) => setRole(value as Role)}
                >
                    <TabsList className="gap-2 w-full">
                        <TabsTrigger 
                            className="data-active:text-white data-active:bg-blue-500 text-slate-400 rounded-xl p-4 w-full transition-all delay-100 cursor-pointer hover:text-white" 
                            value="PATIENT"
                        >Paciente</TabsTrigger>
                        <TabsTrigger 
                            className="data-active:text-white data-active:bg-blue-500 text-slate-400 rounded-xl p-4 w-full transition-all delay-100 cursor-pointer hover:text-white" 
                            value="DOCTOR"
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
                            {...register("email")}
                        />
                        {errors.email?.message && <span className="text-red-500 text-sm font-inter">{errors.email?.message}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="password">Senha</label>
                        <div className="relative flex items-center w-full">
                            <input 
                                className="w-full text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
                                type={passwordVisibility ? "text" : "password"} 
                                id="password" 
                                placeholder="********"
                                {...register("password")}
                            />
                            { passwordVisibility ? <EyeOff className="absolute right-5 text-white cursor-pointer" size={20} onClick={changePasswordVisibility} /> : <Eye className="absolute right-5 text-white cursor-pointer" size={20} onClick={changePasswordVisibility} /> }
                        </div>
                            {errors.password?.message && <span className="text-red-500 text-sm font-inter">{errors.password?.message}</span>}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="space-x-2.5">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label className="text-slate-400 text-sm font-inter cursor-pointer" htmlFor="checkbox">Lembrar de mim</label>
                        </div>
                        <Link className="text-blue-400 text-sm hover:text-blue-300 transition-colors" href={""}>Esqueci a senha</Link>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <button
                            className="text-white text-base font-poppins font-semibold text-center bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/30 p-3 w-full transition-all delay-100 cursor-pointer hover:scale-105 hover:shadow-blue-500/50" 
                            type="submit"                            
                        >Entrar</button>
                        <div className="flex justify-center items-center gap-2 w-full">
                            <Separator className="bg-slate-400 flex-1" orientation="horizontal" />
                            <span className="text-white text-sm font-inter font-semibold">Ou</span>
                            <Separator className="bg-slate-400 flex-1" orientation="horizontal" />
                        </div>
                        <button
                            className="flex justify-center items-center gap-2 text-white text-base font-poppins font-semibold text-center bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/30 p-3 w-full transition-all delay-100 cursor-pointer hover:scale-105 hover:shadow-blue-500/50"
                            type="button"
                        ><FaGoogle /> Entrar com Google</button>
                    </div>
                    <div className="flex justify-center items-center gap-1 w-full">
                        <span className="text-slate-400 text-sm font-inter">Não tem conta?</span>
                        <Link className="text-blue-400 text-sm font-inter transition-all delay-75 hover:text-blue-300" href={"/register"}>Cadrastre-se grátis</Link>
                    </div>
                </div>
            </div>
        </form>
    )
}