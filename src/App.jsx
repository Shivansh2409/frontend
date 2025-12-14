import React, { useState } from "react";
import Logo from "./components/ui/Logo";
import AuthView from "./components/auth/AuthView";
import ForgotPasswordView from "./components/auth/ForgotPasswordView";
import VerifyCodeView from "./components/auth/VerifyCodeView";
import ResetSuccessView from "./components/auth/ResetSuccessView";
import SetNewPasswordView from "./components/auth/SetNewPasswordView";

const App = () => {
  // State management
  const [view, setView] = useState("auth");
  const [activeTab, setActiveTab] = useState("sign-in");

  // Independent password toggles for different views
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    newsletter: false,
  });

  // OTP state
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Event handlers
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (view === "forgot-password") {
      setView("verify-code");
    } else {
      console.log("Form submitted:", formData, "View:", view);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setView("reset-success");
  };

  const handleConfirmReset = () => {
    setView("set-new-password");
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    console.log("Updating password to:", formData.newPassword);
    alert("Password updated successfully!");
    setView("auth");
    setActiveTab("sign-in");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setView("forgot-password");
  };

  const handleBackToSignIn = () => {
    setView("auth");
    setActiveTab("sign-in");
  };

  // Render current view
  const renderCurrentView = () => {
    switch (view) {
      case "auth":
        return (
          <AuthView
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            formData={formData}
            handleInputChange={handleInputChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleSubmit={handleSubmit}
            handleForgotPassword={handleForgotPassword}
          />
        );

      case "forgot-password":
        return (
          <ForgotPasswordView
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleBackToSignIn={handleBackToSignIn}
          />
        );

      case "verify-code":
        return (
          <VerifyCodeView
            otp={otp}
            setOtp={setOtp}
            handleVerifyCode={handleVerifyCode}
            email={formData.email}
          />
        );

      case "reset-success":
        return <ResetSuccessView handleConfirmReset={handleConfirmReset} />;

      case "set-new-password":
        return (
          <SetNewPasswordView
            formData={formData}
            handleInputChange={handleInputChange}
            handleUpdatePassword={handleUpdatePassword}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      {/* Main Content Area */}
      <Logo className="mb-8 mt-4 ml-4" />
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pb-12">
        {/* Logo - Positioned outside/above the card */}

        {/* Main Card / Container */}
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default App;
