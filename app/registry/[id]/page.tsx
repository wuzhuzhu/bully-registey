import React from "react";
import Image from "next/image";

import { AssistiveChipDark } from "@/components/generated/AssistiveChipDark";
import { FamilyAvatar } from "@/components/generated/FamilyAvatar";
import { IconsLocalTaxi } from "@/components/generated/IconsLocalTaxi";
import { StackedCardDark } from "@/components/generated/StackedCardDark";
import { Icon3 } from "@/components/icons/Icon3";
import { Icon39 } from "@/components/icons/Icon39";
import { Icon4 } from "@/components/icons/Icon4";
import { IconsMoreVert24Px1 } from "@/components/icons/IconsMoreVert24Px1";
import { IconsTranslate24Px } from "@/components/icons/IconsTranslate24Px";
import { rockSalt } from "@/app/fonts";
import { cn } from "@/lib/utils";

const RegistryDetailPage = () => {
    return (
        // TODO: find out why: when add flex class back to the div, the page will be fix width
        <div className="bg-m-3sysdarksurface justify-center w-full md:px-4">
            <div className="flex flex-col items-center gap-[16px] pt-[16px] pb-0 px-0 relative min-h-screen">
                <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
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
                                "relative w-fit font-normal text-m3sysdarkon-surface text-[2px] tracking-[0.15px] leading-[24px] whitespace-nowrap"
                            )}>
                                Real Fair And Professional
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-center justify-between pt-[16px] pb-[24px] px-[16px] relative self-stretch w-full rounded-[16px_16px_0px_0px] overflow-hidden shadow-m3-elevation-dark-1 mix-blend-lighten bg-[url(/img/main-content.png)] bg-cover bg-[50%_50%]">
                    {/* main-content */}
                    <div className="flex flex-col items-start justify-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-[8px] px-[4px] py-0 relative flex-[0_0_auto]">
                            <div className="relative w-[24px] h-[24px] bg-m-3sysdarkprimary rounded-[12px]">
                                <div className="relative w-[22px] h-[22px] top-px left-px bg-[#d9d9d9] rounded-[11.25px] bg-[url(/img/dog-company-logo-icon.svg)] bg-[100%_100%]" />
                            </div>
                            <div className="relative w-fit mt-[-1.00px] font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap [font-style:var(--m3-title-medium-font-style)]">
                                北京虚拟犬舍俱乐部 Dizzy Camp
                            </div>
                        </div>
                        <div className="w-full inline-flex items-center gap-[8px] relative flex-[0_0_auto] overflow-x-scroll no-scrollbar">
                            <AssistiveChipDark
                                className="!flex-[0_0_auto]"
                                configuration="label-icon"
                                labelText="admin@qq.com"
                                override={<Icon4 className="!relative !w-[18px] !h-[18px]" color="#F8BD48" />}
                                stateProp="enabled"
                                style="elevated"
                            />
                            <AssistiveChipDark
                                className="!flex-[0_0_auto]"
                                configuration="label-icon"
                                labelText="其他社交网络地址"
                                override={<Icon3 className="!relative !w-[18px] !h-[18px]" color="#F8BD48" />}
                                stateProp="enabled"
                                style="elevated"
                            />
                            <AssistiveChipDark
                                className="!flex-[0_0_auto]"
                                configuration="label-icon"
                                labelText="其他社交网络地址"
                                override={<IconsTranslate24Px className="!relative !w-[18px] !h-[18px]" color="#F8BD48" />}
                                stateProp="enabled"
                                style="elevated"
                            />
                        </div>
                    </div>
                    <StackedCardDark
                        assistiveChipDark={<Icon39 className="!relative !w-[18px] !h-[18px]" />}
                        assistiveChipDarkLabelText="1398888888"
                        cardStateLayerStateEnabledClassName=""
                        className="!self-stretch !h-[360px] !w-full"
                        headerClassName="!tracking-[var(--m3-body-large-letter-spacing)] !text-[length:var(--m3-body-large-font-size)] ![font-style:var(--m3-body-large-font-style)] !font-[number:var(--m3-body-large-font-weight)] !font-m3-body-large !leading-[var(--m3-body-large-line-height)]"
                        iconButtonDarkIcon={<IconsMoreVert24Px1 className="!relative !w-[24px] !h-[24px]" color="#BFC8CB" />}
                        mediaClassName="bg-[url(/img/media.png)]"
                        mediaTextContentClassName="!h-[360px]"
                        override={
                            <IconsLocalTaxi
                                className="!h-[18px] !w-[18px]"
                                icon="/img/icon-26.svg"
                                iconClassName="!h-[14px] !left-[2px] !w-[14px] !top-[2px]"
                            />
                        }
                        style="bully"
                        subheadClassName="!mr-[-2.00px] !text-m3sysdarkon-surface"
                        supportingTextClassName=""
                        text="绿巨人浩克 Hulk Smash"
                        text1="主人：欧阳锋"
                        text2="地区：北京市 朝阳区"
                        titleClassName="!mr-[-2.00px] !tracking-[var(--m3-body-medium-letter-spacing)] !text-[length:var(--m3-body-medium-font-size)] ![font-style:var(--m3-body-medium-font-style)] !font-[number:var(--m3-body-medium-font-weight)] !font-m3-body-medium !leading-[var(--m3-body-medium-line-height)]"
                    />
                    <div className="flex px-0 py-[4px] self-stretch w-full flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                        <Image width={64} height={64} className="relative flex-[0_0_auto]" alt="Gen" src="/img/gen-1.svg" />
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex w-[171.33px] items-center justify-center relative">
                                <div className="inline-flex p-[4px] rounded-[16px] flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                                    <Image
                                        width={60} height={60} className="relative w-[60px] h-[60px] mt-[-3.00px] mix-blend-lighten"
                                        alt="Avatar"
                                        src="/img/avatar-3.png"
                                    />
                                    <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                        <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                            超级闪电
                                        </div>
                                        <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                            Hulk Smash Jr.
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex p-[4px] rounded-[16px] flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                                    <Image
                                        width={60} height={60} className="relative w-[60px] h-[60px] mt-[-3.00px] mix-blend-lighten"
                                        alt="Avatar"
                                        src="/img/avatar-3.png"
                                    />
                                    <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                        <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                            超级闪电
                                        </div>
                                        <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                            Hulk Smash Jr.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[171.33px] items-center justify-center relative">
                                <div className="inline-flex p-[4px] rounded-[16px] flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                                    <Image
                                        width={60} height={60} className="relative w-[60px] h-[60px] mt-[-3.00px] mix-blend-lighten"
                                        alt="Avatar"
                                        src="/img/avatar-3.png"
                                    />
                                    <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                        <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                            超级闪电
                                        </div>
                                        <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                            Hulk Smash Jr.
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex p-[4px] rounded-[16px] flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                                    <Image
                                        width={60} height={60} className="relative w-[60px] h-[60px] mt-[-3.00px] mix-blend-lighten"
                                        alt="Avatar"
                                        src="/img/avatar-3.png"
                                    />
                                    <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                                        <div className="relative w-[70px] mt-[-1.00px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                            超级闪电
                                        </div>
                                        <div className="relative w-[70px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
                                            Hulk Smash Jr.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <FamilyAvatar
                                className="!flex-[0_0_auto]"
                                ellipse="/img/ellipse-1-8.svg"
                                generation="three"
                                img="/img/ellipse-1-7.svg"
                                isMale1
                                state="default"
                            />
                            <FamilyAvatar
                                className="!flex-[0_0_auto]"
                                ellipse="/img/ellipse-1-6.svg"
                                generation="three"
                                img="/img/ellipse-1-5.svg"
                                isMale1
                                state="default"
                            />
                            <FamilyAvatar
                                className="!flex-[0_0_auto]"
                                ellipse="/img/ellipse-1-4.svg"
                                generation="three"
                                img="/img/ellipse-1-3.svg"
                                isMale1
                                state="default"
                            />
                            <FamilyAvatar
                                className="!flex-[0_0_auto]"
                                ellipse="/img/ellipse-1-2.svg"
                                generation="three"
                                img="/img/ellipse-1-1.svg"
                                isMale1
                                state="default"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RegistryDetailPage;