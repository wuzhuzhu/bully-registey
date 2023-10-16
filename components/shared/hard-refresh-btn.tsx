'use client'

import { usePathname } from "next/navigation"

import React from 'react'
import { Button } from "../ui/button"
import { RefreshCcw } from "lucide-react"

const HardRefreshBtn = () => {
    const pathname = usePathname()
    return (
        <Button variant="outline"
            size="sm"
            className="ml-auto hidden h-8 lg:flex"
            onClick={() => {
                fetch(`/api/revalidate?path=${pathname}`)
                    .then(res => res.json())
                    .then(res => console.log(res))
            }}
        >
            <RefreshCcw size={16} />
        </Button>
    )
}

export default HardRefreshBtn