import type { ReactNode } from 'react';

type Column<T> = {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
};

type DataTableCardProps<T> = {
  title: string;
  subtitle?: string;
  columns: Array<Column<T>>;
  rows: T[];
};

export function DataTableCard<T>({ title, subtitle, columns, rows }: DataTableCardProps<T>) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="text-sm text-slate-500 mt-1">{subtitle}</p> : null}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50/70 text-slate-600">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="text-left px-4 py-3 font-medium">{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-3 text-slate-700">{column.render(row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
