import { useMemo, useState } from 'react';

type ReportTab = 'daily' | 'weekly' | 'summary';

const dailyReports = [
  { employee: 'Nguyen Van A', date: '2026-03-10', blockers: 'Waiting UX copy approval' },
  { employee: 'Le Hong Duc', date: '2026-03-10', blockers: '' },
  { employee: 'Tran Thi B', date: '2026-03-10', blockers: 'Need customer test dataset' },
];

const weeklyReports = [
  { week: '2026-W10', submitted: 12, completionRate: 86 },
  { week: '2026-W09', submitted: 11, completionRate: 82 },
];

export function Reports() {
  const [tab, setTab] = useState<ReportTab>('daily');

  const riskSignals = useMemo(
    () => dailyReports.filter((report) => report.blockers.trim().length > 0),
    []
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900">Reports</h2>
        <p className="text-sm text-gray-600 mt-1">Review daily reports, weekly reports, and AI-generated operational summaries.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-2 inline-flex gap-2">
        <button onClick={() => setTab('daily')} className={`px-4 py-2 rounded-lg text-sm ${tab === 'daily' ? 'bg-[#3AE7E1] text-white' : 'text-gray-600'}`}>Daily reports</button>
        <button onClick={() => setTab('weekly')} className={`px-4 py-2 rounded-lg text-sm ${tab === 'weekly' ? 'bg-[#3AE7E1] text-white' : 'text-gray-600'}`}>Weekly reports</button>
        <button onClick={() => setTab('summary')} className={`px-4 py-2 rounded-lg text-sm ${tab === 'summary' ? 'bg-[#3AE7E1] text-white' : 'text-gray-600'}`}>AI summaries</button>
      </div>

      {tab === 'daily' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
          {dailyReports.map((report, index) => (
            <div key={`${report.employee}-${index}`} className="rounded-lg border border-gray-100 p-3">
              <p className="font-medium text-gray-900">{report.employee}</p>
              <p className="text-sm text-gray-600">{new Date(report.date).toLocaleDateString()}</p>
              <p className="text-sm text-gray-700 mt-1">Blockers: {report.blockers || 'None'}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'weekly' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
          {weeklyReports.map((report) => (
            <div key={report.week} className="rounded-lg border border-gray-100 p-3 flex items-center justify-between">
              <p className="font-medium text-gray-900">{report.week}</p>
              <p className="text-sm text-gray-600">Submitted: {report.submitted} | Completion: {report.completionRate}%</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'summary' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">AI operational summary</h3>
          <p className="text-sm text-gray-700">2 blockers require manager action. Mobile Banking App has rising workload pressure in backend tasks.</p>
          <p className="text-sm text-gray-700 mt-2">Recommendation: rebalance tasks for Le Hong Duc and unblock customer test data for Tran Thi B.</p>
          <p className="text-sm text-gray-700 mt-2">Risk signals detected this cycle: {riskSignals.length}</p>
        </div>
      )}
    </div>
  );
}
