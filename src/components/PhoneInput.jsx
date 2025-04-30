import React from "react";

const PhoneInput = () => (
  <div className="border border-gray-300 rounded-md px-3 py-2 mb-6 relative flex items-center gap-2">
    <label
      htmlFor="phone"
      className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-200 select-none"
    >
      Phone Number
    </label>
    <button
      type="button"
      className="flex items-center gap-1 text-sm text-[#2c4f58] font-semibold"
      aria-label="Country code selector"
    >
      <img
        src="https://flagcdn.com/w20/in.png"
        alt="Indian flag"
        width="20"
        height="15"
        className="inline-block"
      />
      <span>+91</span>
      <svg
        className="w-3 h-3 text-[#2c4f58]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <input
      id="phone"
      type="tel"
      defaultValue="9876543210"
      className="flex-grow border-0 p-0 m-0 text-base text-[#1a1a1a] placeholder-gray-300 focus:outline-none"
      placeholder="Phone Number"
      required
    />
  </div>
);

export default PhoneInput;
