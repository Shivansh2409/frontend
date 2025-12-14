import React from "react";

const Input = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-base text-gray-600">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
          w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-300 
          focus:border-gray-500 focus:ring-0 focus:outline-none 
          transition-all ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;
