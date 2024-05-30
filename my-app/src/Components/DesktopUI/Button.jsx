import React from 'react';

const Button = ({ children, disabled, ...props }) => (
  <button
    className={`
      bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
      ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;
