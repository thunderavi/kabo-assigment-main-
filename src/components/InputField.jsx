import React from "react";

const InputField = ({ id, label, type, defaultValue }) => (
  <div className="border border-gray-300 rounded-md px-3 py-2 mb-6 relative flex-1">
    <label
      htmlFor={id}
      className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-200 select-none"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      defaultValue={defaultValue}
      className="w-full border-0 p-0 m-0 text-base text-[#1a1a1a] placeholder-gray-300 focus:outline-none"
      placeholder={label}
      required
    />
  </div>
);

export default InputField;
