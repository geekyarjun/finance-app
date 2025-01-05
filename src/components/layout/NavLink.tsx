import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { SvgProps } from '../svg/types';

interface NavLinkProps {
  to: string;
  icon: React.ComponentType<SvgProps>;
  children: React.ReactNode;
}

export function NavLink({ to, icon: Icon, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'flex relative items-center gap-4 px-3 py-2 md:text-base font-medium leading-[21.78px]',
        'hover:bg-accent hover:text-accent-foreground',
        'pl-6',
      )}
    >
      <Icon
        className="size-[18px]"
        fill={isActive ? 'hsl(var(--neutral-900))' : 'hsl(var(--neutral-400))'}
      />
      {children}
      {isActive && (
        <div className="absolute left-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-tr-[10px] rounded-br-[10px] bg-primary" />
      )}
    </Link>
  );
}
