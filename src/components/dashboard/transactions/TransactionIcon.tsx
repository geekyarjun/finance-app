import { Paypal, Cards, JemiWilson } from '@/components/svg';
import { cn } from '@/lib/utils';
import { TransactionCategory } from '@/types/api';

const ICON_CONFIG = {
  [TransactionCategory.PAYPAL]: {
    ICON: Paypal,
    COLOR: 'text-paypal',
    BG_COLOR: '#E7EDFF', // NEED TO FIND PROPER COLOR PALETTE NAME FOR THIS
  },
  [TransactionCategory.DEPOSIT_CARD]: {
    ICON: Cards,
    COLOR: 'text-paypal',
    BG_COLOR: 'hsl(var(--warning-03))',
  },
  [TransactionCategory.JEMI_WILSON]: {
    ICON: JemiWilson,
    COLOR: 'text-paypal',
    BG_COLOR: 'hsl(var(--success-03))',
  },
};

interface Props {
  category: keyof typeof ICON_CONFIG;
}

export const TransactionIcon = ({ category }: Props) => {
  const Config = ICON_CONFIG[category];

  return (
    <div
      aria-hidden="true"
      className={cn(
        'rounded-full p-2 size-[50px] sm:size-[55px] min-w-[50px] min-h-[50px] sm:min-w-[55px] sm:min-h-[55px]',
        'flex items-center justify-center',
      )}
      style={{ backgroundColor: Config.BG_COLOR }}
    >
      <Config.ICON className="h-[25px] sm:h-7 w-[25px] sm:w-7" />
    </div>
  );
};
