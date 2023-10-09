/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

"use client";

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon15 } from "../../icons/Icon15";

export const IconButtonDark = ({
  style,
  stateProp,
  icon = <Icon15 className="!relative !h-[24px] !w-[24px]" color="#BFC8CB" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "standard",
    state: stateProp || "enabled",
  });

  return (
    <div
      className={`relative flex h-[48px] w-[48px] flex-col items-center justify-center gap-[10px] ${
        state.state === "disabled" && state.style === "standard"
          ? "opacity-[0.38]"
          : ""
      } ${
        (state.state === "disabled" && state.style === "outlined") ||
        (state.state === "disabled" && state.style === "tonal") ||
        (state.state === "enabled" && state.style === "filled") ||
        (state.state === "enabled" && state.style === "tonal")
          ? "p-[8px]"
          : state.style === "outlined" && state.state === "enabled"
          ? "px-[8px] py-0"
          : ""
      }`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`relative inline-flex flex-[0_0_auto] items-center justify-center gap-[10px] overflow-hidden rounded-[100px] ${
          state.style === "outlined" ? "border border-solid" : ""
        } ${
          state.style === "outlined" && state.state === "disabled"
            ? "border-m3state-layersdarkon-surfaceopacity-012"
            : (state.state === "enabled" && state.style === "outlined") ||
              (state.state === "focused" && state.style === "outlined") ||
              (state.state === "hovered" && state.style === "outlined") ||
              (state.state === "pressed" && state.style === "outlined")
            ? "border-m-3sysdarkoutline"
            : ""
        } ${
          (state.state === "disabled" && state.style === "outlined") ||
          (state.state === "disabled" && state.style === "tonal") ||
          (state.state === "enabled" && state.style === "filled") ||
          (state.state === "enabled" && state.style === "tonal")
            ? "mt-[-4.00px]"
            : ""
        } ${
          (state.state === "disabled" && state.style === "outlined") ||
          (state.state === "disabled" && state.style === "tonal") ||
          (state.state === "enabled" && state.style === "filled") ||
          (state.state === "enabled" && state.style === "outlined") ||
          (state.state === "enabled" && state.style === "tonal")
            ? "mr-[-4.00px]"
            : ""
        } ${
          (state.state === "disabled" && state.style === "outlined") ||
          (state.state === "disabled" && state.style === "tonal") ||
          (state.state === "enabled" && state.style === "filled") ||
          (state.state === "enabled" && state.style === "outlined") ||
          (state.state === "enabled" && state.style === "tonal")
            ? "ml-[-4.00px]"
            : ""
        } ${
          state.state === "disabled" &&
          ["filled", "tonal"].includes(state.style)
            ? "bg-m3state-layersdarkon-surfaceopacity-012"
            : (state.state === "enabled" && state.style === "tonal") ||
              (state.state === "focused" && state.style === "tonal") ||
              (state.state === "hovered" && state.style === "tonal") ||
              (state.state === "pressed" && state.style === "tonal")
            ? "bg-m3sysdarksecondary-container"
            : (state.state === "enabled" && state.style === "filled") ||
              (state.state === "focused" && state.style === "filled") ||
              (state.state === "hovered" && state.style === "filled") ||
              (state.state === "pressed" && state.style === "filled")
            ? "bg-m-3sysdarkprimary"
            : ""
        } ${
          (state.state === "disabled" && state.style === "outlined") ||
          (state.state === "disabled" && state.style === "tonal") ||
          (state.state === "enabled" && state.style === "filled") ||
          (state.state === "enabled" && state.style === "tonal")
            ? "mb-[-4.00px]"
            : ""
        }`}
      >
        <div
          className={`relative inline-flex flex-[0_0_auto] items-center justify-center gap-[10px] p-[8px] ${
            (state.state === "focused" && state.style === "outlined") ||
            (state.state === "focused" && state.style === "standard") ||
            (state.state === "pressed" && state.style === "outlined") ||
            (state.state === "pressed" && state.style === "standard")
              ? "bg-m3state-layersdarkon-surface-variantopacity-012"
              : state.state === "hovered" &&
                ["outlined", "standard"].includes(state.style)
              ? "bg-m3state-layersdarkon-surface-variantopacity-008"
              : state.style === "tonal" &&
                ["focused", "pressed"].includes(state.state)
              ? "bg-m3state-layersdarkon-secondary-containeropacity-012"
              : state.state === "hovered" && state.style === "tonal"
              ? "bg-m3state-layersdarkon-secondary-containeropacity-008"
              : state.style === "filled" &&
                ["focused", "pressed"].includes(state.state)
              ? "bg-m3state-layersdarkon-primaryopacity-012"
              : state.state === "hovered" && state.style === "filled"
              ? "bg-m3state-layersdarkon-primaryopacity-008"
              : ""
          }`}
        >
          {icon}
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

IconButtonDark.propTypes = {
  style: PropTypes.oneOf(["filled", "outlined", "tonal", "standard"]),
  stateProp: PropTypes.oneOf([
    "enabled",
    "focused",
    "pressed",
    "hovered",
    "disabled",
  ]),
};
