import { useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/dashboard/DataTable';
import { Modal } from '@/components/dashboard/Modal';
import { PageHeader } from '@/components/dashboard/PageHeader';

type Department = { id: string; name: string; lead: string };

export function Departments() {
  const [items, setItems] = useState<Department[]>([
    { id: 'DEP-01', name: 'Engineering', lead: 'Le Hong Duc' },
    { id: 'DEP-02', name: 'Product', lead: 'Nguyen Van A' },
  ]);
  const [editing, setEditing] = useState<Department | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', lead: '' });

  const onCreate = () => {
    setEditing(null);
    setForm({ name: '', lead: '' });
    setOpen(true);
  };

  const onEdit = (item: Department) => {
    setEditing(item);
    setForm({ name: item.name, lead: item.lead });
    setOpen(true);
  };

  const onSave = () => {
    if (!form.name.trim()) return;
    if (editing) {
      setItems((prev) => prev.map((item) => (item.id === editing.id ? { ...item, ...form } : item)));
    } else {
      setItems((prev) => [...prev, { id: `DEP-${String(prev.length + 1).padStart(2, '0')}`, ...form }]);
    }
    setOpen(false);
  };

  const onDelete = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Teams / Departments"
        description="Create, edit, and delete organization units used across users and employees."
        action={<button onClick={onCreate} className="px-4 py-2.5 bg-cyan-500 text-white rounded-lg inline-flex items-center gap-2"><Plus className="w-4 h-4" /> New Department</button>}
      />

      <DataTable headers={['Department ID', 'Name', 'Lead', 'Actions']}>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="px-4 py-3 text-gray-700">{item.id}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
            <td className="px-4 py-3 text-gray-700">{item.lead}</td>
            <td className="px-4 py-3 space-x-3">
              <button onClick={() => onEdit(item)} className="text-cyan-700 hover:underline">Edit</button>
              <button onClick={() => onDelete(item.id)} className="text-rose-600 hover:underline">Delete</button>
            </td>
          </tr>
        ))}
      </DataTable>

      <Modal open={open} title={editing ? 'Edit Department' : 'Create Department'} onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department lead</label>
            <input value={form.lead} onChange={(e) => setForm({ ...form, lead: e.target.value })} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-4 py-2.5 border border-gray-300 rounded-lg">Cancel</button>
            <button onClick={onSave} className="px-4 py-2.5 bg-cyan-500 text-white rounded-lg">Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
