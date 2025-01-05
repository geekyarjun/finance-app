import { Paypal, Cards, JemiWilson } from '@/components/svg';
import { cn } from '@/lib/utils';

const ICON_CONFIG = {
  PAYPAL: {
    ICON: Paypal,
    COLOR: 'text-paypal',
    BG_COLOR: '#E7EDFF', // NEED TO FIND PROPER COLOR PALETTE NAME FOR THIS
  },
  DEPOSIT_CARD: {
    ICON: Cards,
    COLOR: 'text-paypal',
    BG_COLOR: 'hsl(var(--warning-03))',
  },
  JEMI_WILSON: {
    ICON: JemiWilson,
    COLOR: 'text-paypal',
    BG_COLOR: 'hsl(var(--success-03))',
  },
};

export const TransactionIcon = ({ category }) => {
  const Config = ICON_CONFIG[category];

  return (
    <div
      aria-hidden="true"
      className={cn(
        'rounded-full p-2 size-[55px]',
        'flex items-center justify-center',
      )}
      style={{ backgroundColor: Config.BG_COLOR }}
    >
      <Config.ICON className="h-7 w-7" />
    </div>
  );
};
