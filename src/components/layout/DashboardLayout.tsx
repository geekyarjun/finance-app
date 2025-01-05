import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { Header } from './header/Header';
import { Sidebar } from './Sidebar';

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <div
        className={cn(
          'h-screen',
          'flex flex-col',
          'lg:pl-[250px]', // Adjust main content when sidebar is visible
        )}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className={cn('flex-1 px-6 py-6 bg-background', 'md:px-10')}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
