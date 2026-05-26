import { TriangleAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AllergiesCard() {
    return (
        <div className="flex flex-col justify-between w-full h-60 bg-red-300 border-2 border-red-700 rounded-2xl p-4">
            <div className="flex flex-col gap-2 w-full">
                <div>
                    <span 
                        className="flex items-center gap-1 text-red-700 text-base uppercase font-poppins font-semibold"
                    ><TriangleAlert size={20} /> Alergias</span>
                </div>
                <div className="space-y-2 w-full">
                    <div className="w-full bg-white rounded-md p-2">
                        <span
                            className="text-red-700 text-sm font-inter font-semibold"
                        >Diabetes tipo 2</span>
                    </div>
                    <div className="w-full bg-white rounded-md p-2">
                        <span
                            className="text-red-700 text-sm font-inter font-semibold"
                        >Diabetes tipo 2</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <Link 
                    className="flex items-center gap-1 text-red-500 text-sm uppercase font-poppins font-semibold transition-all delay-75 hover:text-red-700"
                    href={""}
                >Mais Detalhes <ArrowRight size={15} /></Link>
            </div>
        </div>
    );
}