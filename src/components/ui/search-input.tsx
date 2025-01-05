import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

import { Input } from './input';

interface Props {
  className?: string;
  placeholder?: string;
}

const SearchInput = ({ className, placeholder }: Props) => {
  return (
    <div className={cn('flex items-center relative', className)}>
      <span className="absolute left-[19px] md:left-[25px] text-gray-500">
        <Search color="hsl(var(--secondary))" className="size-4 md:size-5" />
      </span>
      <Input
        type="text"
        placeholder={placeholder || 'Search...'}
        className={cn(
          'text-[13px] md:text-[15px]',
          'min-w-[255px] h-10 md:h-[50px]',
          'pl-[45px] md:pl-[60px] py-2 rounded-full bg-background',
          'placeholder:text-[13px] md:placeholder:text-[15px] placeholder:font-normal placeholder:text-secondary-500',
          'border-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500',
        )}
      />
    </div>
  );
};

export default SearchInput;
