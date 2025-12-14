import React from "react";
import OtpInput from "../ui/OtpInput";
import Button from "../ui/Button";
import AuthCard from "../ui/AuthCard";

const VerifyCodeView = ({ otp, setOtp, handleVerifyCode, email }) => {
  return (
    <AuthCard>
      <div className="flex flex-col h-full pt-10 items-center">
        <h2 className="text-[28px] font-medium text-center text-gray-900 mb-6">
          Verify your mail
        </h2>

        <div className="flex-grow w-full max-w-[514px]">
          <p className="text-base text-gray-600 leading-snug text-center mb-8 px-4">
            we sent a reset link to {email || "support@woohl.com"} Enter the 6
            digit code sent to your mail
          </p>

          <form
            onSubmit={handleVerifyCode}
            className="space-y-8 flex flex-col items-center"
          >
            {/* OTP Input */}
            <OtpInput value={otp} onChange={setOtp} length={6} />

            <Button type="submit" className="w-full h-[64px] mt-4">
              Verify code
            </Button>
          </form>
        </div>
      </div>
    </AuthCard>
  );
};

export default VerifyCodeView;
