import { useState } from 'react';
import { Building2, Plus } from 'lucide-react';

type Customer = {
  id: string;
  name: string;
  industry: string;
  accountOwner: string;
  activeProjects: number;
};

const initialCustomers: Customer[] = [
  { id: 'CUS-01', name: 'SME Group', industry: 'Retail', accountOwner: 'Nguyen Van A', activeProjects: 2 },
  { id: 'CUS-02', name: 'Prime Bank', industry: 'Finance', accountOwner: 'Le Hong Duc', activeProjects: 1 },
];

export function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);

  const addCustomer = () => {
    const nextId = `CUS-0${customers.length + 1}`;
    setCustomers((prev) => [
      ...prev,
      {
        id: nextId,
        name: `New Customer ${customers.length + 1}`,
        industry: 'TBD',
        accountOwner: 'Unassigned',
        activeProjects: 0,
      },
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Customers</h2>
          <p className="text-sm text-gray-600 mt-1">Manage customer data for BSC Customer perspective tracking.</p>
        </div>
        <button
          onClick={addCustomer}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#3AE7E1] text-white rounded-lg hover:bg-[#3AE7E1]/90"
        >
          <Plus className="w-4 h-4" /> Add customer
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-3">Customer</th>
              <th className="text-left p-3">Industry</th>
              <th className="text-left p-3">Account owner</th>
              <th className="text-left p-3">Active projects</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-100">
                <td className="p-3 font-medium text-gray-900 inline-flex items-center gap-2"><Building2 className="w-4 h-4 text-[#3AE7E1]" />{customer.name}</td>
                <td className="p-3 text-gray-700">{customer.industry}</td>
                <td className="p-3 text-gray-700">{customer.accountOwner}</td>
                <td className="p-3 text-gray-700">{customer.activeProjects}</td>
                <td className="p-3">
                  <button className="text-[#0B1C2D] hover:underline mr-3">Edit</button>
                  <button className="text-[#E74C3C] hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
