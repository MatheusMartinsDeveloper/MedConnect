import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function PaginationDoctor() {
  return (
    <Pagination className="pt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="text-slate-400 text-sm font-inter transition-all delay-75 hover:text-blue-400" href="#" text="Voltar" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-white text-base font-inter font-semibold bg-linear-to-r from-blue-500 to-cyan-500 border-none" href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-white text-base font-inter font-semibold" href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-white text-base font-inter font-semibold" href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-white" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className="text-slate-400 text-sm font-inter transition-all delay-75 hover:text-blue-400" href="#" text="Proxímo" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}