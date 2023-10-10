/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HorizontalDarkWith = ({ className, divider = "/img/divider.svg", text = "Subheader" }) => {
  return (
    <div
      className={`flex flex-col w-[320px] items-start justify-center gap-[4px] px-[16px] py-0 relative ${className}`}
    >
      <img className="relative self-stretch w-full h-px object-cover" alt="Divider" src={divider} />
      <div className="relative self-stretch font-m3-title-small font-[number:var(--m3-title-small-font-weight)] text-m3sysdarkon-surface-variant text-[length:var(--m3-title-small-font-size)] tracking-[var(--m3-title-small-letter-spacing)] leading-[var(--m3-title-small-line-height)] [font-style:var(--m3-title-small-font-style)]">
        {text}
      </div>
    </div>
  );
};

HorizontalDarkWith.propTypes = {
  divider: PropTypes.string,
  text: PropTypes.string,
};
