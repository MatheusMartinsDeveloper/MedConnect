
type StatsCardType = {
    borderColor: string;
    bgColor: string;
    iconColor: string;
    icon: React.ReactNode;
    data: string;
    name: string;
}

export default function StatsCard({ borderColor, bgColor, iconColor, icon, data, name }: StatsCardType) {
    return (
        <div className={`w-full rounded-2xl p-5 ${bgColor} ${borderColor}`}>
            <div className="space-y-5">
                <div>
                    <span className={`${iconColor}`}>{icon}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-2xl font-poppins font-bold">{data}</span>
                    <span className="text-slate-400 text-base font-inter font-normal">{name}</span>
                </div>
            </div>
        </div>
    );
}