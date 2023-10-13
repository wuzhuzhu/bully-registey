import Nav from '@/components/layout/nav'
import React, { Suspense } from 'react'
import { Toaster } from "@/components/ui/toaster"

const DashboardLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Suspense>
                <Nav></Nav>
            </Suspense>
            <div className='min-h-screen pt-16 pb-8 flex flex-col items-center gap-4 bg-zinc-100'>
                {children}
            </div>
            <Toaster />
        </div>
    )
}

export default DashboardLayout