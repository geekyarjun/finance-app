import { cn } from '@/lib/utils';
import CardChip from '@/assets/ChipCard.png';
import MaestroCardGray from '@/assets/MaestroCardGray.png';

interface MyCardProps {
  type: 'visa' | 'mastercard';
  number: string;
  expiry: string;
  holderName: string;
}

export function OtherCard({ number, expiry, holderName }: MyCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-[25px]',
        'overflow-hidden transition-transform hover:scale-[1.02]',
        'bg-white border border-secondary-100',
      )}
      role="region"
      aria-labelledby="credit-card-info"
    >
      <div className="p-6 pb-9 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs leading-[14.4px] text-secondary">Balance</p>
            <p
              id="credit-card-balance"
              className="font-semibold text-xl leading-6 text-neutral"
            >
              $5,756
            </p>
          </div>
          <img
            src={CardChip}
            alt="card chip"
            aria-hidden="true"
            className="size-[35px]"
          />
        </div>

        <div className="flex items-center">
          <div className="min-w-[66%]">
            <p className="text-xs leading-[14.4px] text-secondary">
              CARD HOLDER
            </p>
            <p
              id="card-holder-name"
              className="font-semibold text-[15px] leading-[18px] mt-[3px] text-neutral"
            >
              {holderName}
            </p>
          </div>
          <div>
            <p className="text-xs leading-[14.4px] text-secondary">
              VALID THRU
            </p>
            <p
              id="card-expiry"
              className="font-semibold text-[15px] leading-[18px] mt-[3px] text-neutral"
            >
              {expiry}
            </p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'px-6 py-5',
          'flex justify-between items-center',
          'border-t border-t-secondary-100',
        )}
      >
        <p
          aria-labelledby="credit-card-number"
          className="text-lg font-medium leading-[26.4px] text-neutral"
        >
          {number}
        </p>
        <img src={MaestroCardGray} alt="Master card logo" aria-hidden="true" />
      </div>
    </div>
  );
}
