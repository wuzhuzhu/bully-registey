import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { getServerSessionWithOption } from '@/lib/utils'
import Image from 'next/image'

import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker"
import { Overview } from "@/components/dashboard/overview"
import { RecentSales } from "@/components/dashboard/recent-sales"
import db from '@/lib/prisma'
import MdNotifier from '@/components/layout/md-notifier'

async function getStatisticsData() {
    const session = await getServerSessionWithOption()
    const [petsCount, petsCreatedCount, registerPetsCount, pendingPetsCount, userCount] = await Promise.all([
        // 所有已经录入的宠物数量
        db.pet.count({
            // where: {
            //     createdById: session?.user?.id
            // }
        }),
        // 所有在过去30天内录入的宠物数量
        db.pet.count({
            where: {
                // createdById: session?.user?.id,
                createdAt: {
                    gt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                }
            }
        }),

        // 所有已经审核通过的宠物数量
        db.pet.count({
            where: {
                // createdById: session?.user?.id,
                registration: {
                    status: 'APPROVED'
                }
            }
        }),
        // 处于待审核状态的宠物数量
        db.pet.count({
            where: {
                // createdById: session?.user?.id,
                registration: {
                    status: 'PENDING'
                }
            }
        }),
        // 所有注册用户数量
        db.user.count()
    ])
    // calculate the percentage of pets created in the last 30 days
    const petsCreatedPercentage = Math.round(petsCreatedCount / petsCount * 100)

    return {
        petsCount,
        petsCreatedCount,
        petsCreatedPercentage,
        registerPetsCount,
        pendingPetsCount,
        userCount
    }
}

const DashboardHomePage = async () => {
    const session = await getServerSessionWithOption()
    const {
        petsCount,
        petsCreatedCount,
        petsCreatedPercentage,
        registerPetsCount,
        pendingPetsCount,
        userCount
    } = await getStatisticsData()
    return (
        <>
            <MdNotifier />
            <div className="hidden flex-col md:flex">
                <div className='flex-1 space-y-4 p-8 pt-4 w-screen'>
                    {/* 标题栏 */}
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
                        <div className="flex items-center space-x-2">
                            <CalendarDateRangePicker />
                            <Button disabled>预留按钮</Button>
                        </div>
                    </div>
                    {/* 多页tab */}
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="overview">概述</TabsTrigger>
                            <TabsTrigger value="analytics" disabled>
                                分析(未)
                            </TabsTrigger>
                            <TabsTrigger value="reports" disabled>
                                报告(未)
                            </TabsTrigger>
                            <TabsTrigger value="notifications" disabled>
                                通知(未)
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            共登记
                                        </CardTitle>
                                        <Image alt="dog-icon" width={14} height={14} src="/img/dog-head-outline.svg"></Image>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{petsCount}</div>
                                        <p className="text-xs text-muted-foreground">
                                            30天之内新增了：{petsCreatedPercentage}%
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            已注册
                                        </CardTitle>
                                        <Image alt="dog-icon" width={14} height={14} src="/img/dog-head-outline.svg"></Image>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{registerPetsCount}</div>
                                        {/* <p className="text-xs text-muted-foreground">
                                            +180.1% from last month
                                        </p> */}
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">待审核</CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <rect width="20" height="14" x="2" y="5" rx="2" />
                                            <path d="M2 10h20" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{pendingPetsCount}</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            注册用户
                                        </CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{userCount}</div>
                                        {/* <p className="text-xs text-muted-foreground">
                                            +201 since last hour
                                        </p> */}
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <Card className="col-span-4">
                                    <CardHeader>
                                        <CardTitle>概览</CardTitle>
                                        <CardDescription>
                                            你本月共登记了{petsCreatedCount}只宠物，这里图表非真实数据，仅作功能预览</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <Overview />
                                    </CardContent>
                                </Card>
                                <Card className="col-span-3">
                                    <CardHeader>
                                        <CardTitle>最近登记动作</CardTitle>
                                        <CardDescription>
                                            这里数据非真实数据，仅作功能预览
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <RecentSales />
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>

    )
}

export default DashboardHomePage