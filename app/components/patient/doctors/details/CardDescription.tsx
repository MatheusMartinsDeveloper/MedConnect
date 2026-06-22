import { GraduationCap, IdCardLanyard } from "lucide-react";

export default function CardDescription() {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="space-y-5">
                <div className="space-y-3">
                    <h2 className="flex items-center gap-2 text-slate-100 text-lg font-poppins font-bold">
                        <IdCardLanyard className="text-blue-400" size={20} /> Descrição Profissional</h2>
                    <p className="text-slate-400 text-base font-inter font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero rem repellat voluptatem? Aliquid quos ratione, impedit tenetur in doloribus. Laborum fuga nesciunt soluta iste quis tenetur esse qui enim? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsum alias ducimus! Veritatis iusto repellendus cumque quasi aliquid quibusdam consequuntur reiciendis impedit, iste quidem molestiae cum laborum debitis ducimus? Placeat.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-slate-100 text-lg font-poppins font-bold">Graduação e Certificação</span>
                    <div className="flex items-center gap-2">
                        <GraduationCap className="text-blue-400" size={20} />
                        <span className="text-slate-400 text-sm font-inter font-semibold">USP (Universidade do Estado de São Paulo)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}