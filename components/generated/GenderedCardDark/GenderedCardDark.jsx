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
    <div className="w-[360px] flex items-start h-[80px] rounded-[12px] relative">
      {["elevated", "outlined"].includes(style) && (
        <div
          className={`w-[360px] left-0 top-0 h-[80px] overflow-hidden rounded-[12px] absolute ${
            style === "outlined" ? "border border-solid" : ""
          } ${style === "outlined" ? "border-m3sysdarkoutline-variant" : ""} ${
            style === "elevated" ? "shadow-m3-elevation-dark-1" : ""
          } ${style === "elevated" ? "bg-m3sysdarksurface-container-low" : "bg-m-3sysdarksurface"}`}
        >
          <div className="h-[80px]" />
        </div>
      )}

      {style === "filled" && (
        <CardStateLayer
          className="!h-[80px] !absolute !left-0 !top-0"
          state="enabled"
          stateLayerClassName="!h-[80px]"
        />
      )}

      <div className="border border-solid border-m3sysdarkoutline-variant self-stretch grow flex-1 overflow-hidden rounded-[12px] relative">
        <div className="w-[360px] flex items-center h-[80px] relative">
          <div className="flex items-center grow gap-[16px] flex-1 p-[16px] relative">
            <GenderIcon gender={genderIconGender} />
            <div className="flex flex-col items-start grow gap-[4px] flex-1 relative">
              <div className="font-m3-title-medium self-stretch mt-[-1.00px] tracking-[var(--m3-title-medium-letter-spacing)] text-[length:var(--m3-title-medium-font-size)] [font-style:var(--m3-title-medium-font-style)] text-m3sysdarkon-surface relative font-[number:var(--m3-title-medium-font-weight)] leading-[var(--m3-title-medium-line-height)]">
                {text}
              </div>
              <div
                className={`font-m3-body-medium w-[56.81px] tracking-[var(--m3-body-medium-letter-spacing)] [font-style:var(--m3-body-medium-font-style)] text-[length:var(--m3-body-medium-font-size)] text-m3sysdarkon-surface relative font-[number:var(--m3-body-medium-font-weight)] text-center leading-[var(--m3-body-medium-line-height)] ${subheadClassName}`}
              >
                {text1}
              </div>
            </div>
          </div>
          <div
            className={`[border-bottom-style:solid] [border-right-style:solid] border-m3sysdarkoutline-variant w-[80px] border-t self-stretch [border-top-style:solid] border-r bg-cover bg-[url(/img/media-5.png)] border-b bg-[50%_50%] relative ${mediaClassName}`}
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
