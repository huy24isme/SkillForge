import { useState } from 'react';
import { Plus, RotateCcw } from 'lucide-react';
import { DataTable } from '@/components/dashboard/DataTable';
import { Modal } from '@/components/dashboard/Modal';
import { PageHeader } from '@/components/dashboard/PageHeader';

type UserRow = { id: string; username: string; email: string; role: 'admin' | 'pm' | 'employee' };

export function Users() {
  const [rows, setRows] = useState<UserRow[]>([
    { id: 'USR-01', username: 'admin01', email: 'admin@skillforge.ai', role: 'admin' },
    { id: 'USR-02', username: 'pm01', email: 'pm@skillforge.ai', role: 'pm' },
    { id: 'USR-03', username: 'employee01', email: 'employee@skillforge.ai', role: 'employee' },
  ]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ username: '', email: '', role: 'employee' as UserRow['role'] });

  const createUser = () => {
    setRows((prev) => [...prev, { id: `USR-${String(prev.length + 1).padStart(2, '0')}`, ...form }]);
    setOpen(false);
    setForm({ username: '', email: '', role: 'employee' });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        description="Create user accounts, assign roles, and perform password reset actions for demo." 
        action={<button onClick={() => setOpen(true)} className="px-4 py-2.5 bg-cyan-500 text-white rounded-lg inline-flex items-center gap-2"><Plus className="w-4 h-4" /> Create User</button>}
      />

      <DataTable headers={['User ID', 'Username', 'Email', 'Role', 'Actions']}>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="px-4 py-3 text-gray-700">{row.id}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{row.username}</td>
            <td className="px-4 py-3 text-gray-700">{row.email}</td>
            <td className="px-4 py-3 text-gray-700 uppercase">{row.role}</td>
            <td className="px-4 py-3 space-x-3">
              <button className="text-cyan-700 hover:underline">Assign Role</button>
              <button className="text-amber-700 hover:underline inline-flex items-center gap-1"><RotateCcw className="w-3.5 h-3.5" /> Reset Password</button>
            </td>
          </tr>
        ))}
      </DataTable>

      <Modal open={open} title="Create User Account" onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} placeholder="Username" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value as UserRow['role'] })} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg">
            <option value="employee">Employee</option>
            <option value="pm">PM</option>
            <option value="admin">Admin</option>
          </select>
          <div className="flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-4 py-2.5 border border-gray-300 rounded-lg">Cancel</button>
            <button onClick={createUser} className="px-4 py-2.5 bg-cyan-500 text-white rounded-lg">Create</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
