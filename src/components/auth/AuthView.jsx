import React from "react";
import Input from "../ui/Input";
import PasswordInput from "../ui/PasswordInput";
import Button from "../ui/Button";
import AuthCard from "../ui/AuthCard";

const AuthView = ({
  activeTab,
  setActiveTab,
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
  handleSubmit,
  handleForgotPassword,
}) => {
  return (
    <AuthCard>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[28px] font-medium mb-6 text-gray-900 leading-tight">
          Join Woohl. Grow With Us
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-8 text-sm font-medium tracking-wide">
          <button
            onClick={() => setActiveTab("sign-in")}
            className={`
              pb-1 px-1 transition-colors uppercase
              ${
                activeTab === "sign-in"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400 hover:text-gray-600"
              }
            `}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("new-user")}
            className={`
              pb-1 px-1 transition-colors uppercase
              ${
                activeTab === "new-user"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400 hover:text-gray-600"
              }
            `}
          >
            I'm New User
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
        {/* Name Field for New Users */}
        {activeTab === "new-user" && (
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        )}

        {/* Email Field */}
        <Input
          label="Email Address"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        {/* Password Field */}
        <PasswordInput
          label="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        {/* Forgot Password Link for Sign In */}
        {activeTab === "sign-in" && (
          <div className="flex justify-start pt-0">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-[#ED7D3D] text-sm hover:underline"
            >
              Forgot your Password ?
            </button>
          </div>
        )}

        {/* Terms and Newsletter for New Users */}
        {activeTab === "new-user" && (
          <>
            <div className="text-sm text-gray-500 leading-relaxed pt-2">
              By registering, you agree to our{" "}
              <a href="#" className="underline hover:text-gray-800">
                Terms & Conditions
              </a>
              ,{" "}
              <a href="#" className="underline hover:text-gray-800">
                Privacy and Cookie Policy
              </a>{" "}
              and to join our loyalty programme
            </div>

            <div className="flex items-start space-x-3 pt-1">
              <div className="flex items-center h-6">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-5 h-5 border-2 border-gray-400 rounded text-[#ED7D3D] focus:ring-[#ED7D3D] cursor-pointer"
                />
              </div>
              <label
                htmlFor="newsletter"
                className="text-sm text-gray-600 leading-snug cursor-pointer select-none"
              >
                Sign up, & never miss out on exclusive member rewards tailored
                new arrivals & new launches.
              </label>
            </div>
          </>
        )}

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-6">
          {activeTab === "new-user" ? "Register" : "Sign in"}
        </Button>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="relative bg-white px-4 text-sm font-medium text-gray-500 uppercase">
            OR
          </span>
        </div>

        {/* Google Sign In */}
        <Button
          type="button"
          variant="google"
          className="w-full flex items-center justify-center space-x-3"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-base">Continue with Google</span>
        </Button>
      </form>
    </AuthCard>
  );
};

export default AuthView;
