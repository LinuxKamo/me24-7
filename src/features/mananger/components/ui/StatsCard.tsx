import { memo } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  Icon?: React.ComponentType<{ className?: string }>;
  bg_from: string;
  bg_to: string;
}

function StatsCard({ title, value, Icon, bg_from, bg_to }: StatsCardProps) {
  return (
    <div
      key={title}
      className="bg-white rounded-2xl border border-slate-200/60 p-5 flex items-center gap-4"
    >
      {Icon && (
        <div
          className={`h-12 w-12 rounded-xl bg-linear-to-br ${bg_from} ${bg_to} flex items-center justify-center shadow-lg shadow-slate-200/50`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      )}
      <div>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="text-xs text-slate-500 font-medium">{title}</p>
      </div>
    </div>
  );
}

export default memo(StatsCard);