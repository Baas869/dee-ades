import React from 'react';

const NairaIcon = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="18"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fontWeight="bold"
      fill="currentColor"
    >
      ₦
    </text>
  </svg>
);

export default NairaIcon;
