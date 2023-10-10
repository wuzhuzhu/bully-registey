import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'


const Avatar = ({
    src = '/img/avatar-3.png',
    width = 64,
    height = 64,
    className = '',
    alt = 'avatar'
}: {
    src: string,
    width: number,
    height: number,
    // add tailwind class name type to classname prop
    className?: string
    alt?: string
}) => {
    return (
        <div className='relative flex shrink-0 overflow-hidden rounded-full'>
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                className={cn(
                    'object-cover w-full h-full rounded-full',
                    className
                )}
            />
        </div>
    )
}

export default Avatar