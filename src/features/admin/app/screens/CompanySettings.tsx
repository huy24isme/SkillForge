import { useState } from 'react';
import { PageHeader } from '@/components/dashboard/PageHeader';

export function CompanySettings() {
  const [form, setForm] = useState({
    companyName: 'SkillForge Inc.',
    supportEmail: 'support@skillforge.ai',
    phone: '+84 999 123 456',
    address: 'Ho Chi Minh City, Vietnam',
    logoUrl: '',
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Company Settings" description="Configure company information and brand assets for the entire platform." />

      <div className="bg-white border border-gray-200 rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
            <input value={form.supportEmail} onChange={(e) => setForm({ ...form, supportEmail: e.target.value })} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg" />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Company Logo</label>
          <input type="file" accept="image/*" onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            setForm({ ...form, logoUrl: URL.createObjectURL(file) });
          }} className="w-full text-sm" />
          <div className="h-44 border border-dashed border-gray-300 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
            {form.logoUrl ? <img src={form.logoUrl} alt="Company logo" className="max-h-full" /> : <span className="text-sm text-gray-500">Logo preview</span>}
          </div>
          <button className="w-full px-4 py-2.5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">Save Settings</button>
        </div>
      </div>
    </div>
  );
}
