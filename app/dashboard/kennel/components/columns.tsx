"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

import type { Kennel } from '@prisma/client'
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

type KennelWithPetsCount = Kennel & {
  _count?: {
    pets: number
  }
}

export const columns: ColumnDef<KennelWithPetsCount>[] = [
  // 第一列 选择框
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  // 第二列 名称
  {
    accessorKey: "name",
    // accessorFn: (originalRow, _index) => { return originalRow.name + originalRow.nameEn },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="犬舍名" />
    ),
    cell: ({ row, column }) => {
      return <div className="w-[200px]">{`${row.original.name} / ${row.original.nameEn}`}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  // 第三列 犬计数
  {
    accessorKey: "petsCount",
    accessorFn: (originalRow, _index) => { return originalRow?._count?.pets },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="犬舍名" />
    ),
    cell: ({ row, column }) => {
      return <div className="w-[60px]">{row.getValue('petsCount')}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  // 第四列 犬舍简介
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="犬舍名" />
    ),
    cell: ({ row, column }) => {
      return <div className="w-full">{row.getValue('description')}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
