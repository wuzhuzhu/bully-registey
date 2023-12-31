import Nav from '@/components/layout/nav';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import React, { Suspense } from 'react';
import { extractRouterConfig } from "uploadthing/server";
import { useSession, SessionProvider } from "next-auth/react"

import { ourFileRouter } from '@/app/api/uploadthing/core';
import { Toaster } from "@/components/ui/toaster";
import { getServerSessionWithOption } from '@/lib/utils';
import { redirect } from 'next/navigation';
import Providers from '@/components/providers/dashboard-provider'

const DashboardLayout = async ({ children }: {
    children: React.ReactNode;
}) => {
    const session = await getServerSessionWithOption()
    // console.log('session from dashboard layout', session)
    if (!session || !session.user) {
        redirect('/api/auth/signin')
    }
    return (
        <div>
            <Suspense>
                <Nav></Nav>
            </Suspense>
            <div className='min-h-screen pt-16 pb-8 flex flex-col items-center gap-4 bg-zinc-100'>
                <NextSSRPlugin
                    /**
                     * The `extractRouterConfig` will extract **only** the route configs
                     * from the router to prevent additional information from being
                     * leaked to the client. The data passed to the client is the same
                     * as if you were to fetch `/api/uploadthing` directly.
                     */
                    routerConfig={extractRouterConfig(ourFileRouter)}
                />
                <Providers>
                    {children}
                </Providers>
            </div>
            <Toaster />
        </div>
    )
}

export default DashboardLayout