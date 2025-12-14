import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-lg shadow-sm transition-colors duration-200 flex items-center justify-center";

  const variantClasses = {
    primary: "bg-[#ED7D3D] hover:bg-[#d66a2e] text-white",
    secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-400",
    google: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-400",
    text: "text-[#ED7D3D] hover:underline bg-transparent border-none shadow-none p-0",
  };

  const sizeClasses = {
    default: "text-lg py-3.5 px-4",
    small: "text-base py-2.5 px-4",
    large: "text-lg py-4 px-6",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant] || variantClasses.primary}
        ${sizeClasses.default}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
