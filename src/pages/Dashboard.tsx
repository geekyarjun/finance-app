import { Suspense, lazy } from 'react';

const DashboardCards = lazy(
  () => import('@/components/dashboard/cards/DashboardCards'),
);
const RecentTransactions = lazy(
  () => import('@/components/dashboard/transactions/RecentTransactions'),
);
const WeeklyActivity = lazy(
  () => import('@/components/dashboard/WeeklyActivity/WeeklyActivity'),
);
const ExpenseStatistics = lazy(
  () => import('@/components/dashboard/ExpenseStatistics/ExpenseStatistics'),
);
const QuickTransfer = lazy(
  () => import('@/components/dashboard/QuickTransfer/QuickTransfer'),
);

const BalanceHistory = lazy(
  () => import('@/components/dashboard/BalanceHistory/BalanceHistory'),
);

export default function Dashboard() {
  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Cards + Recent transactions */}
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardCards />
          </Suspense>
        </div>
        <div>
          <RecentTransactions />
        </div>
      </div>

      {/* Weekly Activity + Expense Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyActivity />
        </div>
        <div>
          <ExpenseStatistics />
        </div>
      </div>

      {/* Quick Transfer + Balance History */}
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        <div>
          <QuickTransfer />
        </div>
        <div className="lg:col-span-2">
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
}
