/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CardStateLayer = ({ state, className, stateLayerClassName }) => {
  return (
    <div
      className={`w-[360px] h-[360px] overflow-hidden rounded-[12px] bg-m3sysdarksurface-container-highest relative ${
        state === "hovered"
          ? "shadow-m3-elevation-dark-1"
          : ["focused", "pressed"].includes(state)
          ? "shadow-m3-elevation-light-1"
          : state === "dragged"
          ? "shadow-m3-elevation-light-3"
          : ""
      } ${className}`}
    >
      <div
        className={`h-[360px] ${
          state === "hovered"
            ? "bg-m3state-layersdarkon-surfaceopacity-008"
            : ["focused", "pressed"].includes(state)
            ? "bg-m3state-layersdarkon-surfaceopacity-012"
            : state === "dragged"
            ? "bg-m3state-layersdarkon-surfaceopacity-016"
            : ""
        } ${stateLayerClassName}`}
      />
    </div>
  );
};

CardStateLayer.propTypes = {
  state: PropTypes.oneOf(["enabled", "pressed", "focused", "hovered", "dragged"]),
};
