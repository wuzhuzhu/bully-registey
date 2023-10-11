import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'


const Avatar = ({
    src = '/img/avatar-3.png',
    width, // the width is img width, not the div width(plus ring width)
    className = '',
    alt = 'avatar'
}: {
    src: string,
    width: number,
    // add tailwind class name type to classname prop
    className?: string
    alt?: string
}) => {
    return (
        <div className='ring-2 ring-m-3sysdarkprimary rounded-full overflow-hidden'>
            <Image
                alt={alt}
                width={width}
                height={width}
                src={src}
                className={cn(
                    'object-cover rounded-full',
                    className
                )}
            />
        </div>
    )
}

export default Avatar