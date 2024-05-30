import React from 'react';

const Input = ({ label, type, placeholder, error, ...props }) => (
  <div className="flex flex-col mb-4">
    <label htmlFor={props.name} className="text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      {...props}
      className={`appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
        error ? 'border-red-500' : ''
      }`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default Input;
