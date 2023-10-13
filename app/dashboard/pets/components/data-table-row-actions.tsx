"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { statuses } from "../data/data"
import { PetSchema, RegistrationStatusSchema } from "@/prisma/generated/zod"
import { object, z } from "zod"
import { REGISTRATION_STATUS } from "@/lib/constants"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

const PetSchemaWithStatus = PetSchema.extend({
  registration: z.object({
    status: RegistrationStatusSchema
  }).nullable(),
})

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const pet = PetSchemaWithStatus.parse(row.original)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>编辑</DropdownMenuItem>
        <DropdownMenuItem>复制</DropdownMenuItem>
        <DropdownMenuItem disabled>收藏</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>审核</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {/* TODO: onclick */}
            <DropdownMenuRadioGroup value={pet?.registration?.status}>
              {Object.keys(REGISTRATION_STATUS).map((status) => (
                <DropdownMenuRadioItem key={status} value={status}>
                  {REGISTRATION_STATUS[status as keyof typeof REGISTRATION_STATUS].label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          删除
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
