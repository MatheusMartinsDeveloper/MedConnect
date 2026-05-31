"use client";
import { Input } from "@/components/ui/input";
import { ArrowLeft, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FormDoctor() {
    const [preview, setPreview] = useState<string | null>(null);
    const router = useRouter();

    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setPreview(imageUrl);
    }
    
    return (
        <div className="flex flex-col gap-5 w-full bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="space-y-5 w-full">
                <div className="flex flex-col justify-center items-center gap-1.5 w-full">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="profilePicture">Foto de Perfil</label>
                    <Input 
                        className="absolute w-16 h-16 opacity-0 cursor-pointer z-10"
                        onChange={handleImage}
                        type="file" 
                        name="profilePicture" 
                        id="profilePicture" 
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
                </div>
                <div className="flex justify-between items-center gap-2 w-full">
                    <div className="flex flex-col w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="crm">CRM (Estado/Número)</label>
                        <input  
                            className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
                            type="text" 
                            name="crm" 
                            id="crm" 
                            placeholder="Ex: SP/12345"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="experience">Experiência (anos)</label>
                        <input 
                            className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 "
                            type="number"
                            name="experience" 
                            id="experience"
                            min={1} 
                            max={50}  
                            placeholder="Ex: 10"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-2 w-full">
                    <div className="flex flex-col w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="locationWork">Hospital/Clinica</label>
                        <input
                            className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400" 
                            type="text" 
                            name="locationWork" 
                            id="locationWork" 
                            placeholder="Ex: Hospital São Lucas"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="specialization">Especialidade</label>
                        <Select>
                            <SelectTrigger className="w-full text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400">
                                <SelectValue placeholder="Selecione sua especialidade"></SelectValue>
                            </SelectTrigger>
                            <SelectContent className="border border-white/10" align="center">
                                <SelectGroup>
                                    <SelectItem value="Clínica Geral">Clínica Geral</SelectItem>
                                    <SelectItem value="Cardiologista">Cardiologia</SelectItem>
                                    <SelectItem value="Dermatologia">Dermatologia</SelectItem>
                                    <SelectItem value="Pediatria">Pediatria</SelectItem>
                                    <SelectItem value="Neurologia">Neurologia</SelectItem>
                                    <SelectItem value="Ortopedia">Ortopedia</SelectItem>
                                    <SelectItem value="Psiquiatria">Psiquiatria</SelectItem>
                                    <SelectItem value="Oftalmologia">Oftalmologia</SelectItem>
                                    <SelectItem value="Ginecologia">Ginecologia</SelectItem>
                                    <SelectItem value="Urologia">Urologia</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="consultPrice">Valor da Consulta</label>
                    <input 
                        className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
                        type="number" 
                        name="consultPrice" 
                        id="consultPrice" 
                        placeholder="Ex: 250"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="description">Biografia</label>
                    <textarea
                        className="text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 resize-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400" 
                        name="description" 
                        id="description"
                        placeholder="Breve descrição sobre você"
                        rows={3}
                    ></textarea>
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
                >Completar Registro</button>
            </div>
        </div>
    );
}