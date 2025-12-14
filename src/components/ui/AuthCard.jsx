import React from "react";

const AuthCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
      w-full max-w-[546px] min-h-[586px] bg-white p-10 
      rounded-[23px] shadow-sm border border-gray-100 
      relative flex flex-col ${className}
    `}
    >
      {children}
    </div>
  );
};

export default AuthCard;
