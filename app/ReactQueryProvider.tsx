"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 3000, // 5 minutes
                },
            },
        })
    );

    return <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
    </QueryClientProvider>;
}
