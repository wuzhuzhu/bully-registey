/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SelectedIcon } from "../../icons/SelectedIcon";
import { StyleAvatar } from "../../icons/StyleAvatar";

export const UserImagesUser = ({ style, styleCheckClassName, initialClassName, text = "A" }) => {
  return (
    <>
      {["check", "monogram"].includes(style) && (
        <div
          className={`w-[40px] h-[40px] relative ${style === "check" ? "bg-[100%_100%]" : ""} ${
            style === "check" ? "bg-[url(/img/background.svg)]" : ""
          } ${style === "monogram" ? "overflow-hidden" : ""} ${style === "monogram" ? "rounded-[20px]" : ""} ${
            style === "monogram" ? "bg-m3syslightprimary-container" : ""
          } ${styleCheckClassName}`}
        >
          {style === "check" && (
            <SelectedIcon className="!absolute !w-[24px] !h-[24px] !top-[8px] !left-[8px]" color="#7C5800" />
          )}

          {style === "monogram" && (
            <div
              className={`absolute w-[40px] h-[40px] -top-px left-0 [font-family:'Roboto',Helvetica] font-medium text-m-3syslightprimary text-[16px] text-center tracking-[0.10px] leading-[24px] ${initialClassName}`}
            >
              {text}
            </div>
          )}
        </div>
      )}

      {style === "avatar" && <StyleAvatar className="!absolute !w-[40px] !h-[40px] !top-0 !left-0" />}
    </>
  );
};

UserImagesUser.propTypes = {
  style: PropTypes.oneOf(["avatar", "check", "monogram"]),
  text: PropTypes.string,
};
