import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { paths } from '@/config/paths';
import { useLogout } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

export function UserMenu() {
  const navigate = useNavigate();
  const logout = useLogout({
    onSuccess: () => {
      sessionStorage.removeItem('isLoggedIn');
      navigate(paths.auth.login.getHref(location.pathname));
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn('relative', 'size-[35px] md:size-[60px] rounded-full')}
        >
          <Avatar className="size-[35px] md:size-[60px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="[&>*]:cursor-pointer">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout.mutate({})}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
