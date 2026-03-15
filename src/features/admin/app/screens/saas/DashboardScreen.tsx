import { useMemo, useState } from 'react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { kpiSummary, monthlyFinance, monthlyUsers, payments, planRevenue, subscriptions, systemLogs, topCustomers, featureUsage } from '@/features/admin/app/data/mockAnalytics';
import { ChartPanel } from '@/features/admin/app/components/analytics/ChartPanel';
import { DataTableCard } from '@/features/admin/app/components/analytics/DataTableCard';
import { KpiCard } from '@/features/admin/app/components/analytics/KpiCard';
import { LineMetricChart } from '@/features/admin/app/components/analytics/LineMetricChart';
import { PieMetricChart } from '@/features/admin/app/components/analytics/PieMetricChart';
import { BarMetricChart } from '@/features/admin/app/components/analytics/BarMetricChart';
import { TimeRangeFilter } from '@/features/admin/app/components/analytics/TimeRangeFilter';
import type { PaymentRow, SubscriptionRow, SystemLogRow, TimeRange, TopCustomerRow } from '@/features/admin/app/types/analytics';

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function DashboardScreen() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  const [planFilter, setPlanFilter] = useState<'All' | SubscriptionRow['plan']>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | SubscriptionRow['status']>('All');

  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter((row) => (planFilter === 'All' || row.plan === planFilter) && (statusFilter === 'All' || row.status === statusFilter));
  }, [planFilter, statusFilter]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard Overview"
        description="Executive analytics dashboard for revenue, profit, user growth, subscription activity, and platform health."
        className="from-cyan-50 via-sky-50 to-indigo-50"
        action={<TimeRangeFilter value={timeRange} onChange={setTimeRange} />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <KpiCard label="Total Users" value={kpiSummary.totalUsers.toLocaleString()} delta="+8.2% vs previous period" />
        <KpiCard label="Active Users" value={kpiSummary.activeUsers.toLocaleString()} delta="+5.4% engagement" />
        <KpiCard label="Paying Users" value={kpiSummary.payingUsers.toLocaleString()} delta="+6.9% subscriptions" />
        <KpiCard label="MRR" value={money.format(kpiSummary.mrr)} delta="+7.1% month-over-month" />
        <KpiCard label="Total Revenue" value={money.format(kpiSummary.totalRevenue)} delta="+14.3% annual growth" />
        <KpiCard label="Total Profit" value={money.format(kpiSummary.totalProfit)} delta="+11.8% operating margin" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <ChartPanel title="Revenue by Month" subtitle="Recurring + add-on revenue trend">
          <LineMetricChart data={monthlyFinance} xKey="month" dataKey="revenue" stroke="#0284c7" />
        </ChartPanel>
        <ChartPanel title="Profit by Month" subtitle="Net operational profit trend">
          <LineMetricChart data={monthlyFinance} xKey="month" dataKey="profit" stroke="#16a34a" />
        </ChartPanel>
        <ChartPanel title="Revenue by Subscription Plan" subtitle="Plan contribution share">
          <PieMetricChart data={planRevenue} nameKey="plan" valueKey="revenue" />
        </ChartPanel>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <ChartPanel title="New Users per Month" subtitle="Acquisition volume by month">
          <BarMetricChart data={monthlyUsers} xKey="month" barKey="newUsers" fill="#0891b2" />
        </ChartPanel>
        <ChartPanel title="Daily Active Users" subtitle="Monthly DAU trend">
          <LineMetricChart data={monthlyUsers} xKey="month" dataKey="dailyActiveUsers" stroke="#4f46e5" />
        </ChartPanel>
        <ChartPanel title="Conversion Rate (Trial → Paying)" subtitle="% of trial users converting to paid plans">
          <LineMetricChart data={monthlyUsers} xKey="month" dataKey="conversionRate" stroke="#f59e0b" />
        </ChartPanel>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <DataTableCard<SubscriptionRow>
          title="Subscription Management"
          subtitle="User | Plan | Price | Start Date | Status"
          columns={[
            { key: 'user', header: 'User', render: (row) => <span className="font-medium text-slate-900">{row.user}</span> },
            { key: 'plan', header: 'Plan', render: (row) => row.plan },
            { key: 'price', header: 'Price', render: (row) => money.format(row.price) },
            { key: 'startDate', header: 'Start Date', render: (row) => row.startDate },
            {
              key: 'status',
              header: 'Status',
              render: (row) => (
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 border border-slate-200">{row.status}</span>
              ),
            },
          ]}
          rows={filteredSubscriptions}
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Filters</h3>
          <p className="text-sm text-slate-500 mt-1">Filter subscriptions by plan and status</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <select value={planFilter} onChange={(e) => setPlanFilter(e.target.value as 'All' | SubscriptionRow['plan'])} className="px-3 py-2.5 rounded-lg border border-slate-300 bg-white">
              <option value="All">All plans</option>
              <option value="Free">Free</option>
              <option value="Starter">Starter</option>
              <option value="Pro">Pro</option>
              <option value="Enterprise">Enterprise</option>
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as 'All' | SubscriptionRow['status'])} className="px-3 py-2.5 rounded-lg border border-slate-300 bg-white">
              <option value="All">All status</option>
              <option value="Active">Active</option>
              <option value="Trial">Trial</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Past Due">Past Due</option>
            </select>
          </div>

          <div className="mt-5 border-t border-slate-200 pt-4">
            <h4 className="text-sm font-semibold text-slate-900 mb-2">Top Customers</h4>
            <div className="space-y-2">
              {topCustomers.slice(0, 4).map((customer) => (
                <div key={customer.id} className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">{customer.customer}</span>
                  <span className="font-medium text-slate-900">{money.format(customer.revenue)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <DataTableCard<PaymentRow>
          title="Payment History"
          subtitle="User | Amount | Payment Date | Status"
          columns={[
            { key: 'user', header: 'User', render: (row) => <span className="font-medium text-slate-900">{row.user}</span> },
            { key: 'amount', header: 'Amount', render: (row) => money.format(row.amount) },
            { key: 'paymentDate', header: 'Payment Date', render: (row) => row.paymentDate },
            {
              key: 'status',
              header: 'Status',
              render: (row) => (
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 border border-slate-200">{row.status}</span>
              ),
            },
          ]}
          rows={payments}
        />

        <DataTableCard<TopCustomerRow>
          title="Top Customers"
          subtitle="Highest revenue generating customers"
          columns={[
            { key: 'customer', header: 'Customer', render: (row) => <span className="font-medium text-slate-900">{row.customer}</span> },
            { key: 'plan', header: 'Plan', render: (row) => row.plan },
            { key: 'projects', header: 'Projects', render: (row) => row.projects },
            { key: 'revenue', header: 'Revenue', render: (row) => money.format(row.revenue) },
          ]}
          rows={topCustomers}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <ChartPanel title="Feature Usage Analytics" subtitle="Most-used product actions">
          <BarMetricChart data={featureUsage} xKey="feature" barKey="usage" fill="#6366f1" />
        </ChartPanel>

        <DataTableCard<SystemLogRow>
          title="System Activity Logs"
          subtitle="Recent events across the platform"
          columns={[
            { key: 'event', header: 'Event', render: (row) => row.event },
            { key: 'actor', header: 'Actor', render: (row) => row.actor },
            { key: 'timestamp', header: 'Timestamp', render: (row) => row.timestamp },
          ]}
          rows={systemLogs}
        />
      </div>
    </div>
  );
}
