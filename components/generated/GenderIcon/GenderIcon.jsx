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
      className={`relative h-[40px] w-[40px] overflow-hidden rounded-[20px] bg-m-3sysdarkprimary`}
    >
      {gender === "male" && (
        <IconsMale3
          className="!absolute !left-[8px] !top-[8px] !h-[24px] !w-[24px]"
          color="#211F1A"
        />
      )}

      {gender === "female" && (
        <IconsFemap24Px2
          className="!absolute !left-[8px] !top-[8px] !h-[24px] !w-[24px]"
          color="#211F1A"
        />
      )}
    </div>
  );
};

GenderIcon.propTypes = {
  gender: PropTypes.oneOf(["male", "female"]),
};
