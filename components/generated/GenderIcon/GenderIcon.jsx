/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsFemap24Px2 } from "../../icons/IconsFemap24Px2";
import { IconsMale3 } from "../../icons/IconsMale3";

export const GenderIcon = ({ gender }) => {
  return (
    <div
      className={`w-[40px] h-[40px] overflow-hidden rounded-[20px] relative ${
        gender === "female" ? "bg-m-3referrorerror-70" : "bg-m-3sysdarkprimary"
      }`}
    >
      {gender === "male" && (
        <IconsMale3 className="!absolute !w-[24px] !h-[24px] !top-[8px] !left-[8px]" color="#211F1A" />
      )}

      {gender === "female" && (
        <IconsFemap24Px2 className="!absolute !w-[24px] !h-[24px] !top-[8px] !left-[8px]" color="#211F1A" />
      )}
    </div>
  );
};

GenderIcon.propTypes = {
  gender: PropTypes.oneOf(["male", "female"]),
};
