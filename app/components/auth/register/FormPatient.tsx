"use client";
import { Input } from "@/components/ui/input";
import { ArrowLeft, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function FormPatient() {
    const [preview, setPreview] = useState<string | null>(null);
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [timezone, setTimezone] = useState<string | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    }, [])
    
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
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="gender">Gêreno</label>
                        <Select>
                            <SelectTrigger className="w-full text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400">
                                <SelectValue placeholder="Selecione seu gênero" />
                            </SelectTrigger>
                            <SelectContent className="border border-white/10" align="center">
                                <SelectGroup>
                                    <SelectItem value="male">Masculino</SelectItem>
                                    <SelectItem value="female">Feminino</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="dateBirth">Data de Nascimento</label>
                        <Popover>
                            <PopoverTrigger 
                                className="w-full text-white bg-white/5 border border-white/10 rounded-xl p-2.5 outline-0 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
                                asChild 
                            >
                                <span>DD/MM/AAAA</span>
                            </PopoverTrigger>
                            <PopoverContent 
                                className="w-full bg-slate-900 border border-white/10 ring-0 cursor-pointer" 
                                align="center"
                            >
                                <Calendar 
                                    className="w-full text-white cursor-pointer"
                                    mode="single"
                                    locale={ptBR}
                                    selected={date}
                                    onSelect={setDate}
                                    timeZone={timezone}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-slate-400 text-sm font-poppins font-semibold" htmlFor="bloodType">Tipo Sanguíneo</label>
                    <ToggleGroup className="grid grid-cols-4 w-full" type="single">
                        <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="A+">A+</ToggleGroupItem>
                        <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="A-">A-</ToggleGroupItem>
                        <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="B+">B+</ToggleGroupItem>
                        <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="B-">B-</ToggleGroupItem>
                        <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="AB+">AB+</ToggleGroupItem>
                        <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="AB-">AB-</ToggleGroupItem>
                        <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="0+">O+</ToggleGroupItem>
                        <ToggleGroupItem className="text-slate-400 text-sm font-poppins font-semibold bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all delay-75 hover:text-white hover:bg-blue-300" value="0-">O-</ToggleGroupItem>
                    </ToggleGroup>
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