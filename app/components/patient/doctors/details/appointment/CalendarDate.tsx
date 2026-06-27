"use client"
import { Calendar } from "@/components/ui/calendar"
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export function CalendarDate() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 [--cell-size:--spacing(1)]"
      mode="single"
      captionLayout="dropdown-months"
      showOutsideDays
      selected={date}
      onSelect={setDate}
      locale={ptBR}
      modifiersClassNames={{
        selected: "bg-blue-400 text-slate-100 !rounded-full",
      }}
    />
  );
}