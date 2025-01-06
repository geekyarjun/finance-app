import { cn } from '@/lib/utils';
import { ZERO } from '@/lib/constants/constants';
import { TransactionCategory } from '@/types/api';

import { TransactionIcon } from './TransactionIcon';

const transactions = [
  {
    id: 1,
    description: 'Deposit from my Card',
    amount: -79.99,
    date: '2024-03-20',
    category: TransactionCategory.DEPOSIT_CARD,
  },
  {
    id: 2,
    description: 'Deposit Paypal',
    amount: 3500.0,
    date: '2024-03-19',
    category: TransactionCategory.PAYPAL,
  },
  {
    id: 3,
    description: 'Jemi Wilson',
    amount: -5.75,
    date: '2024-03-19',
    category: TransactionCategory.JEMI_WILSON,
  },
  {
    id: 4,
    description: 'Deposit from my Card',
    amount: -79.99,
    date: '2024-03-20',
    category: TransactionCategory.DEPOSIT_CARD,
  },
  {
    id: 5,
    description: 'Deposit Paypal',
    amount: 3500.0,
    date: '2024-03-19',
    category: TransactionCategory.PAYPAL,
  },
  {
    id: 6,
    description: 'Jemi Wilson',
    amount: -5.75,
    date: '2024-03-19',
    category: TransactionCategory.JEMI_WILSON,
  },
];

export default function RecentTransactions() {
  return (
    <div>
      <div className="flex items-center justify-between pb-3 sm:pb-5">
        <div>
          <h2
            className="max-xs:text-lg heading-md"
            id="recent-transactions-title"
          >
            Recent Transactions
          </h2>
        </div>
      </div>
      <div
        className="rounded-[25px] bg-card p-[25px] overflow-auto h-[246px]"
        aria-labelledby="recent-transactions-title"
        aria-live="polite"
      >
        <ul className="space-y-[10px]">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <TransactionIcon category={transaction.category} />
                <div>
                  <p
                    className="text-sm sm:text-base font-medium leading-[19.36px] text-primary truncate"
                    aria-labelledby={`transaction-description-${transaction.id}`}
                  >
                    {transaction.description}
                  </p>
                  <p
                    className="text-xs sm:text-sm text-secondary mt-[7px]"
                    id={`transaction-date-${transaction.id}`}
                  >
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={cn(
                    'text-sm sm:text-base font-medium leading-[19.36px]',
                    transaction.amount > ZERO ? 'text-success' : 'text-danger',
                  )}
                  id={`transaction-amount-${transaction.id}`}
                  aria-labelledby={`transaction-description-${transaction.id} transaction-amount-${transaction.id}`}
                >
                  {transaction.amount > ZERO ? '+' : ''}$
                  {Math.abs(transaction.amount).toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <ScrollArea className="whitespace-nowrap rounded-md">
        <div
          className="rounded-[25px] bg-card p-[25px]"
          aria-labelledby="recent-transactions-title"
          aria-live="polite"
        >
          <ul className="space-y-[10px]">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex items-center space-x-4">
                  <TransactionIcon category={transaction.category} />
                  <div>
                    <p
                      className="text-sm sm:text-base font-medium leading-[19.36px] text-primary"
                      aria-labelledby={`transaction-description-${transaction.id}`}
                    >
                      {transaction.description}
                    </p>
                    <p
                      className="text-xs sm:text-sm text-secondary mt-[7px]"
                      id={`transaction-date-${transaction.id}`}
                    >
                      {new Date(transaction.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={cn(
                      'text-sm sm:text-base font-medium leading-[19.36px]',
                      transaction.amount > ZERO
                        ? 'text-success'
                        : 'text-danger',
                    )}
                    id={`transaction-amount-${transaction.id}`}
                    aria-labelledby={`transaction-description-${transaction.id} transaction-amount-${transaction.id}`}
                  >
                    {transaction.amount > ZERO ? '+' : ''}$
                    {Math.abs(transaction.amount).toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea> */}
    </div>
  );
}
