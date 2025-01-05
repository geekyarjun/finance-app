import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HEADER } from '@/lib/constants/layout';
import { cn } from '@/lib/utils';
import { getPageTitle } from '@/lib/utils/route';
import { ONE } from '@/lib/constants/constants';
import SearchInput from '@/components/ui/search-input';

import { HeaderActions } from './HeaderActions';
import { UserMenu } from './UserMenu';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const title = getPageTitle(location.pathname.substring(ONE));

  return (
    <header
      className={cn(
        'bg-white',
        'sticky top-0',
        `z-${HEADER.Z_INDEX}`,
        'px-[25px] pt-[25px] pb-[20px] md:px-10 md:py-[20px] md:h-[100px]',
        'w-full border-b border-tertiary-01',
      )}
    >
      <div className={cn('flex items-center')}>
        {/* Mobile hamburger menu */}
        <Button
          variant="ghost"
          className="mr-2 px-0 py-0 size-5 lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="size-5" />
        </Button>

        {/* Page title */}
        <h2 className="flex-1 text-xl text-center font-semibold text-neutral leading-[24.2px] md:text-left md:heading-lg">
          {title}
        </h2>

        <div className="flex md:flex-1 items-center justify-between md:gap-[35px] md:justify-end">
          <div className="flex items-center gap-[30px]">
            {/* Search */}
            <div className={cn('hidden md:flex')}>
              <SearchInput placeholder="Search for something" />
            </div>

            <HeaderActions />
          </div>
          <UserMenu />
        </div>
      </div>
      <div className={cn('md:hidden mt-5')}>
        <SearchInput placeholder="Search for something" />
      </div>
    </header>
  );
}
