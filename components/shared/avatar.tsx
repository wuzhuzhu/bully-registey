import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import { DEFAULT_PET_AVATAR_URL } from '@/lib/constants'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


const FamilyAvatar = ({
    src = DEFAULT_PET_AVATAR_URL,
    className = '',
}: {
    src: string,
    // width: number,
    // add tailwind class name type to classname prop
    className?: string
    // alt?: string
}) => {
    return (
        <Avatar className={cn(
            'ring-2 ring-m-3sysdarkprimary',
            className
        )}>
            <AvatarImage src={src} alt="avatar" width={2} />
            {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
    )
}

export default FamilyAvatar