import { Star } from "lucide-react";
import Image from "next/image";

export default function CardPatientReview() {
    return (
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="space-y-3">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                        <div className="relative w-12 h-12">
                            <Image
                                className="object-cover rounded-2xl"
                                src={"/assets/profile_picture.jpeg"}
                                alt="Patient Profile Picture"
                                fill
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-100 text-base font-poppins font-bold">Alice Martins</span>
                            <span className="text-slate-200 text-sm font-inter">2 dias atrás</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Star size={20} color="yellow" fill="yellow" />
                        <Star size={20} color="yellow" fill="yellow" />
                        <Star size={20} color="yellow" fill="yellow" />
                        <Star size={20} color="yellow" fill="yellow" />
                        <Star size={20} color="yellow" />
                    </div>
                </div>
                <div>
                    <p className="text-slate-400 text-base font-inter">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum fugiat. Sit nisi culpa qui nihil iusto similique dignissimos totam blanditiis asperiores, est dicta labore aut ea magni, consequuntur officiis.</p>
                </div>
            </div>
        </div>
    );
}