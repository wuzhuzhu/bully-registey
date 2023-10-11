import React from 'react'
import Image from 'next/image'
import Avatar from './avatar'

const GENERATION_MAP = [
    null,
    {
        width: 64,
    }
]

const FamilyMember = ({
    generation = 1,
    src,
    isMale = false,
}: {
    generation?: number
    src?: string
    isMale?: boolean
}) => {
    return (
        <div className='inline-flex p-[4px] rounded-[16px] flex-col items-center gap-2 relative flex-[0_0_auto]'>

            <Avatar
                src={src || (isMale ? '/img/male-avatar.svg' : '/img/female-avatar.svg')}
                width={64}
                alt={`Generation ${generation} avatar`}
                className='block'
            />
            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                    超级闪电
                </div>
                <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                    Hulk Smash Jr.
                </div>
            </div>
        </div>
    )
}

export default FamilyMember