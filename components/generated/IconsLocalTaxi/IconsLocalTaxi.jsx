/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsLocalTaxi = ({ className, iconClassName, icon = "/img/icon-25.svg" }) => {
  return (
    <div className={`relative w-[24px] h-[24px] ${className}`}>
      <img className={`absolute w-[18px] h-[18px] top-[3px] left-[3px] ${iconClassName}`} alt="Icon" src={icon} />
    </div>
  );
};

IconsLocalTaxi.propTypes = {
  icon: PropTypes.string,
};
