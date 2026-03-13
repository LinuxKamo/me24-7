import { ChevronRight } from "lucide-react";
import type { Area } from "../../../mananger/models/Area.model";

interface SectionItemParam {
  section: Area;
  index: number;
  onclick?: () => void;
}

export default function SectionItem({ section, index, onclick }: SectionItemParam) {
  const initial = (section.name || "S")[0].toUpperCase();

  const colors = [
    "from-[#0F2A4A] to-[#163A64]",
    "from-[#1B5E96] to-[#3B9EDB]",
    "from-[#163A64] to-[#1B5E96]",
    "from-[#3B9EDB] to-[#1B5E96]",
  ];

  const colorClass = colors[index % colors.length];

  const subCount = section.sections.length || 0;

  return (
    <button
      onClick={onclick}
      className="w-full bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 text-left"
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-xl bg-linear-to-br ${colorClass} flex items-center justify-center text-white font-bold text-sm shrink-0`}
      >
        {initial}
      </div>

      {/* Section Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#0F2A4A] text-sm">{section.name}</p>

        <p className="text-xs text-gray-400 mt-0.5">
          {subCount} {subCount === 1 ? "section" : "sections"}
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
    </button>
  );
}