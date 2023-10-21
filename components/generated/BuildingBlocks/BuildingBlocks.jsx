import PropTypes from "prop-types";
import React from "react";
import { Icon15 } from "../../icons/Icon15";
import { SelectedIcon } from "../../icons/SelectedIcon";
import { cn } from "@/lib/utils";

export const BuildingBlocks = ({
  labelText = "Label",
  stateProp,
  side,
  configuration,
  selected,
  disabled,
  className,
  labelTextClassName,
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[48px] w-[108px] items-center justify-center px-0 py-[4px]",
        className,
      )}
    >
      <div
        className={cn(
          `relative flex w-full flex-1 grow items-center justify-center self-stretch overflow-hidden border border-solid border-m-3sysdarkoutline`,
          {
            "bg-m3sysdarksecondary-container": selected,
            "rounded-l-full": side === "left",
            "rounded-r-full": side === "right",
          },
        )}
      >
        <div
          className={`relative flex w-full flex-1 grow items-center justify-center gap-[8px] self-stretch px-[12px] py-[10px] hover:bg-m3state-layersdarkon-secondary-containeropacity-008 focus:bg-m3state-layersdarkon-secondary-containeropacity-012 active:bg-m3state-layersdarkon-secondary-containeropacity-012  `}
        >
          {!selected && ["icon-only", "label-icon"].includes(configuration) && (
            <Icon15
              className="!relative !h-[18px] !w-[18px]"
              color="#CBC6BD"
              opacity={disabled ? "0.38" : undefined}
            />
          )}

          {configuration === "label-only" && !selected && (
            <div
              className={cn(
                "relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-label-large-font-style)]",
                {
                  "opacity-[0.38]": disabled,
                },
              )}
            >
              {labelText}
            </div>
          )}

          {configuration === "label-icon" && !selected && (
            <div
              className={`relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-label-large-font-style)] ${
                disabled ? "opacity-[0.38]" : ""
              } ${labelTextClassName}`}
            >
              {labelText}
            </div>
          )}

          {selected && (
            <SelectedIcon
              className="!relative !h-[18px] !w-[18px]"
              color="#E1DFFF"
            />
          )}

          {selected && configuration === "icon-only" && (
            <Icon15 className="!relative !h-[18px] !w-[18px]" color="#E1DFFF" />
          )}

          {selected && ["label-icon", "label-only"].includes(configuration) && (
            <div
              className={`relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m3sysdarkon-secondary-container [font-style:var(--m3-label-large-font-style)] ${labelTextClassName}`}
            >
              {labelText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
