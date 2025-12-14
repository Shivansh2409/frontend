import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "./Input";

const PasswordInput = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  showPassword: externalShowPassword,
  setShowPassword: externalSetShowPassword,
  ...props
}) => {
  const [internalShowPassword, setInternalShowPassword] = useState(false);

  const showPassword =
    externalShowPassword !== undefined
      ? externalShowPassword
      : internalShowPassword;
  const setShowPassword = externalSetShowPassword || setInternalShowPassword;

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-base text-gray-600">
          {label}
        </label>
      )}
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={className}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
