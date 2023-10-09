/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

"use client";

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconsLocalTaxi } from "../IconsLocalTaxi";

export const AssistiveChipDark = ({
  labelText = "Label",
  style,
  configuration,
  stateProp,
  className,
  override = (
    <IconsLocalTaxi
      className="!h-[18px] !w-[18px]"
      icon="/img/icon-26.svg"
      iconClassName="!h-[14px] !left-[2px] !w-[14px] !top-[2px]"
    />
  ),
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "outlined",
    configuration: configuration || "label-only",
    state: stateProp || "enabled",
  });

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-[8px] ${
        (state.configuration === "label-brand-icon" &&
          state.state === "disabled" &&
          state.style === "elevated") ||
        (state.configuration === "label-brand-icon" &&
          state.state === "dragged" &&
          state.style === "elevated") ||
        (state.configuration === "label-brand-icon" &&
          state.state === "pressed" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" &&
          state.state === "disabled" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" &&
          state.state === "dragged" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" &&
          state.state === "pressed" &&
          state.style === "elevated")
          ? "border-0 border-none"
          : (state.configuration === "label-brand-icon" &&
              state.state === "focused" &&
              state.style === "elevated") ||
            (state.configuration === "label-favicon" &&
              state.state === "focused" &&
              state.style === "elevated") ||
            (state.configuration === "label-icon" &&
              state.state === "focused" &&
              state.style === "elevated") ||
            state.style === "outlined"
          ? "border border-solid"
          : ""
      } ${
        (state.configuration === "label-brand-icon" &&
          state.state === "disabled" &&
          state.style === "elevated") ||
        (state.configuration === "label-brand-icon" &&
          state.state === "dragged" &&
          state.style === "elevated") ||
        (state.configuration === "label-brand-icon" &&
          state.state === "focused") ||
        (state.configuration === "label-brand-icon" &&
          state.state === "pressed") ||
        (state.configuration === "label-favicon" &&
          state.state === "focused") ||
        (state.configuration === "label-favicon" &&
          state.state === "pressed" &&
          state.style === "outlined") ||
        (state.configuration === "label-icon" &&
          state.state === "disabled" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" &&
          state.state === "dragged" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" && state.state === "focused") ||
        (state.configuration === "label-icon" && state.state === "pressed") ||
        (state.configuration === "label-only" &&
          state.state === "pressed" &&
          state.style === "outlined") ||
        (state.state === "dragged" && state.style === "outlined") ||
        (state.state === "enabled" && state.style === "outlined") ||
        (state.state === "hovered" && state.style === "outlined")
          ? "border-m-3sysdarkoutline"
          : state.style === "outlined" && state.state === "disabled"
          ? "border-m3state-layersdarkon-surfaceopacity-012"
          : state.configuration === "label-only" &&
            state.style === "outlined" &&
            state.state === "focused"
          ? "border-m3sysdarkon-surface"
          : ""
      } ${
        state.style === "elevated" &&
        ["dragged", "pressed"].includes(state.state)
          ? "shadow-m3-elevation-dark-2"
          : state.style === "elevated" &&
            ["enabled", "focused", "hovered"].includes(state.state)
          ? "shadow-m3-elevation-dark-1"
          : ""
      } ${
        (state.configuration === "label-brand-icon" &&
          state.state === "dragged" &&
          state.style === "elevated") ||
        (state.configuration === "label-brand-icon" &&
          state.state === "pressed" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" &&
          state.state === "disabled" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" &&
          state.state === "dragged" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" &&
          state.state === "pressed" &&
          state.style === "elevated")
          ? "h-[34px]"
          : (state.configuration === "label-brand-icon" &&
              state.state === "dragged" &&
              state.style === "outlined") ||
            (state.configuration === "label-brand-icon" &&
              state.state === "focused" &&
              state.style === "elevated") ||
            (state.configuration === "label-brand-icon" &&
              state.state === "hovered") ||
            (state.configuration === "label-brand-icon" &&
              state.state === "pressed" &&
              state.style === "outlined") ||
            (state.configuration === "label-favicon" &&
              state.state === "dragged") ||
            (state.configuration === "label-favicon" &&
              state.state === "focused") ||
            (state.configuration === "label-favicon" &&
              state.state === "hovered") ||
            (state.configuration === "label-favicon" &&
              state.state === "pressed") ||
            (state.configuration === "label-icon" &&
              state.state === "dragged" &&
              state.style === "outlined") ||
            (state.configuration === "label-icon" &&
              state.state === "enabled" &&
              state.style === "elevated") ||
            (state.configuration === "label-icon" &&
              state.state === "focused") ||
            (state.configuration === "label-icon" &&
              state.state === "hovered") ||
            (state.configuration === "label-icon" &&
              state.state === "pressed" &&
              state.style === "outlined") ||
            state.configuration === "label-only"
          ? "h-[32px]"
          : ""
      } ${
        (state.configuration === "label-brand-icon" &&
          state.state === "disabled" &&
          state.style === "elevated") ||
        (state.configuration === "label-favicon" &&
          state.state === "disabled" &&
          state.style === "elevated") ||
        (state.configuration === "label-icon" &&
          state.state === "disabled" &&
          state.style === "elevated")
          ? "bg-m3state-layersdarkon-surfaceopacity-012"
          : (state.configuration === "label-icon" &&
              state.state === "enabled" &&
              state.style === "elevated") ||
            (state.configuration === "label-only" &&
              state.state === "enabled" &&
              state.style === "elevated") ||
            (state.state === "dragged" && state.style === "elevated") ||
            (state.state === "focused" && state.style === "elevated") ||
            (state.state === "hovered" && state.style === "elevated") ||
            (state.state === "pressed" && state.style === "elevated")
          ? "bg-m3sysdarksurface-container-low"
          : (state.state === "dragged" && state.style === "outlined") ||
            (state.state === "focused" && state.style === "outlined") ||
            (state.state === "hovered" && state.style === "outlined") ||
            (state.state === "pressed" && state.style === "outlined")
          ? "bg-m-3sysdarksurface"
          : ""
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div
        className={`relative inline-flex h-[32px] flex-[0_0_auto] items-center justify-center gap-[8px] ${
          (state.configuration === "label-brand-icon" &&
            state.state === "enabled" &&
            state.style === "elevated") ||
          (state.configuration === "label-favicon" &&
            state.state === "enabled" &&
            state.style === "elevated") ||
          (state.configuration === "label-icon" &&
            state.state === "enabled" &&
            state.style === "elevated")
            ? "shadow-m3-elevation-dark-1"
            : ""
        } ${
          state.configuration === "label-only"
            ? "px-[16px] py-[6px]"
            : "py-[6px] pl-[8px] pr-[16px]"
        } ${
          state.style === "elevated" &&
          state.state === "disabled" &&
          state.configuration === "label-only"
            ? "bg-m3state-layersdarkon-surfaceopacity-012"
            : state.state === "dragged"
            ? "bg-m3state-layersdarkon-surface-variantopacity-016"
            : ["focused", "pressed"].includes(state.state)
            ? "bg-m3state-layersdarkon-surface-variantopacity-012"
            : state.state === "hovered"
            ? "bg-m3state-layersdarkon-surface-variantopacity-008"
            : state.state === "enabled" &&
              state.style === "elevated" &&
              ["label-brand-icon", "label-favicon"].includes(
                state.configuration,
              )
            ? "bg-m3sysdarksurface-container-low"
            : ""
        }`}
      >
        {["label-brand-icon", "label-icon"].includes(state.configuration) && (
          <>{override}</>
        )}

        {state.configuration === "label-favicon" && (
          <img
            className="relative h-[18px] w-[18px]"
            alt="Favicon"
            src={
              state.style === "outlined" && state.state === "disabled"
                ? "/img/favicon-10.svg"
                : state.style === "elevated" && state.state === "dragged"
                ? "/img/favicon-9.svg"
                : state.style === "outlined" && state.state === "dragged"
                ? "/img/favicon-8.svg"
                : state.style === "elevated" && state.state === "pressed"
                ? "/img/favicon-7.svg"
                : state.style === "outlined" && state.state === "pressed"
                ? "/img/favicon-6.svg"
                : state.style === "elevated" && state.state === "focused"
                ? "/img/favicon-5.svg"
                : state.style === "outlined" && state.state === "focused"
                ? "/img/favicon-4.svg"
                : state.style === "elevated" && state.state === "hovered"
                ? "/img/favicon-3.svg"
                : state.state === "hovered" && state.style === "outlined"
                ? "/img/favicon-2.svg"
                : state.style === "elevated" && state.state === "enabled"
                ? "/img/favicon-1.svg"
                : state.style === "outlined" && state.state === "enabled"
                ? "/img/favicon.svg"
                : "/img/favicon-11.svg"
            }
          />
        )}

        <div
          className={`font-m3-label-large text-m3sysdarkon-surface relative w-fit whitespace-nowrap text-center text-[length:var(--m3-label-large-font-size)] font-[number:var(--m3-label-large-font-weight)] leading-[var(--m3-label-large-line-height)] tracking-[var(--m3-label-large-letter-spacing)] [font-style:var(--m3-label-large-font-style)] ${
            (state.configuration === "label-brand-icon" &&
              state.state === "disabled") ||
            (state.configuration === "label-brand-icon" &&
              state.state === "dragged") ||
            (state.configuration === "label-brand-icon" &&
              state.state === "enabled" &&
              state.style === "outlined") ||
            (state.configuration === "label-brand-icon" &&
              state.state === "focused") ||
            (state.configuration === "label-brand-icon" &&
              state.state === "hovered" &&
              state.style === "outlined") ||
            (state.configuration === "label-brand-icon" &&
              state.state === "pressed") ||
            (state.configuration === "label-favicon" &&
              state.state === "disabled") ||
            (state.configuration === "label-favicon" &&
              state.state === "dragged") ||
            (state.configuration === "label-favicon" &&
              state.state === "enabled" &&
              state.style === "outlined") ||
            (state.configuration === "label-favicon" &&
              state.state === "focused") ||
            (state.configuration === "label-favicon" &&
              state.state === "hovered" &&
              state.style === "outlined") ||
            (state.configuration === "label-favicon" &&
              state.state === "pressed") ||
            (state.configuration === "label-icon" &&
              state.state === "disabled" &&
              state.style === "elevated") ||
            (state.configuration === "label-icon" &&
              state.state === "dragged" &&
              state.style === "elevated") ||
            (state.configuration === "label-icon" &&
              state.state === "focused" &&
              state.style === "elevated") ||
            (state.configuration === "label-icon" &&
              state.state === "pressed" &&
              state.style === "elevated") ||
            (state.configuration === "label-icon" &&
              state.style === "outlined") ||
            (state.configuration === "label-only" &&
              state.state === "disabled" &&
              state.style === "outlined") ||
            (state.configuration === "label-only" &&
              state.state === "dragged") ||
            (state.configuration === "label-only" &&
              state.state === "enabled") ||
            (state.configuration === "label-only" &&
              state.state === "focused") ||
            (state.configuration === "label-only" &&
              state.state === "hovered" &&
              state.style === "outlined") ||
            (state.configuration === "label-only" &&
              state.state === "pressed") ||
            (state.state === "hovered" && state.style === "elevated")
              ? "mt-[-1.00px]"
              : ""
          } ${state.state === "disabled" ? "opacity-[0.38]" : ""}`}
        >
          {labelText}
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

AssistiveChipDark.propTypes = {
  labelText: PropTypes.string,
  style: PropTypes.oneOf(["outlined", "elevated"]),
  configuration: PropTypes.oneOf([
    "label-only",
    "label-favicon",
    "label-brand-icon",
    "label-icon",
  ]),
  stateProp: PropTypes.oneOf([
    "enabled",
    "focused",
    "pressed",
    "hovered",
    "dragged",
    "disabled",
  ]),
};
