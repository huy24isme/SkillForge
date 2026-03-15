import { useState } from 'react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { TimeRangeFilter } from '@/features/admin/app/components/analytics/TimeRangeFilter';
import { ChartPanel } from '@/features/admin/app/components/analytics/ChartPanel';
import { monthlyUsers } from '@/features/admin/app/data/mockAnalytics';
import { LineMetricChart } from '@/features/admin/app/components/analytics/LineMetricChart';
import { BarMetricChart } from '@/features/admin/app/components/analytics/BarMetricChart';
import type { TimeRange } from '@/features/admin/app/types/analytics';

export function UsersScreen() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        description="Track user growth, engagement, and conversion behavior."
        action={<TimeRangeFilter value={timeRange} onChange={setTimeRange} />}
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <ChartPanel title="New Users per Month" subtitle="Acquisition velocity">
          <BarMetricChart data={monthlyUsers} xKey="month" barKey="newUsers" fill="#0ea5e9" />
        </ChartPanel>
        <ChartPanel title="Daily Active Users" subtitle="Engagement trend">
          <LineMetricChart data={monthlyUsers} xKey="month" dataKey="dailyActiveUsers" stroke="#16a34a" />
        </ChartPanel>
      </div>
      <ChartPanel title="Conversion Rate" subtitle="Trial users converted to paid users (%)">
        <LineMetricChart data={monthlyUsers} xKey="month" dataKey="conversionRate" stroke="#f59e0b" />
      </ChartPanel>
    </div>
  );
}
