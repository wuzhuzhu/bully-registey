import { SegmentedButton } from '@/components/generated/SegmentedButton/SegmentedButton'
import React from 'react'

const ChipSearchLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col w-full items-center">
            <SegmentedButton
                className=""
                isSelectLeft={false}
            />
            {children}
        </div>
    )
}

export default ChipSearchLayout