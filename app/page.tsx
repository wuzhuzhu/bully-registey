import React, { Suspense } from 'react'
import Nav from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'

const HomePage = () => {
    return (
        <div className='bg-zinc-50 h-[100vh]'>
            <Suspense>
                <Nav />
            </Suspense>
            <Button className="mt-[80px]">
                Button
            </Button>
        </div >
    )
}

export default HomePage