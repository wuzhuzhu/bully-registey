import React from 'react'
import Image from 'next/image'
import Avatar from './avatar'
import { PetWithRelations } from '@/prisma/generated/zod'

const GENERATION_MAP = [
    null,
    {
        width: 16, // multiple by 4 equals to 64px
    },
    {
        width: 12, // multiple by 4 equals to 48px
    },
    {
        width: 8, // multiple by 4 equals to 32px
    },
]

const FamilyMember = ({
    generation = 1,
    member,
    isMale = true,
}: {
    generation?: number
    src?: string
    isMale?: boolean
    member?: Partial<PetWithRelations> | {}
}) => {
    return (
        <div className='inline-flex rounded-[16px] flex-col items-center gap-2 relative flex-[0_0_auto] flex-1'>
            {/* <p className='text-white'>{JSON.stringify(member)}</p> */}
            <Avatar
                src={member?.avatar?.url || (isMale ? '/img/male-avatar.svg' : '/img/female-avatar.svg')}
                alt={`Generation ${generation} avatar`}
                className={`w-${GENERATION_MAP[generation]?.width} h-${GENERATION_MAP[generation]?.width}`}
            />
            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <div className="relative w-16 mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                    {member?.name || '未知'}
                </div>
                <div className="relative w-16 font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                    {member?.nameEn || 'Unknown'}
                </div>
            </div>
        </div>
    )
}

export default FamilyMember