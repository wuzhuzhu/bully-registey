import Image from "next/image"

import { rockSalt } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { HorizontalDarkWith } from "@/components/generated/HorizontalDarkWith";
import Link from "next/link";

export default function RegistryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // TODO: find out why: when add flex class back to the div, the page will be fix width
        <div className="bg-m-3sysdarksurface justify-center w-full md:px-4">
            <div className="flex flex-col items-center gap-[16px] pt-[16px] pb-0 px-0 relative min-h-screen">
                {/* 标题栏 */}
                <Link href='/' className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                        <Image
                            width={48}
                            height={48}
                            className="relative object-cover" alt="Logo" src="/img/logo.png" />
                        <div className="inline-flex flex-col items-start flex-[0_0_auto] justify-center relative">
                            <div className={cn(
                                'relative w-fit font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap [font-style:var(--m3-title-medium-font-style)]',
                                // gradient 
                                'text-transparent bg-clip-text bg-gradient-to-r from-m-3sysdarkprimary via-80% via-orange-200 to-m-3sysdarkprimary inline-block'
                            )}>

                                中国恶霸犬血统国际认证
                            </div>
                            <p className={cn(
                                rockSalt.className,
                                "relative w-fit font-normal text-m3sysdarkon-surface text-[10px] tracking-[0.15px] leading-[24px] whitespace-nowrap ml-1"
                            )}>
                                Real Fair And Professional
                            </p>
                        </div>
                    </div>
                </Link>
                {/* 纹理背景容器 */}
                <main className="flex flex-1 flex-col items-center justify-between pt-[16px] pb-[24px] px-[16px] relative self-stretch w-full rounded-[16px_16px_0px_0px] overflow-hidden shadow-m3-elevation-dark-1 mix-blend-lighten bg-[url(/img/main-content.png)] bg-cover bg-[50%_50%] gap-4">
                    {children}
                    <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                        <img className="relative flex-[0_0_auto]" alt="Partners" src="/img/partners.svg" />
                        <HorizontalDarkWith
                            className="!flex-[0_0_auto]"
                            divider="/img/divider.svg"
                            text={
                                <>
                                    中国恶霸犬注册协会
                                    <br />
                                    2023 版权所有（自定义配置）
                                </>
                            }
                        />
                    </div>
                </main>
            </div>
        </div>)
}