import React from 'react'
import Image from 'next/image'
import Avatar from './avatar'
import { PetWithRelations } from '@/prisma/generated/zod'
import { DEFAULT_PET_AVATAR_URL } from '@/lib/constants'

const FamilyMembersCompact = ({ members }: { members: PetWithRelations[] }) => {
    const [maleMember, femaleMember] = members
    return (
        <div className='flex flex-col gap-2'>
            <div className="flex flex-1 items-center justify-center relative -space-x-1">
                <Avatar
                    src={maleMember?.avatar?.url || DEFAULT_PET_AVATAR_URL}
                    alt={`Generation 3 avatar`}
                    className='w-8 h-8'
                />
                <Avatar
                    src={femaleMember?.avatar?.url || DEFAULT_PET_AVATAR_URL}
                    alt={`Generation 3 avatar`}
                    className='w-8 h-8'
                />
            </div >
            <div className="flex flex-col items-center -space-y-2 relative">
                <p className='w-16 font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis line-clamp-1  [font-style:var(--m3-label-small-font-style)]'>
                    {maleMember?.name || '未知'} {maleMember?.nameEn}
                </p>
                <p className='text-m3sysdarkon-secondary-container relative -inset-y-1'>x</p>
                <p className='w-16 font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis line-clamp-1  [font-style:var(--m3-label-small-font-style)]'>
                    {femaleMember?.name || '未知'} {femaleMember?.nameEn}
                </p>
            </div>

        </div>

    )
}

export default FamilyMembersCompact