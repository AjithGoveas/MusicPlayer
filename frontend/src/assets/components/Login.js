import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const Login = ({ onClose, setUser }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login Successful!");
    // Instead of setUser(), use the login function
    // login({ email: "dummy@example.com" }); // Pass your user data or token here
    navigate("/home"); // Navigate to the Home page
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log("Sign Up Successful!");
    navigate("/home"); // Navigate to the Home page
  };

  const handleOAuthLogin = () => {
    window.location.href = "http://localhost:5000/auth";
  };

  return (
    <div className="auth-container">
      <div
        className={`auth-forms-wrapper ${isLoginMode ? "inactive" : "active"}`}
      >
        <button className="close-button" onClick={onClose}>
          <i className="bx bx-x bx-md" />
        </button>
        <div className={`auth-form ${isLoginMode ? "active" : "inactive"}`}>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-envelope bx-sm" />
              </span>
              <input type="email" id="login-email" required />
              <label htmlFor="login-email">Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-lock-alt bx-sm" />
              </span>
              <input type="password" id="login-password" required />
              <label htmlFor="login-password">Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <span>Forgot password?</span>
            </div>
            <button type="submit" className="auth-button">
              Login
            </button>
            <button
              type="button"
              className="auth-button-google oauth-button"
              onClick={handleOAuthLogin}
            >
              Login with Google
              <i className="bx bxl-google bx-sm" />
            </button>
            <div className="login-register">
              {isLoginMode ? (
                <p>
                  Don't have an account?{" "}
                  <span onClick={toggleForm}>Sign Up</span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span onClick={toggleForm}>Login</span>
                </p>
              )}
            </div>
          </form>
        </div>
        <div className={`auth-form ${isLoginMode ? "inactive" : "active"}`}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUpSubmit}>
            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-user bx-sm" />
              </span>
              <input type="text" id="signup-name" required />
              <label htmlFor="signup-name">Name</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-envelope bx-sm" />
              </span>
              <input type="email" id="signup-email" required />
              <label htmlFor="signup-email">Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-lock-alt bx-sm" />
              </span>
              <input type="password" id="signup-password" required />
              <label htmlFor="signup-password">Password</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-lock-alt bx-sm" />
              </span>
              <input type="password" id="signup-confirm-password" required />
              <label htmlFor="signup-confirm-password">Confirm Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" required />I agree to the terms &
                conditions
              </label>
            </div>
            <button type="submit" className="auth-button">
              Sign Up
            </button>
            <div className="login-register">
              {isLoginMode ? (
                <p>
                  Don't have an account?{" "}
                  <span onClick={toggleForm}>Sign Up</span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span onClick={toggleForm}>Login</span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
