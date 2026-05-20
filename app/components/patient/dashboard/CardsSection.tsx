import StatsCard from "./StatsCard";
import { Check, Clock, Calendar, Heart } from "lucide-react";

export default function CardsSection() {
    return (
        <section className="flex justify-center items-center w-full">
            <div className="flex justify-between items-center gap-4 w-2/3 pt-10">
                <StatsCard
                    borderColor="border border-green-500/50"
                    bgColor="bg-green-500/20"
                    iconColor="text-green-500"
                    icon={<Check />}
                    data="2"
                    name="Consultas Realizadas"
                />
                <StatsCard
                    borderColor="border border-purple-500/50"
                    bgColor="bg-purple-500/20"
                    iconColor="text-purple-500"
                    icon={<Clock />}
                    data="4"
                    name="Exames Pendentes"
                />
                <StatsCard
                    borderColor="border border-blue-500/50"
                    bgColor="bg-blue-500/20"
                    iconColor="text-blue-500"
                    icon={<Calendar />}
                    data="2"
                    name="Consultas Agendadas"
                />
                <StatsCard
                    borderColor="border border-red-500/50"
                    bgColor="bg-red-500/20"
                    iconColor="text-red-500"
                    icon={<Heart />}
                    data="3"
                    name="Médicos Favoritos"
                />
            </div>
        </section>
    );
}