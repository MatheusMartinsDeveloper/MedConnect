import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

export default function HistoryTable() {
    const data = [
        {   
            id: 1,
            doctor: "Dra. Patricia Souza",
            specialization: "Cardiologista",
            description: "Consulta de acompanhamento realizada com sucesso, mantendo evolução positiva no tratamento e recomendação de novos exames preventivos.",
            date: "26/05/2026",
            status: "Retorno"
        },
        {
            id: 2,
            doctor: "Dr. Leonardo Silva",
            specialization: "Pediatria",
            description: "Paciente apresentou melhora significativa desde a última avaliação, com orientações médicas atualizadas para continuidade do tratamento.",
            date: "10/06/2026",
            status: "Completa"
        }
    ];

    return (
        <Table className="w-full border border-white/10 rounded-2xl p-4">
            <TableHeader className="bg-white/5 w-full">
                <TableRow className="w-full">
                    <TableHead className="text-blue-400 text-sm font-poppins font-semibold min-w-24">Médico(a)</TableHead>
                    <TableHead className="text-blue-400 text-sm font-poppins font-semibold min-w-24">Especialidade</TableHead>
                    <TableHead className="text-blue-400 text-sm font-poppins font-semibold max-w-24">Descrição</TableHead>
                    <TableHead className="text-blue-400 text-sm font-poppins font-semibold min-w-24">Data</TableHead>
                    <TableHead className="text-blue-400 text-sm font-poppins font-semibold min-w-24">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="bg-white/15 w-full">
                {data.map(item => (
                    <TableRow className="w-full" key={item.id}>
                        <TableCell className="text-slate-300 text-sm font-inter font-semibold min-w-24">{item.doctor}</TableCell>
                        <TableCell className="text-slate-300 text-sm font-inter font-semibold min-w-24">{item.specialization}</TableCell>
                        <TableCell className="text-slate-300 text-sm font-inter font-semibold truncate max-w-24">{item.description}</TableCell>
                        <TableCell className="text-slate-300 text-sm font-inter font-semibold min-w-24">{item.date}</TableCell>
                        <TableCell className="text-slate-300 text-sm font-inter font-semibold min-w-24">{item.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}