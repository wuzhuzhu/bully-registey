import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./components/sidebar-nav"
import MdNotifier from "@/components/layout/md-notifier"

import { Home, PawPrint, ListChecks, Palette } from 'lucide-react'

export const metadata: Metadata = {
    title: "数据录入/修改",
    description: "新登录和修改信息都在这里",
}

const sidebarNavItems = [
    {
        title: "犬",
        href: "/dashboard/edit/pet",
        icon: <PawPrint size={16} />
    },
    {
        title: "犬舍",
        href: "/dashboard/edit/kennel",
        icon: <Home size={16} />
    },
    {
        title: '品类',
        href: "/#",
        disabled: true,
        icon: <ListChecks size={16} />
    },
    {
        title: '颜色',
        href: "/#",
        disabled: true,
        icon: <Palette size={16} />
    }
]

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <>
            <MdNotifier></MdNotifier>
            <div className="hidden space-y-6 p-10 pb-16 md:block w-full">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">数据录入</h2>
                    <p className="text-muted-foreground">
                        在这里集中录入各类数据
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="lg:w-1/6 border-r">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-4xl">{children}</div>
                </div>
            </div>
        </>
    )
}
