"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Sun, Sunset } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

export default function TimePicker() {
    const { control } = useForm();

    return (
        <div className="flex flex-col gap-5 w-full bg-white/5 border border-white/10 rounded-2xl p-5">
            <h2 className="text-slate-100 text-base font-poppins font-bold">Horários Disponíveis</h2>
            <Controller 
                name="hour"
                control={control}
                render={({ field }) => (
                    <ToggleGroup 
                        className="flex flex-col gap-5 w-full" 
                        type="single"
                        value={field.value}
                        onValueChange={field.onChange}
                    >
                        <div className="flex flex-col gap-2 w-full">
                            <span className="flex items-center gap-1 text-blue-400 text-sm uppercase font-poppins font-bold"><Sun className="text-blue-400" size={20} /> Manhã</span>
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <ToggleGroupItem className="bg-white/4 border border-white/10 rounded-md text-slate-100 text-sm font-inter transition-all delay-75 hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400" value="A+">08:00</ToggleGroupItem>
                                <ToggleGroupItem className="bg-white/4 border border-white/10 rounded-md text-slate-100 text-sm font-inter transition-all delay-75 hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400" value="A-">08:30</ToggleGroupItem>
                                <ToggleGroupItem className="bg-white/4 border border-white/10 rounded-md text-slate-100 text-sm font-inter transition-all delay-75 hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400" value="B+">09:00</ToggleGroupItem>
                                <ToggleGroupItem className="bg-white/4 border border-white/10 rounded-md text-slate-100 text-sm font-inter transition-all delay-75 hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400" value="B-">09:30</ToggleGroupItem>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <span className="flex items-center gap-1 text-yellow-400 text-sm uppercase font-poppins font-bold"><Sunset className="text-yellow-400" size={20} /> Tarde</span>
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <ToggleGroupItem className="bg-white/4 border border-white/10 rounded-md text-slate-100 text-sm font-inter transition-all delay-75 hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400" value="AB+">14:00</ToggleGroupItem>
                                <ToggleGroupItem className="bg-white/4 border border-white/10 rounded-md text-slate-100 text-sm font-inter transition-all delay-75 hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400" value="AB-">15:00</ToggleGroupItem>
                                <ToggleGroupItem className="bg-white/4 border border-white/10 rounded-md text-slate-100 text-sm font-inter transition-all delay-75 hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400" value="0+">15:30</ToggleGroupItem>
                                <ToggleGroupItem className="bg-white/4 border border-white/10 rounded-md text-slate-100 text-sm font-inter transition-all delay-75 hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400" value="0-">17:00</ToggleGroupItem>
                            </div>
                        </div>
                    </ToggleGroup>
                )}
            />
        </div>
    );
}