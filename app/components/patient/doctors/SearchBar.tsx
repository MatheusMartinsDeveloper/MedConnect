import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="flex justify-between items-center w-full bg-white/5 border border-white/10 rounded-2xl p-5">
            <FieldGroup className="flex items-center w-full">
                <Field>
                    <FieldLabel className="text-white text-sm font-poppins font-semibold">Search</FieldLabel>
                    <div className="relative flex items-center">
                        <Search className="absolute left-5 text-slate-400" size={15} />
                        <Input 
                            className="w-full text-white bg-white/5 border border-white/10 rounded-2xl px-10 py-2 outline-0 placeholder:text-slate-400 transition-all delay-75 hover:border-blue-400 focus:border-blue-400" 
                            placeholder="Nome ou Especialidade"
                        />
                    </div>
                </Field>
                <Field>
                    <FieldLabel className="text-white text-sm font-poppins font-semibold">Especialidade</FieldLabel>
                    <Select>
                        <SelectTrigger className="w-full text-slate-400 bg-white/5 border border-white/10 rounded-2xl px-10 py-2 outline-0 placeholder:text-slate-400 transition-all delay-75 hover:border-blue-400 focus:border-blue-400">
                            <SelectValue placeholder="Todas especialidades" />
                        </SelectTrigger>
                        <SelectContent className="border border-white/10">
                            <SelectGroup>
                                <SelectItem value="Cardiologia">Cardiologia</SelectItem>
                                <SelectItem value="Dermatologia">Dermatologia</SelectItem>
                                <SelectItem value="Pediatria">Pediatria</SelectItem>
                                <SelectItem value="Ortopedia">Ortopedia</SelectItem>
                                <SelectItem value="Neurologia">Neurologia</SelectItem>
                                <SelectItem value="Psiquiatria">Psiquiatria</SelectItem>
                                <SelectItem value="Oftalmologia">Oftalmologia</SelectItem>
                                <SelectItem value="Ginecologia">Ginecologia</SelectItem>
                                <SelectItem value="Urologia">Urologia</SelectItem>
                                <SelectItem value="Endocrinologia">Endocrinologia</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
                <Field>
                    <FieldLabel className="text-white text-sm font-poppins font-semibold">Preço</FieldLabel>
                    <Select>
                        <SelectTrigger className="w-full text-slate-400 bg-white/5 border border-white/10 rounded-2xl px-10 py-2 outline-0 placeholder:text-slate-400 transition-all delay-75 hover:border-blue-400 focus:border-blue-400">
                            <SelectValue placeholder="Todas especialidades" />
                        </SelectTrigger>
                        <SelectContent className="border border-white/10">
                            <SelectGroup>
                                <SelectItem value="50-150">R$ 50 - R$ 150</SelectItem>
                                <SelectItem value="150-300">R$ 150 - R$ 300</SelectItem>
                                <SelectItem value="300-500">R$ 300 - R$ 500</SelectItem>
                                <SelectItem value="500-800">R$ 500 - R$ 800</SelectItem>
                                <SelectItem value="800-1200">R$ 800 - R$ 1200</SelectItem>
                                <SelectItem value="1200+">+R$ 300</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
            </FieldGroup>
        </div>
    );
}