import { Metadata } from "next"

import MdNotifier from "@/components/layout/md-notifier"
import { getPets } from "@/lib/queries/pet"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"

import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pets - Dashboard",
  description: "Pets dashboard page",
}

export default async function TaskPage() {
  const pets = await getPets()
  // console.log('First Pet in pet dash', pets && pets.length > 0 && pets[0].createdBy)

  return (
    <>
      <MdNotifier />
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex w-full">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex justify-end space-x-2">
            <h2 className="text-2xl font-semibold tracking-tight">犬注册管理</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="cur">帮助</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-muted-foreground">
                    注册：审核通过后正式注册；登录：信息登记。# 过滤筛选等功能仅供演示，后续可增加需求实现
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          </div>
        </div>
        <DataTable data={pets} columns={columns} />
      </div>
    </>
  )
}
