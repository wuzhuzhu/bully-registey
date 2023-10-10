/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SelectedIcon = ({ color = "#E1DFFF", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.74914 12.1274L3.62164 8.99988L2.55664 10.0574L6.74914 14.2499L15.7491 5.24988L14.6916 4.19238L6.74914 12.1274Z"
        fill={color}
      />
    </svg>
  );
};

SelectedIcon.propTypes = {
  color: PropTypes.string,
};
