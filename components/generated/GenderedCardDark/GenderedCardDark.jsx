/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CardStateLayer } from "../CardStateLayer";
import { GenderIcon } from "../GenderIcon";

export const GenderedCardDark = ({
  style,
  text = "Header",
  subheadClassName,
  text1 = "Subhead",
  mediaClassName,
  genderIconGender = "male",
}) => {
  return (
    <div className="relative flex h-[80px] w-full items-start rounded-[12px]">
      <div className="relative flex-1 grow self-stretch overflow-hidden rounded-[12px] border border-solid border-m3sysdarkoutline-variant bg-m3sysdarksurface-container-highest">
        <div className="relative flex h-[80px] w-full items-center">
          <div className="relative flex flex-1 grow items-center gap-[16px] p-[16px]">
            <GenderIcon gender={genderIconGender} />
            <div className="relative flex flex-1 grow flex-col items-start gap-[4px]">
              <div className="relative mt-[-1.00px] self-stretch font-m3-title-medium text-[length:var(--m3-title-medium-font-size)] font-[number:var(--m3-title-medium-font-weight)] leading-[var(--m3-title-medium-line-height)] tracking-[var(--m3-title-medium-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-title-medium-font-style)]">
                {text}
              </div>
              <div
                className={`relative w-[56.81px] text-center font-m3-body-medium text-[length:var(--m3-body-medium-font-size)] font-[number:var(--m3-body-medium-font-weight)] leading-[var(--m3-body-medium-line-height)] tracking-[var(--m3-body-medium-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-body-medium-font-style)] ${subheadClassName}`}
              >
                {text1}
              </div>
            </div>
          </div>
          <div
            className={`relative w-[80px] self-stretch border-b border-r border-t border-m3sysdarkoutline-variant bg-[url(/img/media-5.png)] bg-cover bg-[50%_50%] [border-bottom-style:solid] [border-right-style:solid] [border-top-style:solid] ${mediaClassName}`}
          />
        </div>
      </div>
    </div>
  );
};

GenderedCardDark.propTypes = {
  style: PropTypes.oneOf(["filled", "outlined", "elevated"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  genderIconGender: PropTypes.string,
};
