/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseMutationOptions, DefaultOptions } from '@tanstack/react-query';

const ONE_SECOND = 1000; // milliseconds
const ONE_MINUTE = ONE_SECOND * 60; // eslint-disable-line no-magic-numbers

export const queryConfig = {
  queries: {
    // throwOnError: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: ONE_MINUTE,
  },
} satisfies DefaultOptions;

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<
  MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0] // eslint-disable-line no-magic-numbers
>;
