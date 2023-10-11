import React from 'react'
import Nav from '@/components/layout/nav'
import { Button } from '@/components/ui/button'

const HomePage = () => {
    return (
        <div className='bg-zinc-50 h-[100vh]'>
            <Nav />
            <Button className="mt-[80px]">
                Button
            </Button>
        </div >
    )
}

export default HomePage