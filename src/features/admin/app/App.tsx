import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '@/features/admin/app/components/AdminLayout';
import { DashboardScreen } from '@/features/admin/app/screens/saas/DashboardScreen';
import { UsersScreen } from '@/features/admin/app/screens/saas/UsersScreen';
import { SubscriptionsScreen } from '@/features/admin/app/screens/saas/SubscriptionsScreen';
import { RevenueScreen } from '@/features/admin/app/screens/saas/RevenueScreen';
import { PaymentsScreen } from '@/features/admin/app/screens/saas/PaymentsScreen';
import { AnalyticsScreen } from '@/features/admin/app/screens/saas/AnalyticsScreen';
import { ReportsScreen } from '@/features/admin/app/screens/saas/ReportsScreen';
import { SystemLogsScreen } from '@/features/admin/app/screens/saas/SystemLogsScreen';
import { SettingsScreen } from '@/features/admin/app/screens/saas/SettingsScreen';

export default function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<DashboardScreen />} />
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="users" element={<UsersScreen />} />
        <Route path="subscriptions" element={<SubscriptionsScreen />} />
        <Route path="revenue" element={<RevenueScreen />} />
        <Route path="payments" element={<PaymentsScreen />} />
        <Route path="analytics" element={<AnalyticsScreen />} />
        <Route path="reports" element={<ReportsScreen />} />
        <Route path="system-logs" element={<SystemLogsScreen />} />
        <Route path="settings" element={<SettingsScreen />} />
      </Routes>
    </AdminLayout>
  );
}
