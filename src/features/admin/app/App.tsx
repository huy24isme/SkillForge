import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '@/features/admin/app/components/AdminLayout';
import { CompanySettings } from '@/features/admin/app/screens/CompanySettings';
import { Departments } from '@/features/admin/app/screens/Departments';
import { Employees } from '@/features/admin/app/screens/Employees';
import { Users } from '@/features/admin/app/screens/Users';
import { Customers } from '@/features/admin/app/screens/Customers';

export default function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<CompanySettings />} />
        <Route path="company-settings" element={<CompanySettings />} />
        <Route path="departments" element={<Departments />} />
        <Route path="employees" element={<Employees />} />
        <Route path="users" element={<Users />} />
        <Route path="customers" element={<Customers />} />
      </Routes>
    </AdminLayout>
  );
}
