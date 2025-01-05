import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { navigationItems } from '@/lib/navigation';
import { APP_CONFIG } from '@/lib/constants/config';

import { TaskFill } from '../svg';
import { NavLink } from './NavLink';

interface SidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  const content = (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-14 md:h-[100px] items-center px-5">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <TaskFill
            className="h-5 w-5 md:h-[35px] md:w-[35px]"
            fill="hsl(var(--primary))"
          />
          <span className="text-base md:text-[25px] font-extrabold leading-[30.26px]">
            {APP_CONFIG.NAME}
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className={cn('flex flex-col', 'flex-1 space-y-1')}>
        {navigationItems.map((item) => (
          <NavLink key={item.path} to={item.path} icon={item.icon}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed hidden h-full w-[250px] border-r border-tertiary-01 lg:block">
        {content}
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="p-0">
          <SheetHeader className="px-6 pt-6">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          {content}
        </SheetContent>
      </Sheet>
    </>
  );
}
