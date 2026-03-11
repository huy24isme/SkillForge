import { buildTeamWorkloads, type EmployeeTask } from '@/features/bsc/domain/execution';

const tasks: EmployeeTask[] = [
  { id: 'TASK-201', title: 'Prepare SME pricing configuration', projectName: 'SME Portal Expansion', assignee: 'Nguyen Van A', deadline: '2026-03-17', estimatedHours: 4, status: 'Todo' },
  { id: 'TASK-202', title: 'Implement transaction queue monitoring', projectName: 'Mobile Banking App', assignee: 'Le Hong Duc', deadline: '2026-03-16', estimatedHours: 7, status: 'In Progress' },
  { id: 'TASK-203', title: 'Review API error handling states', projectName: 'Mobile Banking App', assignee: 'Pham Van C', deadline: '2026-03-15', estimatedHours: 5, status: 'Review' },
  { id: 'TASK-204', title: 'Update onboarding copy', projectName: 'SME Portal Expansion', assignee: 'Tran Thi B', deadline: '2026-03-14', estimatedHours: 3, status: 'Done' },
  { id: 'TASK-205', title: 'Optimize search index mapping', projectName: 'SME Portal Expansion', assignee: 'Le Hong Duc', deadline: '2026-03-18', estimatedHours: 5, status: 'In Progress' },
];

const workloadRows = buildTeamWorkloads(tasks);

const allocation = [
  { employee: 'Nguyen Van A', projects: ['SME Portal Expansion'] },
  { employee: 'Le Hong Duc', projects: ['SME Portal Expansion', 'Mobile Banking App'] },
  { employee: 'Tran Thi B', projects: ['SME Portal Expansion'] },
  { employee: 'Pham Van C', projects: ['Mobile Banking App'] },
];

export function Team() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900">Team</h2>
        <p className="text-sm text-gray-600 mt-1">Monitor workload distribution and project allocation for execution balance.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Workload distribution</h3>
          <div className="space-y-3">
            {workloadRows.map((row) => (
              <div key={row.employee} className="rounded-lg border border-gray-100 p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{row.employee}</p>
                  <span className="text-sm text-gray-700">Load {row.workloadScore}</span>
                </div>
                <p className="text-xs text-gray-500">Assigned: {row.assignedTasks} | In progress/review: {row.inProgressTasks} | Done: {row.doneTasks}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project allocation</h3>
          <div className="space-y-3">
            {allocation.map((row) => (
              <div key={row.employee} className="rounded-lg border border-gray-100 p-3">
                <p className="font-medium text-gray-900 mb-2">{row.employee}</p>
                <div className="flex flex-wrap gap-2">
                  {row.projects.map((project) => (
                    <span key={project} className="px-2.5 py-1 rounded-full bg-[#0B1C2D]/5 text-[#0B1C2D] text-xs">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
