import { useState } from 'react';
import { FolderKanban, Plus } from 'lucide-react';

type ProjectStatus = 'Planned' | 'Active' | 'At Risk' | 'Completed';

type ProjectItem = {
  id: string;
  name: string;
  customer: string;
  teamMembers: string[];
  revenue: number;
  timeline: string;
  status: ProjectStatus;
};

const initialProjects: ProjectItem[] = [
  {
    id: 'PRJ-01',
    name: 'SME Portal Expansion',
    customer: 'SME Group',
    teamMembers: ['Nguyen Van A', 'Le Hong Duc', 'Tran Thi B'],
    revenue: 125000,
    timeline: '2026-03-01 to 2026-05-30',
    status: 'Active',
  },
  {
    id: 'PRJ-02',
    name: 'Mobile Banking App',
    customer: 'Prime Bank',
    teamMembers: ['Pham Van C', 'Le Hong Duc'],
    revenue: 98000,
    timeline: '2026-02-15 to 2026-06-15',
    status: 'At Risk',
  },
];

export function Projects() {
  const [projects, setProjects] = useState(initialProjects);

  const removeProject = (projectId: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
          <p className="text-sm text-gray-600 mt-1">Managers assign teams manually based on project scope and structure.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#3AE7E1] text-white rounded-lg hover:bg-[#3AE7E1]/90">
          <Plus className="w-4 h-4" /> Create project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{project.id}</p>
                <h3 className="text-lg font-semibold text-gray-900 inline-flex items-center gap-2">
                  <FolderKanban className="w-5 h-5 text-[#3AE7E1]" />
                  {project.name}
                </h3>
                <p className="text-sm text-gray-700">Customer: {project.customer}</p>
                <p className="text-sm text-gray-700">Timeline: {project.timeline}</p>
                <p className="text-sm text-gray-700">Revenue: ${project.revenue.toLocaleString()}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.teamMembers.map((member) => (
                    <span key={member} className="px-2.5 py-1 rounded-full bg-gray-100 text-xs text-gray-700">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start xl:items-end gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#0B1C2D]/5 text-[#0B1C2D] text-xs font-medium">
                  {project.status}
                </span>
                <button className="text-sm text-[#0B1C2D] hover:underline">Edit project</button>
                <button className="text-sm text-[#0B1C2D] hover:underline">Assign team members</button>
                <button onClick={() => removeProject(project.id)} className="text-sm text-[#E74C3C] hover:underline">Delete project</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
