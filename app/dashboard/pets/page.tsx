import { promises as fs } from "fs"
import { Metadata } from "next"
import path from "path"
import { z } from "zod"

import MdNotifier from "@/components/layout/md-notifier"
import { getPets } from "@/lib/queries/pet"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "./app/dashboard/pets/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}


export default async function TaskPage() {
  const tasks = await getTasks()
  const pets = await getPets()
  console.log({ tasks, pets })

  return (
    <>
      <MdNotifier />
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex w-full">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">犬注册管理</h2>
            <p className="text-muted-foreground">
              [注册]：赋予已经登记犬注册号，审核通过后可以通过官方页面可查。后续可增加注册有效期等限制; [登录]：指登记犬的基本信息，但并不一定注册

            </p>
            <p className="text-muted-foreground"># 过滤筛选等功能仅供演示，后续可增加需求实现</p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
