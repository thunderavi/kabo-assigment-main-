import React, { useState } from "react";
import InputField from "./InputField";
import PhoneInput from "./PhoneInput";
import PasswordField from "./PasswordField";
import OtpForm from "./OtpForm";
import LoginForm from "./LoginForm"; // Import the LoginForm

const FormSection = () => {
  const [isOtpForm, setIsOtpForm] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);

  const handleCreateAccountClick = (e) => {
    e.preventDefault();
    setIsOtpForm(true);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsLoginForm(true);
  };

  const handleCreateAccountRedirect = (e) => {
    e.preventDefault();
    setIsLoginForm(false);
  };

  return (
    <section className="flex items-center justify-center p-4 bg-white min-h-screen font-[Inter] mx-4 sm:ml-[90px] sm:mr-[7%]">
      <form
        className="max-w-100 w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 text-[#2c4f58] h-auto transition-all"
        autoComplete="off"
      >
        {!isLoginForm && !isOtpForm ? (
          <>
            <h2 className="text-xl font-normal mb-4 text-customTeal">
              Create an Account
            </h2>
            <hr className="border-t border-gray-300 mb-6" />

            <InputField
              id="email"
              label="Email Address"
              type="email"
              defaultValue="mohammed.ishan@flyingrealty.com"
            />

            <PhoneInput />

            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <InputField
                id="firstName"
                label="First Name"
                type="text"
                defaultValue="Mohammed"
              />
              <InputField
                id="lastName"
                label="Last Name"
                type="text"
                defaultValue="Ishan"
              />
            </div>

            <PasswordField defaultValue="***************" />

            <p className="text-xs text-gray-500 text-center mb-4">
              By clicking on{" "}
              <span className="font-semibold text-[#2c4f58]">
                Create an account
              </span>
              , you agree to our{" "}
              <a
                href="/terms"
                className="underline text-[#2c4f58] font-medium"
              >
                T & C
              </a>
              .
            </p>

            <button
              type="submit"
              onClick={handleCreateAccountClick}
              className="mt-5 w-full bg-[#225865] text-white font-semibold rounded-md text-base hover:bg-[#24434c] transition-colors h-[45px] flex items-center justify-center"
            >
              Create an account
            </button>

            <hr className="border-t border-gray-300 mt-6 mb-4" />

            <div className="text-center mt-8">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  onClick={handleLoginClick}
                  className="text-[#2c4f58] font-semibold"
                >
                  Login
                </a>
              </span>
            </div>
          </>
        ) : isLoginForm ? (
          <LoginForm onCreateAccountRedirect={handleCreateAccountRedirect} />
        ) : (
          <OtpForm />
        )}
      </form>
    </section>
  );
};

export default FormSection;
