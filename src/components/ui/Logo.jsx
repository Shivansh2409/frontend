import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <div className={`w-full max-w-[546px] ${className}`}>
      <h1 className="text-2xl font-bold text-red-600 tracking-tight">Woohl</h1>
    </div>
  );
};

export default Logo;
