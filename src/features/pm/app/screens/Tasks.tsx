import { useMemo, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { calculateDeliveryEfficiency, calculateProjectProgress, type EmployeeTask, type TaskStatus } from '@/features/bsc/domain/execution';

const seededTasks: EmployeeTask[] = [
  { id: 'TASK-201', title: 'Prepare SME pricing configuration', projectName: 'SME Portal Expansion', assignee: 'Nguyen Van A', deadline: '2026-03-17', estimatedHours: 4, status: 'Todo' },
  { id: 'TASK-202', title: 'Implement transaction queue monitoring', projectName: 'Mobile Banking App', assignee: 'Le Hong Duc', deadline: '2026-03-16', estimatedHours: 7, status: 'In Progress' },
  { id: 'TASK-203', title: 'Review API error handling states', projectName: 'Mobile Banking App', assignee: 'Pham Van C', deadline: '2026-03-15', estimatedHours: 5, status: 'Review' },
  { id: 'TASK-204', title: 'Update onboarding copy', projectName: 'SME Portal Expansion', assignee: 'Tran Thi B', deadline: '2026-03-14', estimatedHours: 3, status: 'Done' },
];

const statuses: TaskStatus[] = ['Todo', 'In Progress', 'Review', 'Done'];

export function Tasks() {
  const [tasks, setTasks] = useState(seededTasks);

  const metrics = useMemo(() => {
    const progress = calculateProjectProgress(tasks);
    const delivery = calculateDeliveryEfficiency(tasks);
    const statusCount = statuses.map((status) => ({
      status,
      count: tasks.filter((task) => task.status === status).length,
    }));
    return { progress, delivery, statusCount };
  }, [tasks]);

  const setStatus = (taskId: string, status: TaskStatus) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, status } : task)));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.statusCount.map((item) => (
          <div key={item.status} className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-600">{item.status}</p>
            <p className="text-2xl font-semibold text-gray-900">{item.count}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600">Project Delivery Progress</p>
          <p className="text-3xl font-semibold text-gray-900">{metrics.progress}%</p>
          <p className="text-xs text-gray-500 mt-1">Feeds manager dashboard and Internal Process metrics</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-600">Delivery Efficiency</p>
          <p className="text-3xl font-semibold text-gray-900">{metrics.delivery}%</p>
          <p className="text-xs text-gray-500 mt-1">Done tasks ratio by project scope</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Tasks</h2>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="rounded-lg border border-gray-100 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-xs text-gray-500">{task.id}</p>
                <p className="font-medium text-gray-900">{task.title}</p>
                <p className="text-sm text-gray-600">{task.projectName} | {task.assignee} | Due {new Date(task.deadline).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={task.status}
                  onChange={(e) => setStatus(task.id, e.target.value as TaskStatus)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                {task.status === 'Done' && <CheckCircle2 className="w-5 h-5 text-[#2ECC71]" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
