import React from "react";
import Button from "../ui/Button";
import AuthCard from "../ui/AuthCard";

const ResetSuccessView = ({ handleConfirmReset }) => {
  return (
    <AuthCard>
      <div className="flex flex-col h-full pt-10 items-center">
        <h2 className="text-[28px] font-medium text-center text-gray-900 mb-4">
          Password reset
        </h2>

        <p className="text-base text-gray-600 leading-snug text-center mb-10 px-8 max-w-md">
          Your password has been successfully reset. click confirm to set a new
          password
        </p>

        {/* Custom Icon: Suitcase/Lock with Checkmark */}
        <div className="flex-grow flex items-center justify-center pb-8">
          <div className="relative w-48 h-48 flex items-center justify-center bg-[#FDF0E9] rounded-full">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="20"
                y="35"
                width="60"
                height="45"
                rx="8"
                fill="#ED7D3D"
              />
              <path
                d="M30 35V25C30 14 39 5 50 5C61 5 70 14 70 25V35"
                stroke="#ED7D3D"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="38" cy="58" r="3" fill="#F8B896" />
              <circle cx="50" cy="58" r="3" fill="#F8B896" />
              <circle cx="62" cy="58" r="3" fill="#F8B896" />
              <circle cx="75" cy="75" r="18" fill="white" />
              <circle cx="75" cy="75" r="14" fill="#FDF0E9" />
              <path
                d="M68 76L72 80L82 70"
                stroke="#ED7D3D"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <Button
          onClick={handleConfirmReset}
          className="w-[494px] h-[44px] mb-8"
        >
          Confirm
        </Button>
      </div>
    </AuthCard>
  );
};

export default ResetSuccessView;
