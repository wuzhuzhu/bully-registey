"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

import { REGISTRATION_STATUS, TRANSLATION_MAP } from "@/lib/constants"
import { PetWithRelations } from "@/prisma/generated/zod"
import { CircleDashed } from "lucide-react"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

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
    // accessorFn: (originalRow, _index) => { return originalRow.name + originalRow.nameEn },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="犬名" />
    ),
    cell: ({ row, column }) => {
      return <Link href={`/dashboard/edit/pet/${row.original.id}`} className="flex-1 text-m-3refsecondarysecondary-20">
        {`${row.original.name} / ${row.original.nameEn}`}
      </Link>
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
          <span className="w-[30px]">
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
        <div className="flex flex-1 items-center gap-2">
          <Link href={`/registry/${row?.original?.id}`} target="_blank">
            <ExternalLink size={16} />
          </Link>
          <span>{row.original.registration?.readableId ?? '-'}</span>
        </div>
      )
    },
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id))
    // },
  },
  {
    accessorKey: "kennelId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="犬舍" />
    ),
    cell: ({ row }) => {
      const kennelId = row.getValue('kennelId')
      return (
        <div className="flex items-center flex-1">
          <Link href={kennelId ? `/dashboard/edit/kennel/${row.getValue('kennelId')}` : '#'}>
            <span>{row.original.kennel?.name || '-'}</span>
          </Link>
        </div>
      )
    },
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
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
