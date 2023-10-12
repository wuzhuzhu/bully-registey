"use client";
import { usePathname } from "next/navigation";
import Link from "next/link"

import { cn } from "@/lib/utils"

const NavLink = function ({ href, children, currentPath }: {
  href: string
  children: React.ReactNode
  currentPath: string
}) {
  return <Link
    href={href}
    className={cn(
      "text-sm font-medium transition-colors hover:text-primary",
      {
        "text-muted-foreground": currentPath !== href,
      }
    )}
  >
    {children}
  </Link>
}

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <NavLink
        href="/dashboard"
        currentPath={pathname}
      >
        数据看板
      </NavLink>
      <NavLink
        href="/dashboard/pets"
        currentPath={pathname}
      >
        犬管理
      </NavLink>
      <NavLink
        href="/dashboard/kennel"
        currentPath={pathname}
      >
        犬舍管理
      </NavLink>
      <NavLink
        href="/dashboard/settings"
        currentPath={pathname}
      >
        设置
      </NavLink>
    </nav>
  )
}
