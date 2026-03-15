import { useState } from 'react';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { TimeRangeFilter } from '@/features/admin/app/components/analytics/TimeRangeFilter';
import { DataTableCard } from '@/features/admin/app/components/analytics/DataTableCard';
import { payments } from '@/features/admin/app/data/mockAnalytics';
import type { PaymentRow, TimeRange } from '@/features/admin/app/types/analytics';

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function PaymentsScreen() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Payments"
        description="Track payment transactions and settlement outcomes."
        action={<TimeRangeFilter value={timeRange} onChange={setTimeRange} />}
      />
      <DataTableCard<PaymentRow>
        title="Payment History"
        subtitle="User | Amount | Payment Date | Status"
        columns={[
          { key: 'user', header: 'User', render: (row) => row.user },
          { key: 'amount', header: 'Amount', render: (row) => money.format(row.amount) },
          { key: 'paymentDate', header: 'Payment Date', render: (row) => row.paymentDate },
          { key: 'status', header: 'Status', render: (row) => row.status },
        ]}
        rows={payments}
      />
    </div>
  );
}
