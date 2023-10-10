/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BuildingBlocks } from "../BuildingBlocks";
import { StateDisabledWrapper } from "../StateDisabledWrapper";

export const SegmentedButton = ({
  segments,
  density,
  className,
  buildingBlocksLabelText = "Label",
  stateDisabledWrapperLabelText = "Label",
}) => {
  return (
    <div
      className={`flex items-center justify-center relative ${
        segments === "four"
          ? "w-[413px]"
          : segments === "three_1"
          ? "w-[310px]"
          : segments === "two_1"
          ? "w-[207px]"
          : "w-[516px]"
      } ${
        density === "two" ? "h-[40px]" : density === "one" ? "h-[44px]" : density === "zero" ? "h-[48px]" : "h-[36px]"
      } ${className}`}
    >
      <BuildingBlocks
        className={
          density === "two"
            ? "!h-[40px] !flex-1 !grow !w-[unset]"
            : density === "one"
            ? "!h-[44px] !flex-1 !grow !w-[unset]"
            : density === "zero"
            ? "!flex-1 !grow !w-[unset]"
            : "!h-[36px] !flex-1 !grow !w-[unset]"
        }
        configuration="label-only"
        labelText={segments === "two_1" ? buildingBlocksLabelText : "Label"}
        labelTextClassName={
          density === "three"
            ? "!mt-[-7.00px] !mb-[-5.00px]"
            : density === "two"
            ? "!mt-[-5.00px] !mb-[-3.00px]"
            : density === "one"
            ? "!mt-[-3.00px] !mb-[-1.00px]"
            : undefined
        }
        selected
        stateProp="enabled"
      />
      {["five", "four", "three_1"].includes(segments) && (
        <div
          className={`flex items-center grow flex-1 -ml-px px-0 py-[4px] justify-center relative ${
            density === "two"
              ? "h-[40px]"
              : density === "one"
              ? "h-[44px]"
              : density === "zero"
              ? "h-[48px]"
              : "h-[36px]"
          }`}
        >
          <div className="border border-solid border-m-3sysdarkoutline flex self-stretch flex-col items-center grow flex-1 justify-center relative">
            <div className="w-full flex self-stretch items-center grow gap-[8px] flex-1 px-[12px] py-[10px] justify-center relative">
              <div
                className={`font-m3-label-large w-fit tracking-[var(--m3-label-large-letter-spacing)] text-[length:var(--m3-label-large-font-size)] [font-style:var(--m3-label-large-font-style)] text-m3sysdarkon-surface font-[number:var(--m3-label-large-font-weight)] text-center whitespace-nowrap leading-[var(--m3-label-large-line-height)] relative ${
                  density === "two"
                    ? "mt-[-5.00px]"
                    : density === "one"
                    ? "mt-[-3.00px]"
                    : density === "zero"
                    ? "mt-[-1.00px]"
                    : "mt-[-7.00px]"
                } ${
                  density === "three"
                    ? "mb-[-5.00px]"
                    : density === "two"
                    ? "mb-[-3.00px]"
                    : density === "one"
                    ? "mb-[-1.00px]"
                    : ""
                }`}
              >
                Label
              </div>
            </div>
          </div>
        </div>
      )}

      {["five", "four"].includes(segments) && (
        <div
          className={`flex items-center grow flex-1 -ml-px px-0 py-[4px] justify-center relative ${
            density === "two"
              ? "h-[40px]"
              : density === "one"
              ? "h-[44px]"
              : density === "zero"
              ? "h-[48px]"
              : "h-[36px]"
          }`}
        >
          <div className="border border-solid border-m-3sysdarkoutline flex self-stretch flex-col items-center grow flex-1 justify-center relative">
            <div className="w-full flex self-stretch items-center grow gap-[8px] flex-1 px-[12px] py-[10px] justify-center relative">
              <div
                className={`font-m3-label-large w-fit tracking-[var(--m3-label-large-letter-spacing)] text-[length:var(--m3-label-large-font-size)] [font-style:var(--m3-label-large-font-style)] text-m3sysdarkon-surface font-[number:var(--m3-label-large-font-weight)] text-center whitespace-nowrap leading-[var(--m3-label-large-line-height)] relative ${
                  density === "two"
                    ? "mt-[-5.00px]"
                    : density === "one"
                    ? "mt-[-3.00px]"
                    : density === "zero"
                    ? "mt-[-1.00px]"
                    : "mt-[-7.00px]"
                } ${density === "two" ? "mb-[-3.00px]" : density === "one" ? "mb-[-1.00px]" : "mb-[-5.00px]"}`}
              >
                Label
              </div>
            </div>
          </div>
        </div>
      )}

      {segments === "five" && (
        <div
          className={`flex items-center grow flex-1 -ml-px px-0 py-[4px] justify-center relative ${
            density === "two"
              ? "h-[40px]"
              : density === "one"
              ? "h-[44px]"
              : density === "zero"
              ? "h-[48px]"
              : "h-[36px]"
          }`}
        >
          <div className="border border-solid border-m-3sysdarkoutline flex self-stretch flex-col items-center grow flex-1 justify-center relative">
            <div className="w-full flex self-stretch items-center grow gap-[8px] flex-1 px-[12px] py-[10px] justify-center relative">
              <div
                className={`font-m3-label-large w-fit tracking-[var(--m3-label-large-letter-spacing)] text-[length:var(--m3-label-large-font-size)] [font-style:var(--m3-label-large-font-style)] text-m3sysdarkon-surface font-[number:var(--m3-label-large-font-weight)] text-center whitespace-nowrap leading-[var(--m3-label-large-line-height)] relative ${
                  density === "two"
                    ? "mt-[-5.00px]"
                    : density === "one"
                    ? "mt-[-3.00px]"
                    : density === "zero"
                    ? "mt-[-1.00px]"
                    : "mt-[-7.00px]"
                } ${density === "two" ? "mb-[-3.00px]" : density === "one" ? "mb-[-1.00px]" : "mb-[-5.00px]"}`}
              >
                Label
              </div>
            </div>
          </div>
        </div>
      )}

      <StateDisabledWrapper
        className={
          density === "two"
            ? "!h-[40px] !-ml-px !flex-1 !grow !w-[unset]"
            : density === "three"
            ? "!h-[36px] !-ml-px !flex-1 !grow !w-[unset]"
            : density === "zero"
            ? "!-ml-px !flex-1 !grow !w-[unset]"
            : "!h-[44px] !-ml-px !flex-1 !grow !w-[unset]"
        }
        configuration="label-only"
        labelText={segments === "two_1" ? stateDisabledWrapperLabelText : "Label"}
        labelTextClassName={
          density === "one"
            ? "!mt-[-3.00px] !mb-[-1.00px]"
            : density === "two"
            ? "!mt-[-5.00px] !mb-[-3.00px]"
            : density === "three"
            ? "!mt-[-7.00px] !mb-[-5.00px]"
            : undefined
        }
        selected={false}
        stateProp="enabled"
      />
    </div>
  );
};

SegmentedButton.propTypes = {
  segments: PropTypes.oneOf(["five", "two_1", "three_1", "four"]),
  density: PropTypes.oneOf(["two", "zero", "three", "one"]),
  buildingBlocksLabelText: PropTypes.string,
  stateDisabledWrapperLabelText: PropTypes.string,
};
