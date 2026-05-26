
export default function VitalSignsCard() {
    return (
        <div className="flex flex-col gap-4 w-full h-60 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div>
                <h2 className="text-white text-base uppercase font-poppins font-semibold">Sinais Vitais</h2>
            </div>
            <div className="grid grid-cols-2 space-y-2">
                <div className="flex flex-col gap-1">   
                    <span className="text-white text-xs uppercase font-inter font-semibold">Pressão Arterial</span>
                    <span className="text-blue-400 text-base font-poppins font-semibold">120/80 mmHg</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-white text-xs uppercase font-inter font-semibold">Frequência Cardiaca</span>
                    <span className="text-blue-400 text-base font-poppins font-semibold">72 bpm</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-white text-xs uppercase font-inter font-semibold">Altura</span>
                    <span className="text-blue-400 text-base font-poppins font-semibold">1,78 cm</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-white text-xs uppercase font-inter font-semibold">Peso</span>
                    <span className="text-blue-400 text-base font-poppins font-semibold">71,4 kg</span>
                </div>
            </div>
        </div>
    );
}