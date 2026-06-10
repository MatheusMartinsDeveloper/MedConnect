"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { RegisterSchema } from "@/app/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterStore } from "@/app/store/register-store";
import z from "zod";

type Inputs = z.infer<typeof RegisterSchema>
type Role = "PATIENT" | "DOCTOR";

export default function Form() {
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const [role, setRole] = useState<Role>("PATIENT");
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm({ resolver: zodResolver(RegisterSchema) });
    const { saveUserData } = useRegisterStore();
    const router = useRouter();

    const changePasswordVisibility = () => setPasswordVisibility(!passwordVisibility);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        saveUserData({
            ...data,
            role
        });

        console.log(useRegisterStore.getState());

        if (role === "PATIENT") {
            router.push("/register/patient");
        } else {
            router.push("/register/doctor");
        }
    }

    console.log(watch());

    return (
        <form 
            className="flex flex-col gap-5 w-full bg-white/5 border border-white/10 rounded-2xl p-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="w-full">
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
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="nameLastname">Nome e Sobrenome</label>
                    <input 
                        className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
                        type="text" 
                        id="nameLastname" 
                        placeholder="Ex: Lucas Silva"
                        {...register("nameLastname")}
                    />
                    {errors.nameLastname?.message && <span className="text-red-500 text-sm font-inter">{errors.nameLastname?.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="email">Email</label>
                    <input 
                        className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
                        type="text" 
                        id="email" 
                        placeholder="seu@email.com"
                        {...register("email")}
                    />
                    {errors.email?.message && <span className="text-red-500 text-sm font-inter">{errors.email?.message}</span>}
                </div>
                <div className="flex items-center gap-2 w-full">
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
                    <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="telephone">Telefone</label>
                        <Controller 
                            name="telephone"
                            control={control}
                            render={({ field }) => (
                                <PatternFormat
                                    className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400" 
                                    {...field}
                                    format="(##) #####-####" 
                                    placeholder="(99) 99999-9999"
                                />
                            )}
                        />
                        {errors.telephone?.message && <span className="text-red-500 text-sm font-inter">{errors.telephone?.message}</span>}
                    </div>
                </div>
                <div className="flex justify-center w-full py-5">
                    <button
                        className="flex justify-center items-center w-full text-white text-base font-poppins font-semibold bg-linear-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30 rounded-xl p-3 cursor-pointer transition-all delay-75 hover:shadow-blue-500/50"
                        type="submit"
                    >Continuar passo 2 <ArrowRight size={15} /></button>
                </div>
                <Separator className="bg-white" />
                <div className="flex justify-center gap-1.5 w-full pt-5">
                    <span 
                        className="text-slate-400 text-sm font-inter font-semibold"
                    >Já tem uma conta? <Link className="text-blue-400 font-poppins uppercase transition-all delay-75 hover:text-blue-300" href={"/"}>Login</Link></span>
                </div>
            </div>
        </form>
    );
}