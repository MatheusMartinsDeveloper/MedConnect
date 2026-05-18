import Header from "@/app/components/shared/Header";

export default function PatientLayout({ children }: { children: React.ReactNode; }) {
    return (
        <main className="h-screen bg-slate-950">
            <Header />
            { children }
        </main>
    );
}