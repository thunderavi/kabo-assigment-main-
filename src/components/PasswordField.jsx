import React from "react";

const PasswordField = ({ defaultValue }) => (
  <div className="border border-gray-300 rounded-md px-3 py-2 relative mb-6">
    <label
      htmlFor="password"
      className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-200 select-none"
    >
      Password
    </label>
    <input
      id="password"
      type="password"
      defaultValue={defaultValue}
      className="w-full border-0 p-0 pr-10 m-0 text-base text-[#1a1a1a] placeholder-gray-300 focus:outline-none"
      placeholder="Password"
      required
    />
    <button
      type="button"
      className="absolute inset-y-0 right-3 flex items-center text-gray-600"
      aria-label="Toggle password visibility"
      tabIndex="-1"
    >
      <i className="far fa-eye"></i>
    </button>
  </div>
);

export default PasswordField;
