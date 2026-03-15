import { TrendingUp } from 'lucide-react';

type KpiCardProps = {
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
};

export function KpiCard({ label, value, delta, positive = true }: KpiCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-3xl font-semibold text-slate-900 mt-2">{value}</p>
      <div className={`mt-3 inline-flex items-center gap-1 text-xs font-medium ${positive ? 'text-emerald-600' : 'text-rose-600'}`}>
        <TrendingUp className={`w-3.5 h-3.5 ${positive ? '' : 'rotate-180'}`} />
        {delta}
      </div>
    </div>
  );
}
