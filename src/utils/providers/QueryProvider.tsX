'use client';

import React from 'react';
import { type PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider, QueryKey } from '@tanstack/react-query';

const serializeSymbol = (symbol: symbol): string => {
  return symbol.description || symbol.toString();
};

const customQueryKeyHashFn = (queryKey: QueryKey): string => {
  if (Array.isArray(queryKey)) {
    return queryKey
      .map((item: any) => {
        if (typeof item === 'symbol') return serializeSymbol(item);
        if (typeof item === 'object') return JSON.stringify(item);
        return String(item);
      })
      .join('_');
  }

  return String(queryKey);
};

const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false, queryKeyHashFn: customQueryKeyHashFn },
      },
    }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
