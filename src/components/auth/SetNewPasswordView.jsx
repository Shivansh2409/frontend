import React, { useState } from "react";
import PasswordInput from "../ui/PasswordInput";
import Button from "../ui/Button";
import AuthCard from "../ui/AuthCard";

const SetNewPasswordView = ({
  formData,
  handleInputChange,
  handleUpdatePassword,
}) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthCard>
      <div className="flex flex-col h-full pt-10 items-center">
        <h2 className="text-[28px] font-medium text-center text-gray-900 mb-4">
          Set new Password
        </h2>

        <p className="text-base text-gray-600 leading-snug text-left w-full max-w-[494px] mb-8">
          Create a new password. ensure that it should differ from previous one
        </p>

        <form
          onSubmit={handleUpdatePassword}
          className="space-y-6 w-full max-w-[494px]"
        >
          {/* New Password Input */}
          <PasswordInput
            label="Password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            showPassword={showNewPassword}
            setShowPassword={setShowNewPassword}
          />

          {/* Confirm Password Input */}
          <PasswordInput
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
          />

          <Button type="submit" className="w-full h-[44px] mt-8">
            Update Password
          </Button>
        </form>
      </div>
    </AuthCard>
  );
};

export default SetNewPasswordView;
