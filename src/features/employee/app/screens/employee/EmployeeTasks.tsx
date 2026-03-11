import { useMemo, useState } from 'react';
import { Calendar, FolderKanban, ListChecks } from 'lucide-react';
import {
  buildExecutionInsights,
  type EmployeeTask,
  type TaskStatus,
  type DailyReportEntry,
} from '@/features/bsc/domain/execution';

const initialTasks: EmployeeTask[] = [
  {
    id: 'TASK-101',
    title: 'Implement checkout form validation',
    projectName: 'E-Commerce Platform v2.0',
    assignee: 'Nguyen Van A',
    deadline: '2026-03-18',
    estimatedHours: 8,
    status: 'In Progress',
  },
  {
    id: 'TASK-102',
    title: 'Review API contract for payment gateway',
    projectName: 'E-Commerce Platform v2.0',
    assignee: 'Nguyen Van A',
    deadline: '2026-03-16',
    estimatedHours: 4,
    status: 'Review',
  },
  {
    id: 'TASK-103',
    title: 'Fix mobile layout regression',
    projectName: 'Mobile Banking App',
    assignee: 'Nguyen Van A',
    deadline: '2026-03-14',
    estimatedHours: 6,
    status: 'Todo',
  },
  {
    id: 'TASK-104',
    title: 'Refactor shared input component',
    projectName: 'Mobile Banking App',
    assignee: 'Nguyen Van A',
    deadline: '2026-03-13',
    estimatedHours: 5,
    status: 'Done',
  },
];

const reportSignals: DailyReportEntry[] = [
  { employee: 'Nguyen Van A', blockers: 'Waiting for final UX copy', submittedAt: '2026-03-10' },
  { employee: 'Tran Thi B', blockers: '', submittedAt: '2026-03-10' },
  { employee: 'Le Hong Duc', blockers: 'Need API response schema confirmation', submittedAt: '2026-03-10' },
];

const statusOptions: TaskStatus[] = ['Todo', 'In Progress', 'Review', 'Done'];

export function EmployeeTasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const insights = useMemo(() => buildExecutionInsights(tasks, reportSignals), [tasks]);

  const updateTaskStatus = (taskId: string, status: TaskStatus) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, status } : task)));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Project Progress Feed</p>
          <p className="text-3xl font-semibold text-gray-900">{insights.projectProgress}%</p>
          <p className="text-xs text-gray-500 mt-1">Auto-calculated from task status updates</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Delivery Efficiency (BSC Internal Process)</p>
          <p className="text-3xl font-semibold text-gray-900">{insights.deliveryEfficiency}%</p>
          <p className="text-xs text-gray-500 mt-1">Based on Done tasks vs total assigned tasks</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Operational Risk Signals</p>
          <p className="text-3xl font-semibold text-gray-900">{insights.blockedReportsCount}</p>
          <p className="text-xs text-gray-500 mt-1">Blockers detected from daily reports</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">My Tasks</h2>
            <p className="text-sm text-gray-600">Update task status to feed manager insights automatically</p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500">
            <ListChecks className="w-4 h-4" />
            Execution data source
          </div>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="rounded-lg border border-gray-200 p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{task.id}</p>
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1"><FolderKanban className="w-4 h-4" /> {task.projectName}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(task.deadline).toLocaleDateString()}</span>
                    <span>{task.estimatedHours}h</span>
                  </div>
                </div>
                <div className="w-full md:w-52">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Task status</label>
                  <select
                    value={task.status}
                    onChange={(e) => updateTaskStatus(task.id, e.target.value as TaskStatus)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
