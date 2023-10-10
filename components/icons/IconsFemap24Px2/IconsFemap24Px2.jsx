/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsFemap24Px2 = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3679 5.88258 18 7.4087 18 9C18 11.97 15.84 14.44 13 14.92V17H15V19H13V21H11V19H9V17H11V14.92C8.16 14.44 6 11.97 6 9C6 7.4087 6.63214 5.88258 7.75736 4.75736C8.88258 3.63214 10.4087 3 12 3ZM12 5C10.9391 5 9.92172 5.42143 9.17157 6.17157C8.42143 6.92172 8 7.93913 8 9C8 10.0609 8.42143 11.0783 9.17157 11.8284C9.92172 12.5786 10.9391 13 12 13C13.0609 13 14.0783 12.5786 14.8284 11.8284C15.5786 11.0783 16 10.0609 16 9C16 7.93913 15.5786 6.92172 14.8284 6.17157C14.0783 5.42143 13.0609 5 12 5Z"
        fill={color}
      />
    </svg>
  );
};

IconsFemap24Px2.propTypes = {
  color: PropTypes.string,
};
