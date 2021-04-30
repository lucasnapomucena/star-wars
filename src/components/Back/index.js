import React from "react";

export const Back = ({ fill, ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.0001 11.3333H6.69006L15.5117 2.51166L13.1551 0.154999L0.310059 13L13.1551 25.845L15.5117 23.4883L6.69006 14.6667H31.0001V11.3333Z"
        fill={fill}
      />
    </svg>
  );
};
