"use client";
import { ArrowLeft, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPatientSchema } from "@/app/schemas/register-patient.schema";
import z from "zod";
import { useRegisterStore } from "@/app/store/register-store";
import { PatternFormat } from "react-number-format";

type Inputs = z.infer<typeof RegisterPatientSchema>

export default function FormPatient() {
    const [preview, setPreview] = useState<string | null>(null);
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const router = useRouter();
    const { handleSubmit, watch, control, formState: { errors } } = useForm({ resolver: zodResolver(RegisterPatientSchema) });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const storeData = useRegisterStore.getState();

            const requestData = {
                ...storeData,
                ...data,
                profilePicture
            };

            const formData = new FormData();

            Object.entries(requestData).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    formData.append(key, value as string | Blob);
                }
            });

            for (const [key, value] of formData.entries()) {
                console.log(key, value);
            }

            const response = await fetch("http://localhost:8080/user/register", {
                method: "POST",
                body: formData
            });

            console.log("Response:", response);
            console.log(response.status);
            console.log(await response.text);
        } catch (error) {
            console.error("Erro:", error);
        }
    }

    console.log(watch());
    
    return (
        <form 
            className="flex flex-col gap-5 w-full bg-white/5 border border-white/10 rounded-2xl p-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="space-y-5 w-full">
                <div className="flex flex-col justify-center items-center gap-1.5 w-full">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="profilePicture">Foto de Perfil</label>
                    <Controller
                        name="profilePicture"
                        control={control}
                        render={({ field }) => (
                            <input 
                                className="absolute w-16 h-16 opacity-0 cursor-pointer z-10"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];

                                    if(!file) return;

                                    field.onChange(file);

                                    setPreview(URL.createObjectURL(file))
                                    setProfilePicture(file);
                                }}
                            />
                        )}
                    />
                    { !preview && (
                        <div className="w-16 h-16 flex justify-center items-center bg-white/5 border border-white/10 rounded-full">
                            <User className="text-white" />
                        </div> 
                    )}
                    { preview && (
                        <div className="relative w-16 h-16">
                            <Image
                                className="object-cover rounded-full"
                                src={preview}
                                alt="Profile Patient Image"
                                fill
                            />
                        </div>
                    )}
                    {errors.profilePicture?.message && <span className="text-red-500 text-sm font-inter">{errors.profilePicture?.message}</span>}
                </div>
                <div className="flex justify-between items-center gap-2 w-full">
                    <div className="flex flex-col w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="gender">Gêreno</label>
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400">
                                        <SelectValue placeholder="Selecione seu gênero" />
                                    </SelectTrigger>
                                    <SelectContent className="border border-white/10" align="center">
                                        <SelectGroup>
                                            <SelectItem value="Masculino">Masculino</SelectItem>
                                            <SelectItem value="Feminino">Feminino</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.gender?.message && <span className="text-red-500 text-sm font-inter">{errors.gender?.message}</span>}
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="dateBirth">Data de Nascimento</label>
                        <Controller
                            name="dateBirth"
                            control={control}
                            render={({ field }) => (
                                <PatternFormat
                                    className="w-full text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
                                    format="##/##/####"
                                    placeholder="DD/MM/AAAA"
                                    value={field.value}
                                    onValueChange={(values) =>
                                        field.onChange(values.formattedValue)
                                    }
                                />
                            )}
                        />
                        {errors.dateBirth?.message && <span className="text-red-500 text-sm font-inter">{errors.dateBirth?.message}</span>}
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="bloodType">Tipo Sanguíneo</label>
                    <Controller 
                        name="bloodType"
                        control={control}
                        render={({ field }) => (
                            <ToggleGroup 
                                className="grid grid-cols-4 w-full" 
                                type="single"
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="A+">A+</ToggleGroupItem>
                                <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="A-">A-</ToggleGroupItem>
                                <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="B+">B+</ToggleGroupItem>
                                <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="B-">B-</ToggleGroupItem>
                                <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="AB+">AB+</ToggleGroupItem>
                                <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="AB-">AB-</ToggleGroupItem>
                                <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="0+">O+</ToggleGroupItem>
                                <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="0-">O-</ToggleGroupItem>
                            </ToggleGroup>
                        )}
                    />
                    {errors.bloodType?.message && <span className="text-red-500 text-sm font-inter">{errors.bloodType?.message}</span>}
                </div>
            </div>
            <div className="flex justify-between items-center gap-2 w-full">
                <button 
                    className="flex justify-center items-center w-2/5 text-blue-400 text-base font-poppins font-semibold border border-blue-400 rounded-xl p-3 cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-400"
                    onClick={() => router.back()} 
                    type="button"
                ><ArrowLeft size={15} /> Voltar</button>
                <button 
                    className="flex justify-center items-center w-full text-white text-base font-poppins font-semibold bg-linear-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30 rounded-xl p-3 cursor-pointer transition-all delay-75 hover:shadow-blue-500/50"
                    type="submit"
                >Completar Registro</button>
            </div>
        </form>
    );
}