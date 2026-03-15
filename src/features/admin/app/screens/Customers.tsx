import { useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/dashboard/DataTable';
import { Modal } from '@/components/dashboard/Modal';
import { PageHeader } from '@/components/dashboard/PageHeader';

type Customer = {
  id: string;
  customerName: string;
  contactEmail: string;
  company: string;
  notes: string;
};

export function Customers() {
  const [rows, setRows] = useState<Customer[]>([
    { id: 'CUS-01', customerName: 'SME Group', contactEmail: 'contact@sme.vn', company: 'SME Group', notes: 'High-growth segment' },
    { id: 'CUS-02', customerName: 'Prime Bank', contactEmail: 'ops@primebank.vn', company: 'Prime Bank', notes: 'Risk-sensitive account' },
  ]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Customer | null>(null);
  const [form, setForm] = useState({ customerName: '', contactEmail: '', company: '', notes: '' });

  const save = () => {
    if (editing) {
      setRows((prev) => prev.map((row) => (row.id === editing.id ? { ...row, ...form } : row)));
    } else {
      setRows((prev) => [...prev, { id: `CUS-${String(prev.length + 1).padStart(2, '0')}`, ...form }]);
    }
    setOpen(false);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Customers"
        description="Admin-level customer master data management for system setup and demos."
        action={<button onClick={() => { setEditing(null); setForm({ customerName: '', contactEmail: '', company: '', notes: '' }); setOpen(true); }} className="px-4 py-2.5 bg-cyan-500 text-white rounded-lg inline-flex items-center gap-2"><Plus className="w-4 h-4" /> Add Customer</button>}
      />

      <DataTable headers={['ID', 'Customer name', 'Contact email', 'Company', 'Notes', 'Actions']}>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="px-4 py-3 text-gray-700">{row.id}</td>
            <td className="px-4 py-3 font-medium text-gray-900">{row.customerName}</td>
            <td className="px-4 py-3 text-gray-700">{row.contactEmail}</td>
            <td className="px-4 py-3 text-gray-700">{row.company}</td>
            <td className="px-4 py-3 text-gray-700">{row.notes}</td>
            <td className="px-4 py-3 space-x-3">
              <button onClick={() => { setEditing(row); setForm({ customerName: row.customerName, contactEmail: row.contactEmail, company: row.company, notes: row.notes }); setOpen(true); }} className="text-cyan-700 hover:underline">Edit</button>
              <button onClick={() => setRows((prev) => prev.filter((x) => x.id !== row.id))} className="text-rose-600 hover:underline">Delete</button>
            </td>
          </tr>
        ))}
      </DataTable>

      <Modal open={open} title={editing ? 'Edit Customer' : 'Add Customer'} onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <input value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} placeholder="Customer name" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          <input value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} placeholder="Contact email" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Notes" rows={3} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          <div className="flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-4 py-2.5 border border-gray-300 rounded-lg">Cancel</button>
            <button onClick={save} className="px-4 py-2.5 bg-cyan-500 text-white rounded-lg">Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
