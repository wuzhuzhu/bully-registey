/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const HorizontalDarkWith = ({
  className,
  divider = "/img/divider.svg",
  text = "Subheader",
}: {
  className?: string,
  divider?: string,
  text?: React.ReactNode,
}) => {
  return (
    <div
      className={`relative flex w-[320px] flex-col items-start justify-center gap-[4px] px-[16px] py-0 ${className}`}
    >
      <img
        className="relative h-px w-full self-stretch object-cover"
        alt="Divider"
        src={divider}
      />
      <div className="relative self-stretch font-m3-title-small text-[length:var(--m3-title-small-font-size)] font-[number:var(--m3-title-small-font-weight)] leading-[var(--m3-title-small-line-height)] tracking-[var(--m3-title-small-letter-spacing)] text-m3sysdarkon-surface-variant [font-style:var(--m3-title-small-font-style)]">
        {text}
      </div>
    </div>
  );
};

