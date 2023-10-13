"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { PetWithRelations } from "@/prisma/generated/zod"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { REGISTRATION_STATUS, TRANSLATION_MAP } from "@/lib/constants"
import { CircleDashed } from "lucide-react"



export const columns: ColumnDef<PetWithRelations>[] = [
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

  // 第二列 姓名
  {
    accessorKey: "name",
    accessorFn: (originalRow, _index) => { return originalRow.name + originalRow.nameEn },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="犬名" />
    ),
    cell: ({ row }) => {
      console.log({ row }, row.getValue("id"))
      return <div className="w-[80px]">{`${row.original.name} / ${row.original.nameEn}`}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="性别" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="w-[50px]">
            {TRANSLATION_MAP.gender[row.original.gender]}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "registrationReadableId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="证书编号" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>{row.original.registration?.readableId ?? '-'}</span>
        </div>
      )
    },
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id))
    // },
  },
  {
    accessorKey: "color",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="颜色" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[60px] items-center">
          <span>{row.getValue('color')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "breed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="品种" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[60px] items-center">
          <span>{row.getValue('breed')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="注册状态" />
    ),
    cell: ({ row }) => {
      let status: {
        label: string
        icon: any
      } = {
        label: "仅登记",
        icon: CircleDashed,
      }
      if (row.original.registration?.status) {
        status = REGISTRATION_STATUS[row.original?.registration?.status as keyof typeof REGISTRATION_STATUS]
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  // {
  //   accessorKey: "priority",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Priority" />
  //   ),
  //   cell: ({ row }) => {
  //     const priority = priorities.find(
  //       (priority) => priority.value === row.getValue("priority")
  //     )

  //     if (!priority) {
  //       return null
  //     }

  //     return (
  //       <div className="flex items-center">
  //         {priority.icon && (
  //           <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{priority.label}</span>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
