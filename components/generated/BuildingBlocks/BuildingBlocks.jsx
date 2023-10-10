/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

"use client";

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon15 } from "../../icons/Icon15";
import { SelectedIcon } from "../../icons/SelectedIcon";

export const BuildingBlocks = ({
  labelText = "Label",
  stateProp,
  configuration,
  selected,
  className,
  labelTextClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "enabled",
    configuration: configuration || "label-only",
    selected: selected || true,
  });

  return (
    <div
      className={`relative flex h-[48px] w-[108px] items-center justify-center px-0 py-[4px] ${
        ["focused", "hovered", "pressed"].includes(state.state)
          ? "flex-col"
          : ""
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`relative flex flex-1 grow items-center justify-center self-stretch overflow-hidden rounded-[100px_0px_0px_100px] border border-solid ${
          state.state === "disabled"
            ? "border-m3state-layersdarkoutlineopacity-012"
            : "border-m-3sysdarkoutline"
        } ${
          ["focused", "hovered", "pressed"].includes(state.state)
            ? "w-full"
            : ""
        } ${
          (state.configuration === "icon-only" &&
            state.selected &&
            state.state === "enabled") ||
          (state.configuration === "label-icon" &&
            state.state === "disabled") ||
          (state.configuration === "label-icon" && state.state === "enabled") ||
          (state.configuration === "label-only" &&
            state.state === "disabled") ||
          (state.configuration === "label-only" && state.state === "enabled") ||
          state.state === "focused" ||
          state.state === "hovered" ||
          state.state === "pressed"
            ? "flex-col"
            : ""
        } ${state.selected ? "bg-m3sysdarksecondary-container" : ""}`}
      >
        <div
          className={`relative flex flex-1 grow items-center justify-center gap-[8px] self-stretch px-[12px] py-[10px] ${
            (state.configuration === "icon-only" &&
              state.selected &&
              state.state === "enabled") ||
            (state.configuration === "label-icon" &&
              state.state === "disabled") ||
            (state.configuration === "label-icon" &&
              state.state === "enabled") ||
            (state.configuration === "label-only" &&
              state.state === "disabled") ||
            (state.configuration === "label-only" &&
              state.state === "enabled") ||
            state.state === "focused" ||
            state.state === "hovered" ||
            state.state === "pressed"
              ? "w-full"
              : ""
          } ${
            ["focused", "pressed"].includes(state.state)
              ? "bg-m3state-layersdarkon-secondary-containeropacity-012"
              : state.state === "hovered"
              ? "bg-m3state-layersdarkon-secondary-containeropacity-008"
              : ""
          }`}
        >
          {!state.selected &&
            ["icon-only", "label-icon"].includes(state.configuration) && (
              <Icon15
                className="!relative !h-[18px] !w-[18px]"
                color="#CBC6BD"
                opacity={state.state === "disabled" ? "0.38" : undefined}
              />
            )}

          {state.configuration === "label-only" && !state.selected && (
            <div
              className={`relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-label-large-font-style)] ${
                state.state === "disabled" ? "opacity-[0.38]" : ""
              }`}
            >
              {labelText}
            </div>
          )}

          {state.configuration === "label-icon" && !state.selected && (
            <div
              className={`relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-m3-label-large text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] text-m3sysdarkon-surface [font-style:var(--m3-label-large-font-style)] ${
                state.state === "disabled" ? "opacity-[0.38]" : ""
              } ${labelTextClassName}`}
            >
              {labelText}
            </div>
          )}

          {state.selected && (
            <SelectedIcon
              className="!relative !h-[18px] !w-[18px]"
              color="#E1DFFF"
            />
          )}

          {state.selected && state.configuration === "icon-only" && (
            <Icon15 className="!relative !h-[18px] !w-[18px]" color="#E1DFFF" />
          )}

          {state.selected &&
            ["label-icon", "label-only"].includes(state.configuration) && (
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

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

BuildingBlocks.propTypes = {
  labelText: PropTypes.string,
  stateProp: PropTypes.oneOf([
    "enabled",
    "focused",
    "pressed",
    "hovered",
    "disabled",
  ]),
  configuration: PropTypes.oneOf(["icon-only", "label-only", "label-icon"]),
  selected: PropTypes.bool,
};
