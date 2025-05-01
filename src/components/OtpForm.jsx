import React from "react";

const OtpForm = () => {
  return (
    <div>
      <h2 className="text-[#1f4e5f] text-lg font-normal border-b border-gray-300 pb-3 mb-4">
        We need to verify it’s you
      </h2>
      <p className="text-[#1f1f1f] text-sm mb-3 leading-relaxed">
        We have sent an OTP to the email id{" "}
        <strong>mohammed.ishan@flyingrealty.com</strong>
      </p>
      <form className="mb-4">
        <div className="flex justify-center space-x-3 mb-3">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-10 border border-gray-300 rounded-sm text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#1f4e5f]"
              inputMode="numeric"
              pattern="[0-9]*"
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>
        <div className="mb-4 text-center">
          <button
            type="button"
            className="text-xs text-[#1f4e5f] underline hover:text-[#163d4a]"
          >
            Resend OTP
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-[#1f4e5f] text-white py-2 rounded-md text-sm font-medium hover:bg-[#163d4a] transition-colors"
        >
          Verify OTP
        </button>
      </form>
      <hr className="border-gray-300 mb-4" />
      <p className="text-center text-xs text-[#1f1f1f] tracking-normal">
        Wrong email id?{" "}
        <a
          href="/create-account"
          className="text-[#1f4e5f] font-semibold hover:underline focus:underline"
        >
          Change email id
        </a>
      </p>
    </div>
  );
};

export default OtpForm;
