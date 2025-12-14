import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AuthCard from "../ui/AuthCard";

const ForgotPasswordView = ({
  formData,
  handleInputChange,
  handleSubmit,
  handleBackToSignIn,
}) => {
  return (
    <AuthCard>
      <div className="flex flex-col h-full pt-10">
        <h2 className="text-[28px] font-medium text-center text-gray-900 mb-8">
          Forgot Password
        </h2>

        <div className="flex-grow space-y-6">
          <p className="text-base text-gray-600 leading-snug">
            Enter your email address and we'll send you a link to reset your
            password
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              id="reset-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        </div>

        <div className="mt-auto text-center pb-2">
          <button
            onClick={handleBackToSignIn}
            className="text-gray-600 font-medium hover:text-gray-900 transition-colors"
          >
            Back to Sign in
          </button>
        </div>
      </div>
    </AuthCard>
  );
};

export default ForgotPasswordView;
