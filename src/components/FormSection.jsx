import React from "react";

const FormSection = () => {
  return (
    <section className="flex items-center justify-center p-4 bg-white min-h-screen font-[Inter] ml-[100px] mr-[12%] ">
      <form
        className="max-w-sm w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 text-[#2c4f58] h-[550px]"
        autoComplete="off"
      >
        <h2 className="text-xl font-normal mb-4">Create an Account</h2>
        <hr className="border-t border-gray-300 mb-6" />

        {/* Email Address */}
        <div className="border border-gray-300 rounded-md px-3 py-2 mb-6 relative">
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-400 select-none"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            defaultValue="mohammed.ishan@flyingrealty.com"
            className="w-full border-0 p-0 m-0 text-base text-[#1a1a1a] placeholder-gray-300 focus:outline-none"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="border border-gray-300 rounded-md px-3 py-2 mb-6 relative flex items-center gap-2">
          <label
            htmlFor="phone"
            className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-400 select-none"
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
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
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

        {/* First and Last Name */}
        <div className="flex gap-6 mb-6">
          <div className="flex-1 border border-gray-300 rounded-md px-3 py-2 relative">
            <label
              htmlFor="firstName"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-400 select-none"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              defaultValue="Mohammed"
              className="w-full border-0 p-0 m-0 text-base text-[#1a1a1a] placeholder-gray-300 focus:outline-none"
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex-1 border border-gray-300 rounded-md px-3 py-2 relative">
            <label
              htmlFor="lastName"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-400 select-none"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              defaultValue="Ishan"
              className="w-full border-0 p-0 m-0 text-base text-[#1a1a1a] placeholder-gray-300 focus:outline-none"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="border border-gray-300 rounded-md px-3 py-2 relative mb-6">
          <label
            htmlFor="password"
            className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-400 select-none"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            defaultValue="***************"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-5 w-full bg-[#2c4f58] text-white font-semibold rounded-md py-3 text-base hover:bg-[#24434c] transition-colors"
        >
          Create an account
        </button>

        {/* Line Separator */}
        <hr className="border-t border-gray-300 mt-6 mb-4" />

        {/* Already have an account? Login */}
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#2c4f58] font-semibold">
              Login
            </a>
          </span>
        </div>
      </form>
    </section>
  );
};

export default FormSection;
