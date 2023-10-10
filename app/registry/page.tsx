import React from "react";
import { GenderedCardDark } from "@/components/generated/GenderedCardDark";
import { HorizontalDarkWith } from "@/components/generated/HorizontalDarkWith";
import { SearchBarDark } from "@/components/generated/SearchBarDark";
import { SegmentedButton } from "@/components/generated/SegmentedButton";
import { IconsMenu24Px } from "@/components/icons/IconsMenu24Px";
import { IconsSearch24Px } from "@/components/icons/IconsSearch24Px";

const SearchPage = () => {
    return (
        <>
            <div className="flex flex-col w-full items-center">
                <SegmentedButton
                    buildingBlocksLabelText="宠物名"
                    className=""
                    density="zero"
                    segments="two_1"
                    stateDisabledWrapperLabelText="芯片号"
                />
                <SearchBarDark
                    className="mt-6"
                    iconButtonDarkIcon={<IconsMenu24Px className="!relative !w-[24px] !h-[24px]" color="#BFC8CB" />}
                    override={<IconsSearch24Px className="!relative !w-[24px] !h-[24px]" color="#BFC8CB" />}
                    placeholderText="绿巨人"
                    showAvatar
                    stateProp="enabled"
                    userImagesUserText="名"
                />
                <div className="w-full inline-flex flex-col items-center gap-[8px] mt-6">
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
        </>
    );
};

export default SearchPage;