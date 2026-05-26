import Image from "next/image";

export default function ProfileCard() {
    return (
        <div className="space-y-4 w-full h-60 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex gap-4">
                <div className="relative w-24 h-24">
                    <Image
                        className="object-cover rounded-2xl"
                        src={"/assets/profile_picture.jpeg"}
                        alt="Profile Picture"
                        fill
                    />
                </div>
                <div>
                    <h2 className="text-blue-400 text-3xl font-poppins font-semibold">Lucas <br /> Silva</h2>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col bg-white/10 border border-white/10 rounded-xl p-2">
                    <span className="text-white text-xs uppercase font-inter font-semibold">Tipo Sanguíneo</span>
                    <span className="text-blue-400 text-base font-poppins font-semibold">O-</span>
                </div>
                <div className="flex flex-col bg-white/10 border border-white/10 rounded-xl p-2">
                    <span className="text-white text-xs uppercase font-inter font-semibold">Idade/Genêro</span>
                    <span className="text-blue-400 text-base font-poppins font-semibold">31/Masculino</span>
                </div>
            </div>
        </div>
    );
}