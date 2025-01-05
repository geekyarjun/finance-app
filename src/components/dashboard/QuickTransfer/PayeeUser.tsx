import { Payee } from '@/types/api';

interface Props extends Payee {
  selectedUser: number | null;
  handleUserClick: (userId: number) => void;
}

export const Payeeuser = ({
  id,
  avatar,
  name,
  designation,
  handleUserClick,
  selectedUser,
}: Props) => {
  return (
    <div
      key={id}
      className={`min-w-20 flex flex-col items-center cursor-pointer ${selectedUser === id ? 'font-bold' : 'text-gray-600'}`}
      onClick={() => handleUserClick(id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleUserClick(id);
        }
      }}
      tabIndex={0}
      role="button"
    >
      <img
        src={avatar}
        alt={name}
        className="size-[70px] rounded-full border-2 border-gray-300"
      />
      <div className="text-sm mt-2 truncate text-primary">{name}</div>
      <div className="text-xs truncate text-secondary">{designation}</div>
    </div>
  );
};
