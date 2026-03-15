import { useState } from 'react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { TimeRangeFilter } from '@/features/admin/app/components/analytics/TimeRangeFilter';
import { featureUsage, monthlyUsers } from '@/features/admin/app/data/mockAnalytics';
import type { TimeRange } from '@/features/admin/app/types/analytics';
import { ChartPanel } from '@/features/admin/app/components/analytics/ChartPanel';
import { BarMetricChart } from '@/features/admin/app/components/analytics/BarMetricChart';
import { LineMetricChart } from '@/features/admin/app/components/analytics/LineMetricChart';

export function AnalyticsScreen() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Product usage analytics and behavioral trends across the platform."
        action={<TimeRangeFilter value={timeRange} onChange={setTimeRange} />}
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <ChartPanel title="Feature Usage" subtitle="Most used features">
          <BarMetricChart data={featureUsage} xKey="feature" barKey="usage" fill="#6366f1" />
        </ChartPanel>
        <ChartPanel title="Conversion Rate" subtitle="Trial to paid conversion (%)">
          <LineMetricChart data={monthlyUsers} xKey="month" dataKey="conversionRate" stroke="#f59e0b" />
        </ChartPanel>
      </div>
    </div>
  );
}
