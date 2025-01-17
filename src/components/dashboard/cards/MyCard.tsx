import { cn } from '@/lib/utils';
import CardChip from '@/assets/ChipCard.png';
import MaestroCard from '@/assets/MaestroCardWhite.png';
import { Card } from '@/types/api';

export function MyCard({ number, expiry, holderName }: Card) {
  return (
    <div
      className={cn(
        'relative rounded-[25px] text-white shadow-lg',
        'cursor-pointer overflow-hidden transition-transform hover:scale-[1.02]',
        'bg-gradient-to-r from-[#5B5A6F] to-[#000000]',
      )}
      role="region"
      aria-labelledby="credit-card-info"
    >
      <div className="pl-5 pr-5 pt-6 pb-6 sm:pr-6 sm:pl-6 sm:pb-9 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] sm:text-xs leading-[14.4px] text-white">
              Balance
            </p>
            <p
              id="credit-card-balance"
              className="font-base sm:font-semibold text-[17px] sm:text-xl leading-6"
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
            <p className="text-[11px] sm:text-xs leading-[14.4px] opacity-70">
              CARD HOLDER
            </p>
            <p
              id="card-holder-name"
              className="font-semibold text-[13px] sm:text-[15px] leading-[18px] mt-[3px]"
            >
              {holderName}
            </p>
          </div>
          <div>
            <p className="text-[11px] sm:text-xs leading-[14.4px] opacity-70">
              VALID THRU
            </p>
            <p
              id="card-expiry"
              className="font-semibold text-[13px] sm:text-[15px] leading-[18px] mt-[3px]"
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
          'bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0)]',
        )}
      >
        <p
          className="text-base sm:text-lg font-medium leading-[26.4px]"
          aria-labelledby="credit-card-number"
        >
          {number}
        </p>
        <img src={MaestroCard} alt="Master card logo" aria-hidden="true" />
      </div>
    </div>
  );
}
