import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./components/sidebar-nav"
import MdNotifier from "@/components/layout/md-notifier"

export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
    {
        title: "登记犬",
        href: "/dashboard/new/pet",
    },
    {
        title: "登记犬舍",
        href: "/dashboard/new/kennel",
    },
    {
        title: '登记品类',
        href: "/#",
        disabled: true,
    },
    {
        title: '登记颜色',
        href: "/#",
        disabled: true,
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
                    <aside className="-mx-4 lg:w-1/5 border-r">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </>
    )
}
