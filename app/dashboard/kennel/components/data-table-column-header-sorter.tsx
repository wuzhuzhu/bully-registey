'use client'

import {
    ArrowDownIcon,
    ArrowUpIcon
} from "@radix-ui/react-icons"
import { Column } from "@tanstack/react-table"

import {
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"

const DataTableColumnHeaderSorter = ({ column }: any) => {
    return (
        <DropdownMenuContent align="start">
            <DropdownMenuItem
                onClick={() => column.toggleSorting(false)} // client component
            >
                <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                升序
            </DropdownMenuItem>
            <DropdownMenuItem
                onClick={() => column.toggleSorting(true)} // client component
            >
                <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                降序
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            隐藏
          </DropdownMenuItem> */}
        </DropdownMenuContent>
    )
}

export default DataTableColumnHeaderSorter