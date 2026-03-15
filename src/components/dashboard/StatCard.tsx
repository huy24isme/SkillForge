type StatCardProps = {
  label: string;
  value: string | number;
  hint?: string;
};

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-3xl font-semibold text-gray-900 mt-2">{value}</p>
      {hint ? <p className="text-xs text-gray-500 mt-1">{hint}</p> : null}
    </div>
  );
}
