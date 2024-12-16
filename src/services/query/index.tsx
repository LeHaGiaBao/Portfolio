'use client';
import React from 'react';
import {ReactNode} from 'react';
import {MutationCache, QueryCache, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

export const queryCache = new QueryCache({
  onError: (error) => {
    console.error('[QueryCache][onError]', error);
  },
  onSuccess: (data) => {
    console.error('[QueryCache][onSuccess]', data);
  },
  onSettled: (data, error) => {
    console.error('[QueryCache][onSettled]', data, error);
  },
});

export const mutationCache = new MutationCache({
  onError: (error) => {
    console.error('[MutationCache][onError]', error);
  },
  onSuccess: (data) => {
    console.error('[MutationCache][onSuccess]', data);
  },
  onSettled: (data, error) => {
    console.error('[MutationCache][onSettled]', data, error);
  },
});

const queryClient = new QueryClient({
  queryCache,
  mutationCache,
});
function QueryProvider({children}: {children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export {QueryProvider};
