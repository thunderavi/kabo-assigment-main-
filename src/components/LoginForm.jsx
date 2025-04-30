import React from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

const LoginForm = ({ onCreateAccountRedirect }) => {
  return (
    <>
      <h2 className="text-xl font-normal mb-4 text-customTeal">Login</h2>
      <hr className="border-t border-gray-300 mb-6" />

      <InputField
        id="email"
        label="Email Address"
        type="email"
      />

      <PasswordField />

      <button
        type="submit"
        className="mt-5 w-full bg-[#225865] text-white font-semibold rounded-md text-base hover:bg-[#24434c] transition-colors h-[45px] flex items-center justify-center"
      >
        Login
      </button>

      <hr className="border-t border-gray-300 mt-6 mb-4" />

      <div className="text-center mt-8">
        <span className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/create-account"
            onClick={onCreateAccountRedirect}
            className="text-[#2c4f58] font-semibold"
          >
            Create an account
          </a>
        </span>
      </div>
    </>
  );
};

export default LoginForm;
