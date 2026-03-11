import { BarChart3, FolderKanban, Users, AlertTriangle } from 'lucide-react';
import { buildExecutionInsights, type DailyReportEntry, type EmployeeTask } from '@/features/bsc/domain/execution';

const taskData: EmployeeTask[] = [
  { id: 'TASK-101', title: 'Checkout validation', projectName: 'E-Commerce Platform v2.0', assignee: 'Nguyen Van A', deadline: '2026-03-18', estimatedHours: 8, status: 'In Progress' },
  { id: 'TASK-102', title: 'Payment API review', projectName: 'E-Commerce Platform v2.0', assignee: 'Le Hong Duc', deadline: '2026-03-17', estimatedHours: 6, status: 'Review' },
  { id: 'TASK-103', title: 'Mobile regression fix', projectName: 'Mobile Banking App', assignee: 'Tran Thi B', deadline: '2026-03-15', estimatedHours: 7, status: 'Todo' },
  { id: 'TASK-104', title: 'Token refresh hardening', projectName: 'Mobile Banking App', assignee: 'Pham Van C', deadline: '2026-03-14', estimatedHours: 5, status: 'Done' },
  { id: 'TASK-105', title: 'Customer portal release notes', projectName: 'SME Portal', assignee: 'Nguyen Van A', deadline: '2026-03-16', estimatedHours: 3, status: 'Done' },
];

const reportData: DailyReportEntry[] = [
  { employee: 'Nguyen Van A', blockers: 'Waiting UX copy approval', submittedAt: '2026-03-10' },
  { employee: 'Le Hong Duc', blockers: '', submittedAt: '2026-03-10' },
  { employee: 'Tran Thi B', blockers: 'Need customer test data', submittedAt: '2026-03-10' },
  { employee: 'Pham Van C', blockers: '', submittedAt: '2026-03-10' },
];

const insights = buildExecutionInsights(taskData, reportData);

export function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Active Projects</p>
          <p className="text-3xl font-semibold text-gray-900">3</p>
          <p className="text-xs text-gray-500 mt-1">Execution layer snapshot</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Task Completion Progress</p>
          <p className="text-3xl font-semibold text-gray-900">{insights.projectProgress}%</p>
          <p className="text-xs text-gray-500 mt-1">From employee task updates</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Delivery Efficiency</p>
          <p className="text-3xl font-semibold text-gray-900">{insights.deliveryEfficiency}%</p>
          <p className="text-xs text-gray-500 mt-1">Internal Process perspective</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Operational Risks</p>
          <p className="text-3xl font-semibold text-gray-900">{insights.blockedReportsCount}</p>
          <p className="text-xs text-gray-500 mt-1">Reports with blockers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 inline-flex items-center gap-2">
            <Users className="w-5 h-5 text-[#3AE7E1]" />
            Team Workload
          </h3>
          <div className="space-y-3">
            {insights.teamWorkloads.map((item) => (
              <div key={item.employee} className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
                <div>
                  <p className="font-medium text-gray-900">{item.employee}</p>
                  <p className="text-xs text-gray-500">Assigned: {item.assignedTasks} | In progress/review: {item.inProgressTasks}</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#0B1C2D]/5 text-[#0B1C2D] text-sm font-medium">
                  Load {item.workloadScore}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 inline-flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#3AE7E1]" />
            Report Summary
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p className="rounded-lg border border-gray-100 p-3 inline-flex items-center gap-2 w-full">
              <FolderKanban className="w-4 h-4 text-[#3AE7E1]" />
              4 daily reports submitted today
            </p>
            <p className="rounded-lg border border-gray-100 p-3 inline-flex items-center gap-2 w-full">
              <AlertTriangle className="w-4 h-4 text-[#F5A623]" />
              2 blockers need manager action
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
