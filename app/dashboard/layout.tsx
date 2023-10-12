import Nav from '@/components/layout/navbar'
import React, { Suspense } from 'react'

const DashboardLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Suspense>
                <Nav></Nav>
            </Suspense>
            <div className='min-h-screen pt-24 pb-8 flex flex-col items-center gap-4 bg-zinc-100'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout