import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { CardList } from './CardList';

export default function DashboardCards() {
  return (
    <div>
      <div className="flex items-center justify-between pb-5">
        <div>
          <h2 className="heading-md">My Cards</h2>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="border-none shadow-none px-2 text-[17px] font-semibold h-auto text-neutral"
          >
            See All
          </Button>
        </div>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <CardList />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
