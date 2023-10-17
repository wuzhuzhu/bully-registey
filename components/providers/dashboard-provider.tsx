"use client";

// use react query with react app folder: 
// https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

function Providers({ children }: React.PropsWithChildren) {
    const [client] = React.useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    );
}

export default Providers;