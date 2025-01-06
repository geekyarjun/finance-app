import { Send } from '@/components/svg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Payee } from '@/types/api';
import { useState } from 'react';

import { Payeeuser } from './PayeeUser';

const users: Payee[] = [
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Designer',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Tom Brown',
    designation: 'Developer',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Emily White',
    designation: 'Manager',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 5,
    name: 'Chris Green',
    designation: 'Product Lead',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Designer',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Tom Brown',
    designation: 'Developer',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Emily White',
    designation: 'Manager',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 5,
    name: 'Chris Green',
    designation: 'Product Lead',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

export default function QuickTransfer() {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [transferAmount, setTransferAmount] = useState('');

  const handleUserClick = (userId: number) => {
    setSelectedUser(userId);
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-3 sm:pb-5">
        <div>
          <h2 className="max-xs:text-lg heading-md">Quick Transfer</h2>
        </div>
      </div>
      <Card className="w-full border-none shadow-none rounded-[25px]">
        <CardContent className="h-[276px] pt-[35px]">
          {/* User List */}
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {users.map((user) => (
              <Payeeuser
                key={user.id}
                {...user}
                selectedUser={selectedUser}
                handleUserClick={handleUserClick}
              />
            ))}
          </div>

          {/* Input and Send Button */}
          <div className="mt-7 flex items-center">
            <p className="text-secondary text-sm sm:text-base mr-4 whitespace-nowrap">
              Write Amount
            </p>
            <div className="relative flex-1">
              <Input
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="$100"
                className="w-full py-2 pl-7 pr-16 rounded-full bg-[#EDF1F7] border-none h-10 sm:h-[50px] text-sm"
              />
              <Button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-[50px] h-10 sm:h-[50px] py-[14px] sm:px-6 text-sm sm:text-base"
                onClick={() =>
                  alert(
                    `Transferring ${transferAmount} to User ID ${selectedUser}`,
                  )
                }
              >
                Send
                <Send className="w-[20px] sm:w-[26px] h-[18px] sm:h-[23px]" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
