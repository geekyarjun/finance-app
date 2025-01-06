import { paths } from '@/config/paths';
import { LoginForm } from '@/features/auth/LoginForm';
import { useUser } from '@/lib/auth';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const user = useUser();

  useEffect(() => {
    if (user.data) {
      navigate(redirectTo ? redirectTo : paths.home.getHref(), {
        replace: true,
      });
    }
  }, [user.data, navigate, redirectTo]);

  return (
    <div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <LoginForm
            onSuccess={() => {
              navigate(
                `${redirectTo ? `${redirectTo}` : paths.home.getHref()}`,
                {
                  replace: true,
                },
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
