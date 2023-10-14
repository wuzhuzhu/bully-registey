'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Error on dashboard layout!!', error)
    }, [error])

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-8">
            <h2 className='text-lg'>后台页面出错啦 dashboard</h2>
            <Button
                onClick={ // client component
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                重试
            </Button>
        </div>
    )
}