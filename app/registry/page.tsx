import React from "react";
import { GenderedCardDark } from "@/components/generated/GenderedCardDark";
import { HorizontalDarkWith } from "@/components/generated/HorizontalDarkWith";
import { SearchBarDark } from "@/components/generated/SearchBarDark";
import { SegmentedButton } from "@/components/generated/SegmentedButton";
import { IconsMenu24Px } from "@/components/icons/IconsMenu24Px";
import { IconsSearch24Px } from "@/components/icons/IconsSearch24Px";

const SearchPage = () => {
    return (
        <div className="bg-[#15130e] flex flex-row justify-center w-full">
            <div className="bg-m-3sysdarksurface w-[390px] h-[882px]">
                <div className="flex flex-col w-[390px] items-center gap-[16px] pt-[16px] pb-0 px-0 relative">
                    <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                            <img className="relative w-[48px] h-[48px] object-cover" alt="Logo" src="/img/logo.png" />
                            <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [background:linear-gradient(180deg,rgb(248,189,72)_0%,rgba(248,189,72,0.94)_62.16%,rgba(255,219.38,148.75,0.95)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-transparent text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap [font-style:var(--m3-title-medium-font-style)]">
                                    中国恶霸犬血统国际认证
                                </div>
                                <p className="relative w-fit [font-family:'Rock_Salt',Helvetica] font-normal text-m3sysdarkon-surface text-[10px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
                                    {" "}
                                    Real Fair And Professional
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-[802px] items-center justify-between pt-[16px] pb-[20px] px-[16px] relative self-stretch w-full rounded-[16px_16px_0px_0px] overflow-hidden shadow-m3-elevation-dark-1 mix-blend-lighten bg-[url(/img/main-content.png)] bg-cover bg-[50%_50%]">
                        {/* main-content */}
                        <div className="relative w-[360px] h-[584px] ml-[-1.00px] mr-[-1.00px]">
                            <SegmentedButton
                                buildingBlocksLabelText="宠物名"
                                className="!absolute !left-[76px] !top-0"
                                density="zero"
                                segments="two_1"
                                stateDisabledWrapperLabelText="芯片号"
                            />
                            <SearchBarDark
                                className="!left-0 !absolute !top-[72px]"
                                iconButtonDarkIcon={<IconsMenu24Px className="!relative !w-[24px] !h-[24px]" color="#BFC8CB" />}
                                override={<IconsSearch24Px className="!relative !w-[24px] !h-[24px]" color="#BFC8CB" />}
                                placeholderText="绿巨人"
                                showAvatar
                                stateProp="enabled"
                                userImagesUserText="名"
                            />
                            <div className="inline-flex flex-col items-center gap-[8px] absolute top-[152px] left-0">
                                <GenderedCardDark
                                    mediaClassName="bg-[url(/img/media-3.png)]"
                                    style="filled"
                                    subheadClassName="!whitespace-nowrap ![text-align:unset] !w-fit"
                                    text="绿巨人 Hulk Smash"
                                    text1="CBR No.: 1231231233"
                                />
                                <GenderedCardDark
                                    genderIconGender="female"
                                    mediaClassName="bg-[url(/img/media-3.png)]"
                                    style="filled"
                                    subheadClassName="!whitespace-nowrap ![text-align:unset] !w-fit"
                                    text="勇猛小旋风 Brave Tornado"
                                    text1="CBR No.: 1231231234"
                                />
                                <GenderedCardDark
                                    genderIconGender="female"
                                    mediaClassName="bg-[url(/img/media.png)]"
                                    style="filled"
                                    subheadClassName="!whitespace-nowrap ![text-align:unset] !w-fit"
                                    text="钟无艳 Ms. Zhong"
                                    text1="CBR No.: 1231231254"
                                />
                                <GenderedCardDark
                                    genderIconGender="male"
                                    mediaClassName="bg-[url(/img/media.png)]"
                                    style="filled"
                                    subheadClassName="!whitespace-nowrap ![text-align:unset] !w-fit"
                                    text="将太无二 No.1"
                                    text1="CBR No.: 19823984"
                                />
                                <GenderedCardDark
                                    genderIconGender="male"
                                    mediaClassName="bg-[url(/img/media.png)]"
                                    style="filled"
                                    subheadClassName="!whitespace-nowrap ![text-align:unset] !w-fit"
                                    text="Dash Only English Name"
                                    text1="CBR No.: 1231211233"
                                />
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;