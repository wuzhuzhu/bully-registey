/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FamilyAvatar = ({
  isMale = true,
  state,
  generation,
  isMale1,
  className,
  ellipse = "/img/ellipse-1-11.svg",
  img = "/img/ellipse-1-10.svg",
}) => {
  return (
    <div className={`inline-flex flex-col items-center gap-[8px] p-[4px] rounded-[16px] relative ${className}`}>
      <div
        className={`relative ${
          generation === "two" ? "w-[52px]" : generation === "three" ? "w-[48.5px]" : "w-[68px]"
        } ${generation === "two" ? "h-[52px]" : generation === "three" ? "h-[32px]" : "h-[68px]"} ${
          generation === "one" ? "rounded-[34px]" : generation === "two" ? "rounded-[26px]" : ""
        } ${
          isMale1 && ["one", "two"].includes(generation) ? "bg-m-3sysdarkprimary" : !isMale1 ? "bg-m-3sysdarkerror" : ""
        }`}
      >
        {["one", "two"].includes(generation) && (
          <img
            className={`left-[2px] top-[2px] absolute ${generation === "two" ? "w-[48px]" : "w-[64px]"} ${
              generation === "two" ? "h-[48px]" : "h-[64px]"
            }`}
            alt="Ellipse"
            src={
              generation === "two" && isMale1
                ? "/img/ellipse-1-13.svg"
                : generation === "two" && !isMale1
                ? "/img/ellipse-1-12.svg"
                : generation === "one" && !isMale1
                ? "/img/ellipse-1-9.svg"
                : "/img/ellipse-1.svg"
            }
          />
        )}

        {generation === "three" && (
          <div className="relative w-[48px] h-[32px]">
            <div className="left-[16px] bg-m-3sysdarkerror absolute w-[32px] h-[32px] top-0 rounded-[16px]">
              <img className="absolute w-[30px] h-[30px] top-px left-px" alt="Ellipse" src={ellipse} />
            </div>
            <div className="left-0 bg-m-3sysdarkprimary shadow-m3-elevation-dark-1 absolute w-[32px] h-[32px] top-0 rounded-[16px]">
              <img className="absolute w-[30px] h-[30px] top-px left-px" alt="Ellipse" src={img} />
            </div>
          </div>
        )}
      </div>
      <div className="inline-flex flex-col items-center flex-[0_0_auto] relative">
        <div className="[display:-webkit-box] mt-[-1.00px] [-webkit-line-clamp:1] [font-style:var(--m3-label-small-font-style)] text-m3sysdarkon-surface [-webkit-box-orient:vertical] leading-[var(--m3-label-small-line-height)] font-m3-label-small relative w-[70px] font-[number:var(--m3-label-small-font-weight)] text-center text-[length:var(--m3-label-small-font-size)] tracking-[var(--m3-label-small-letter-spacing)] overflow-hidden text-ellipsis">
          {generation === "three" && <>扫地僧 Monk</>}

          {generation === "one" && isMale1 && <>超级闪电Hulk Smash Jr.</>}

          {(generation === "two" || (!isMale1 && generation === "one")) && <>超级闪电</>}
        </div>
        {["one", "two"].includes(generation) && (
          <div
            className={`font-m3-label-small [display:-webkit-box] tracking-[var(--m3-label-small-letter-spacing)] [-webkit-line-clamp:1] text-[length:var(--m3-label-small-font-size)] [font-style:var(--m3-label-small-font-style)] text-m3sysdarkon-surface font-[number:var(--m3-label-small-font-weight)] overflow-hidden text-center [-webkit-box-orient:vertical] text-ellipsis leading-[var(--m3-label-small-line-height)] relative ${
              generation === "one" && isMale1 ? "w-[85px]" : "w-[70px]"
            }`}
          >
            {generation === "one" && isMale1 && <>超级培育中心</>}

            {(generation === "two" || (!isMale1 && generation === "one")) && <>Hulk Smash Jr.</>}
          </div>
        )}

        {generation === "three" && (
          <>
            <div className="relative w-[70px] mt-[-8px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m-3sysdarksecondary text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
              x
            </div>
            <div className="relative w-[70px] mt-[-8px] font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-m3sysdarkon-surface text-[length:var(--m3-label-small-font-size)] text-center tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-label-small-font-style)]">
              祖母师太 Queen
            </div>
          </>
        )}
      </div>
    </div>
  );
};

FamilyAvatar.propTypes = {
  isMale: PropTypes.bool,
  state: PropTypes.oneOf(["default"]),
  generation: PropTypes.oneOf(["two", "three", "one"]),
  isMale1: PropTypes.bool,
  ellipse: PropTypes.string,
  img: PropTypes.string,
};
