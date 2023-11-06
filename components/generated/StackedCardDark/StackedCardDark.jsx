/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon39 } from "../../icons/Icon39";
import { IconsMoreVert24Px1 } from "../../icons/IconsMoreVert24Px1";
import { AssistiveChipDark } from "../AssistiveChipDark";
import { IconButtonDark } from "../IconButtonDark";
import { IconsLocalTaxi } from "../IconsLocalTaxi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "next/image";

import { IconsMale3 } from "@/components/icons/IconsMale3";
import { IconsFemap24Px2 } from "@/components/icons/IconsFemap24Px2";
import { Cake, Palette, ShieldCheck, Tag } from "lucide-react";

export const StackedCardDark = ({
  style,
  className,
  cardStateLayerStateEnabledClassName,
  mediaTextContentClassName,
  headerClassName,
  text,
  subText,
  iconButtonDarkIcon = (
    <IconsMoreVert24Px1
      className="!relative !h-[24px] !w-[24px]"
      color="#BFC8CB"
    />
  ),
  mediaClassName,
  titleClassName,
  text1,
  subheadClassName,
  location,
  supportingTextClassName,
  assistiveChipDark = <Icon39 className="!relative !h-[18px] !w-[18px]" />,
  ownerMobile,
  override = (
    <IconsLocalTaxi
      className="!h-[18px] !w-[18px]"
      icon="/img/icon-26.svg"
      iconClassName="!h-[14px] !left-[2px] !w-[14px] !top-[2px]"
    />
  ),
  breed,
  birthDate,
  color,
  gender,
  img,
  avatar,
  createdAt,
  breeder,
}) => {
  return (
    <div
      className={`relative flex h-[480px] w-full items-start rounded-[12px] ${className}`}
    >
      {["bully", "outlined"].includes(style) && (
        <>
          <div className="relative flex-1 grow self-stretch overflow-hidden rounded-[12px] border border-solid border-m3sysdarkoutline-variant bg-m-3sysdarksurface">
            <div
              className={`relative flex h-[480px] w-full flex-col items-center ${mediaTextContentClassName}`}
            >
              <div className="relative flex h-[72px] w-full items-center self-stretch py-[12px] pl-[16px] pr-[4px]">
                <div className="relative flex flex-1 grow items-center gap-[16px]">
                  <Avatar className="relative h-10 w-10 overflow-hidden rounded-full bg-m-3sysdarkprimary">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>Dog</AvatarFallback>
                  </Avatar>
                  <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                    <div
                      className={`relative mt-[-1.00px] self-stretch font-m3-title-medium text-[length:var(--m3-title-medium-font-size)] font-[number:var(--m3-title-medium-font-weight)] leading-[var(--m3-title-medium-line-height)] tracking-[var(--m3-title-medium-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-title-medium-font-style)] ${headerClassName}`}
                    >
                      {style === "outlined" && <>Header</>}

                      {style === "bully" && (
                        <div className="flex items-center gap-1">
                          <p className="line-clamp-1">{text}</p>
                          {gender === "MALE" && <IconsMale3 color="#C1C1FF" />}
                          {gender === "FEMALE" && (
                            <IconsFemap24Px2 color="#BED061" />
                          )}
                        </div>
                      )}
                    </div>
                    <div
                      className={`relative font-m3-body-medium text-[length:var(--m3-body-medium-font-size)] font-[number:var(--m3-body-medium-font-weight)] leading-[var(--m3-body-medium-line-height)] tracking-[var(--m3-body-medium-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-body-medium-font-style)] ${
                        style === "outlined" ? "w-[56.81px]" : ""
                      } ${style === "bully" ? "self-stretch" : ""} ${
                        style === "outlined" ? "text-center" : ""
                      }`}
                    >
                      {style === "outlined" && <>Subhead</>}

                      {style === "bully" && subText && (
                        <p className="line-clamp-1">{`CBR NO. ${subText}`}</p>
                      )}
                    </div>
                  </div>
                </div>
                <IconButtonDark
                  icon={iconButtonDarkIcon}
                  stateProp="enabled"
                  style="standard"
                />
              </div>

              <div className="relative w-full flex-1 grow overflow-hidden">
                <Image className="object-cover" src={img} fill alt={text} />
              </div>
              <div
                className={`relative flex w-full flex-[0_0_auto] flex-col items-start self-stretch p-[16px] ${
                  style === "bully" ? "gap-[16px]" : "gap-[32px]"
                }`}
              >
                {style === "outlined" && (
                  <>
                    <div className="relative flex w-full flex-[0_0_auto] flex-col items-start self-stretch">
                      <div className="relative mt-[-1.00px] w-full font-m3-body-large text-[length:var(--m3-body-large-font-size)] font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] tracking-[var(--m3-body-large-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-body-large-font-style)]">
                        Title
                      </div>
                      <div className="relative w-full font-m3-body-medium text-[length:var(--m3-body-medium-font-size)] font-[number:var(--m3-body-medium-font-weight)] leading-[var(--m3-body-medium-line-height)] tracking-[var(--m3-body-medium-letter-spacing)] text-m3sysdarkon-surface-variant [font-style:var(--m3-body-medium-font-style)]">
                        Subhead
                      </div>
                    </div>
                    <p
                      className={`relative self-stretch font-m3-body-medium text-[length:var(--m3-body-medium-font-size)] font-[number:var(--m3-body-medium-font-weight)] leading-[var(--m3-body-medium-line-height)] tracking-[var(--m3-body-medium-letter-spacing)] text-m3sysdarkon-surface-variant [font-style:var(--m3-body-medium-font-style)] ${supportingTextClassName}`}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </>
                )}

                <div
                  className={`relative flex w-full flex-[0_0_auto] self-stretch ${
                    style === "outlined" ? "items-start" : "items-center"
                  } ${style === "outlined" ? "gap-[8px]" : "gap-[10px]"} ${
                    style === "outlined" ? "justify-end" : "justify-around"
                  }`}
                >
                  {style === "bully" && (
                    <div className="relative flex flex-1 grow flex-col items-start">
                      {text1 && (
                        <div
                          className={`relative mt-[-1.00px] w-full font-m3-body-large text-[length:var(--m3-body-large-font-size)] font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] tracking-[var(--m3-body-large-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-body-large-font-style)] ${titleClassName}`}
                        >
                          {text1}
                        </div>
                      )}
                      {location && (
                        <div
                          className={`relative mt-[-1.00px] w-full font-m3-body-large text-[length:var(--m3-body-large-font-size)] font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] tracking-[var(--m3-body-large-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-body-large-font-style)] ${titleClassName}`}
                        >
                          位置 City：{location}
                        </div>
                      )}
                      {breeder && (
                        <div
                          className={`relative w-full font-m3-body-medium text-[length:var(--m3-body-medium-font-size)] font-[number:var(--m3-body-medium-font-weight)] leading-[var(--m3-body-medium-line-height)] tracking-[var(--m3-body-medium-letter-spacing)] text-m3sysdarkon-surface-variant [font-style:var(--m3-body-medium-font-style)] ${subheadClassName}`}
                        >
                          {breeder}
                        </div>
                      )}
                    </div>
                  )}

                  {style === "outlined" && (
                    <>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center overflow-hidden rounded-[100px] border border-solid border-m-3sysdarkoutline">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8px] self-stretch px-[24px] py-[10px]">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m-3sysdarkprimary [font-style:var(--m3-label-large-font-style)]">
                            Enabled
                          </div>
                        </div>
                      </div>
                      <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center overflow-hidden rounded-[100px] bg-m-3sysdarkprimary">
                        <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8px] self-stretch px-[24px] py-[10px]">
                          <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m3sysdarkon-primary [font-style:var(--m3-label-large-font-style)]">
                            Enabled
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {style === "bully" && (
                  <div
                    className={`no-scrollbar relative flex w-full flex-[0_0_auto] items-center gap-[10px] self-stretch overflow-x-scroll ${supportingTextClassName}`}
                  >
                    {/* {ownerMobile && (
                      <AssistiveChipDark
                        className="!flex-[0_0_auto]"
                        configuration="label-icon"
                        labelText={ownerMobile}
                        override={assistiveChipDark}
                        stateProp="enabled"
                        style="outlined"
                      />
                    )} */}
                    {breed && (
                      <AssistiveChipDark
                        className="!flex-[0_0_auto]"
                        configuration="label-icon"
                        override={<Tag color="#F8BD48" size={18} />}
                        labelText={breed}
                        stateProp="enabled"
                        style="outlined"
                      />
                    )}
                    {color && (
                      <AssistiveChipDark
                        className="!flex-[0_0_auto]"
                        configuration="label-icon"
                        labelText={color}
                        override={<Palette color="#F8BD48" size={18} />}
                        stateProp="enabled"
                        style="outlined"
                      />
                    )}
                    {birthDate && (
                      <AssistiveChipDark
                        className="!flex-[0_0_auto]"
                        configuration="label-icon"
                        labelText={birthDate}
                        override={<Cake color="#F8BD48" size={18} />}
                        stateProp="enabled"
                        style="outlined"
                      />
                    )}
                    {createdAt && (
                      <AssistiveChipDark
                        className="!flex-[0_0_auto]"
                        configuration="label-icon"
                        labelText={createdAt}
                        override={<ShieldCheck color="#F8BD48" size={18} />}
                        stateProp="enabled"
                        style="outlined"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {["elevated", "filled"].includes(style) && (
        <>
          <div
            className={`absolute left-0 top-0 h-[480px] w-full overflow-hidden rounded-[12px] ${
              style === "elevated" ? "shadow-m3-elevation-dark-1" : ""
            } ${
              style === "filled"
                ? "bg-m3sysdarksurface-container-highest"
                : "bg-m3sysdarksurface-container-low"
            }`}
          >
            <div className="h-[480px]" />
          </div>
          <div className="relative flex-1 grow self-stretch overflow-hidden rounded-[12px]">
            <div
              className={`relative flex h-[480px] w-full flex-col items-center ${mediaTextContentClassName}`}
            >
              <div className="relative flex h-[72px] w-full items-center self-stretch py-[12px] pl-[16px] pr-[4px]">
                <div className="relative flex flex-1 grow items-center gap-[16px]">
                  <div className="relative h-[40px] w-[40px] overflow-hidden rounded-[20px] bg-m-3sysdarkprimary">
                    <div className="absolute -top-px left-0 h-[40px] w-[40px] text-center font-m3-title-medium text-[length:var(--m3-title-medium-font-size)] font-[number:var(--m3-title-medium-font-weight)] leading-[var(--m3-title-medium-line-height)] tracking-[var(--m3-title-medium-letter-spacing)] text-m-3sysdarksurface [font-style:var(--m3-title-medium-font-style)]">
                      A
                    </div>
                  </div>
                  <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
                    <div
                      className={`relative mt-[-1.00px] self-stretch font-m3-title-medium text-[length:var(--m3-title-medium-font-size)] font-[number:var(--m3-title-medium-font-weight)] leading-[var(--m3-title-medium-line-height)] tracking-[var(--m3-title-medium-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-title-medium-font-style)] ${headerClassName}`}
                    >
                      Header
                    </div>
                    <div className="relative w-[56.81px] text-center font-m3-body-medium text-[length:var(--m3-body-medium-font-size)] font-[number:var(--m3-body-medium-font-weight)] leading-[var(--m3-body-medium-line-height)] tracking-[var(--m3-body-medium-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-body-medium-font-style)]">
                      Subhead
                    </div>
                  </div>
                </div>
                <IconButtonDark
                  icon={iconButtonDarkIcon}
                  stateProp="enabled"
                  style="standard"
                />
              </div>
              <div
                className={`relative w-full flex-1 grow self-stretch bg-[url(/img/media-1.png)] bg-cover bg-[50%_50%] ${mediaClassName}`}
              />
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[32px] self-stretch p-[16px]">
                <div className="relative flex w-full flex-[0_0_auto] flex-col items-start self-stretch">
                  <div className="relative mt-[-1.00px] w-full font-m3-body-large text-[length:var(--m3-body-large-font-size)] font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] tracking-[var(--m3-body-large-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-body-large-font-style)]">
                    Title
                  </div>
                  <div className="relative w-full font-m3-body-medium text-[length:var(--m3-body-medium-font-size)] font-[number:var(--m3-body-medium-font-weight)] leading-[var(--m3-body-medium-line-height)] tracking-[var(--m3-body-medium-letter-spacing)] text-m3sysdarkon-surface-variant [font-style:var(--m3-body-medium-font-style)]">
                    Subhead
                  </div>
                </div>
                <p
                  className={`relative self-stretch font-m3-body-medium text-[length:var(--m3-body-medium-font-size)] font-[number:var(--m3-body-medium-font-weight)] leading-[var(--m3-body-medium-line-height)] tracking-[var(--m3-body-medium-letter-spacing)] text-m3sysdarkon-surface-variant [font-style:var(--m3-body-medium-font-style)] ${supportingTextClassName}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="relative flex w-full flex-[0_0_auto] items-start justify-end gap-[8px] self-stretch">
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center overflow-hidden rounded-[100px] border border-solid border-m-3sysdarkoutline">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8px] self-stretch px-[24px] py-[10px]">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m-3sysdarkprimary [font-style:var(--m3-label-large-font-style)]">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-flex flex-[0_0_auto] flex-col items-center justify-center overflow-hidden rounded-[100px] bg-m-3sysdarkprimary">
                    <div className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8px] self-stretch px-[24px] py-[10px]">
                      <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m3sysdarkon-primary [font-style:var(--m3-label-large-font-style)]">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

StackedCardDark.propTypes = {
  style: PropTypes.oneOf(["filled", "bully", "outlined", "elevated"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  breeder: PropTypes.string,
  location: PropTypes.string,
  subText: PropTypes.string,
  ownerMobile: PropTypes.string,
  breed: PropTypes.string,
  birthDate: PropTypes.string,
  createdAt: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
  avatar: PropTypes.string,
  gender: PropTypes.oneOf(["MALE", "FEMALE"]),
};
