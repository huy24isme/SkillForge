import type { ReactNode } from 'react';

type ChartPanelProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ChartPanel({ title, subtitle, children }: ChartPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="text-sm text-slate-500 mt-1">{subtitle}</p> : null}
      </div>
      <div className="h-72">{children}</div>
    </div>
  );
}
