type DataTableProps = {
  headers: string[];
  children: React.ReactNode;
};

export function DataTable({ headers, children }: DataTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            {headers.map((header) => (
              <th key={header} className="text-left px-4 py-3 font-medium">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">{children}</tbody>
      </table>
    </div>
  );
}
