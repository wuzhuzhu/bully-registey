/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

"use client";

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconsMenu24Px } from "../../icons/IconsMenu24Px";
import { IconsSearch24Px } from "../../icons/IconsSearch24Px";
import { IconButtonDark } from "../IconButtonDark";
import { UserImagesUser } from "../UserImagesUser";

export const SearchBarDark = ({
  show1StTrailingIcon = true,
  placeholderText = "Hinted search text",
  show2NdTrailingIcon = false,
  stateProp,
  showAvatar,
  className,
  iconButtonDarkIcon = (
    <IconsMenu24Px className="!relative !h-[24px] !w-[24px]" color="#BFC8CB" />
  ),
  override = (
    <IconsSearch24Px
      className="!relative !h-[24px] !w-[24px]"
      color="#BFC8CB"
    />
  ),
  userImagesUserText = "A",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "enabled",
    showAvatar: showAvatar || false,
  });

  return (
    <div
      className={`relative flex h-[56px] w-[360px] max-w-[720px] items-center gap-[4px] overflow-hidden rounded-[28px] bg-m3sysdarksurface-container-high ${className}`}
    >
      <div
        className={`relative flex flex-1 grow items-center gap-[4px] self-stretch p-[4px] ${
          ["hovered", "pressed"].includes(state.state)
            ? "bg-m3state-layersdarkon-surfaceopacity-008"
            : ""
        }`}
      >
        {state.state === "pressed" && (
          <>
            <img
              className={`absolute left-[-23508px] h-[125px] w-[178px] ${
                !state.showAvatar ? "top-[-7905px]" : "top-[-7985px]"
              }`}
              alt="Ripple"
              src="/img/selected-icon-29.png"
            />
            <IconButtonDark stateProp="enabled" style="standard" />
            <div className="relative flex flex-1 grow items-center gap-[10px] self-stretch">
              <div className="relative w-fit whitespace-nowrap font-m3-body-large text-[length:var(--m3-body-large-font-size)] font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] tracking-[var(--m3-body-large-letter-spacing)] text-m3sysdarkon-surface-variant [font-style:var(--m3-body-large-font-style)]">
                {placeholderText}
              </div>
            </div>
          </>
        )}

        {["enabled", "hovered"].includes(state.state) && (
          <>
            <IconButtonDark
              icon={iconButtonDarkIcon}
              stateProp="enabled"
              style="standard"
            />
            <div
              className="relative flex flex-1 grow items-center gap-[10px] self-stretch"
              onMouseEnter={() => {
                dispatch("mouse_enter");
              }}
              onMouseLeave={() => {
                dispatch("mouse_leave");
              }}
            >
              <div className="relative w-fit whitespace-nowrap font-m3-body-large text-[length:var(--m3-body-large-font-size)] font-[number:var(--m3-body-large-font-weight)] leading-[var(--m3-body-large-line-height)] tracking-[var(--m3-body-large-letter-spacing)] text-m3sysdarkon-surface-variant [font-style:var(--m3-body-large-font-style)]">
                {placeholderText}
              </div>
            </div>
          </>
        )}

        <div className="relative inline-flex flex-[0_0_auto] items-center justify-end">
          {show1StTrailingIcon && (
            <IconButtonDark
              icon={
                ["enabled", "hovered"].includes(state.state)
                  ? override
                  : undefined
              }
              stateProp="enabled"
              style="standard"
            />
          )}

          {state.showAvatar && (
            <div className="relative flex h-[48px] w-[48px] items-center justify-center gap-[10px]">
              <UserImagesUser
                initialClassName="!text-m3sysdarkon-primary !tracking-[0.15px] !left-[-5px] !top-[-6px]"
                style="monogram"
                styleCheckClassName="!rounded-[15px] !h-[30px] !bg-m-3sysdarkprimary !w-[30px]"
                text={state.state === "pressed" ? "A" : userImagesUserText}
              />
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

SearchBarDark.propTypes = {
  show1StTrailingIcon: PropTypes.bool,
  placeholderText: PropTypes.string,
  show2NdTrailingIcon: PropTypes.bool,
  stateProp: PropTypes.oneOf(["hovered", "pressed", "enabled"]),
  showAvatar: PropTypes.bool,
  userImagesUserText: PropTypes.string,
};
