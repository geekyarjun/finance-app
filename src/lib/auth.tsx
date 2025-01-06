import { configureAuth } from 'react-query-auth';
import { Navigate, useLocation } from 'react-router';
import { z } from 'zod';
import { paths } from '@/config/paths';
import { AuthResponse, User } from '@/types/api';

import { api } from './api-client';
import { ONE } from './constants/constants';
import { wait } from './utils';

const getUser = async (): Promise<User | null> => {
  // const response = await api.get('/user/me');
  // return response.data;

  if (sessionStorage.getItem('isLoggedIn') === '1') {
    return {
      id: 'G2nDpSIXA6pIYteTP2XDP',
      firstName: 'arjun',
      lastName: 'shrivastava',
      email: 'itsarjunshrivastava@gmail.com',
      teamId: '4BmX-ALZk7LQLMAT8dogm',
      role: 'ADMIN',
      bio: '',
      createdAt: 1736128032734,
    };
  }

  return null;
};

const logout = (): Promise<void> => {
  // return api.post('/auth/logout');

  return new Promise((resolve) => resolve());
};
const MINIMUM_PASSWORD_LENGTH = 5;

export const loginInputSchema = z.object({
  username: z.string().min(ONE, 'Required'),
  password: z.string().min(MINIMUM_PASSWORD_LENGTH, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
// const loginWithUsernameAndPassword = (
//   data: LoginInput,
// ): Promise<AuthResponse> => {
//   return api.post('/user/login', data);
// };

export const registerInputSchema = z
  .object({
    email: z.string().min(ONE, 'Required'),
    firstName: z.string().min(ONE, 'Required'),
    lastName: z.string().min(ONE, 'Required'),
    password: z.string().min(MINIMUM_PASSWORD_LENGTH, 'Required'),
  })
  .and(
    z
      .object({
        teamId: z.string().min(ONE, 'Required'),
        teamName: z.null().default(null),
      })
      .or(
        z.object({
          teamName: z.string().min(ONE, 'Required'),
          teamId: z.null().default(null),
        }),
      ),
  );

export type RegisterInput = z.infer<typeof registerInputSchema>;

const registerWithEmailAndPassword = (
  data: RegisterInput,
): Promise<AuthResponse> => {
  return api.post('/auth/register', data);
};

const ONE_SEC = 1000;

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    // const response = await loginWithUsernameAndPassword(data);
    // return response.user;
    console.log(data);
    sessionStorage.setItem('isLoggedIn', '1');

    await wait(ONE_SEC);

    return {
      id: 'G2nDpSIXA6pIYteTP2XDP',
      firstName: 'arjun',
      lastName: 'shrivastava',
      email: 'itsarjunshrivastava@gmail.com',
      teamId: '4BmX-ALZk7LQLMAT8dogm',
      role: 'ADMIN',
      bio: '',
      createdAt: 1736128032734,
    };
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    return response.user;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    return (
      <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
    );
  }

  return children;
};
