import React, { useState, useRef } from "react";

const OtpInput = ({ value = [], onChange, length = 6, className = "" }) => {
  const [otp, setOtp] = useState(value);
  const otpRefs = useRef([]);

  const handleOtpChange = (index, inputValue) => {
    if (isNaN(inputValue)) return;

    const newOtp = [...otp];
    newOtp[index] = inputValue;
    setOtp(newOtp);

    if (onChange) {
      onChange(newOtp);
    }

    // Auto-focus next input
    if (inputValue !== "" && index < length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={`flex justify-between w-full gap-2 ${className}`}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (otpRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={otp[index] || ""}
          onChange={(e) => handleOtpChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-[68px] h-[68px] rounded-[10px] border border-gray-300 
                     text-center text-2xl focus:border-[#ED7D3D] focus:ring-1 
                     focus:ring-[#ED7D3D] outline-none transition-all bg-white"
        />
      ))}
    </div>
  );
};

export default OtpInput;
