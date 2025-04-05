import React, { useState, useEffect } from "react";
import "../styles/authCss/auth.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateField = (name, value) => {
    let error = "";
    if (name === "fullName") {
      if (!value.trim()) {
        error = "Full name is required";
      } else {
        const names = value.split(" ");
        for (let i = 0; i < names.length; i++) {
          if (names[i].charAt(0) !== names[i].charAt(0).toUpperCase()) {
            error = "Each name must start with a capital letter";
            break;
          }
        }
      }
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (value.length < 6 || value.length > 60) {
        error = "Email should be between 6 and 60 characters";
      } else if (!validateEmail(value)) {
        error = "Please enter a valid email address";
      }
    }

    if (name === "password") {
      if (!value.trim()) {
        error = "Password is required";
      } else if (value.length < 6 || value.length > 60) {
        error = "Password should be between 6 and 60 characters";
      }
    }

    if (name === "confirmPassword") {
      if (value !== inputValue.password) {
        error = "Passwords do not match";
      }
    }

    setErrorMessage((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };
  console.log(inputValue);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const validateEmail = (inputValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputValue);
  };
  useEffect(() => {
    const { fullName, email, password, confirmPassword } = inputValue;
    if (
      fullName.trim() !== "" &&
      validateEmail(email) &&
      password.trim() !== "" &&
      password.length >= 6 &&
      confirmPassword.trim() !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!disabled) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success("Sign up successful!");
      }, 3000);
    }
  };
  return (
    <div className="signupMain">
      <ToastContainer />
      <div className="circle">
        <div className="innercircle"></div>
      </div>
      <div className="circle1">
        <div className="innercircle1"></div>
      </div>
      <div className="goldsmallcircle"></div>
      <div className="goldsmallcircle1"></div>
      <div className="closeicondiv">
        <IoMdArrowBack className="closeIcon" />
      </div>
      <div className="signupForm">
        <div className="header">
          <h1>Sign Up</h1>
          <p>Beat jamb with good grades at one sitting </p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="signinput">
            <label className="signuplabel">Full Name</label>
            <input
              name="fullName"
              onChange={handleChange}
              value={inputValue.fullName}
              type="text"
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              placeholder="Enter Your Full Name"
              required
              className="signinputmain"
            />
            {errorMessage.fullName && (
              <p className="error">{errorMessage.fullName}</p>
            )}
          </div>
          <div className="signinput">
            <label className="signuplabel">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={inputValue.email}
              type="email"
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              placeholder="Enter Your Email"
              required
              className="signinputmain"
            />
            {errorMessage.email && (
              <p className="error">{errorMessage.email}</p>
            )}
          </div>
          <div className="signinput">
            <label className="signuplabel">Password</label>
            <div className="inputwrapper">
              <input
                name="password"
                onChange={handleChange}
                value={inputValue.password}
                type={showPassword ? "text" : "password"}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                placeholder="Enter Your Password"
                required
                className="signinputmain1"
              />
              <div className="eyeIcon2" onClick={handleShowPassword}>
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {errorMessage.password && (
              <p className="error">{errorMessage.password}</p>
            )}
          </div>
          <div className="signinput">
            <label className="signuplabel">Confirm Password</label>
            <input
              name="confirmPassword"
              onChange={handleChange}
              value={inputValue.confirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              placeholder="Confirm Password"
              required
              className="signinputmain2"
            />
            {errorMessage.confirmPassword && (
              <p className="error">{errorMessage.confirmPassword}</p>
            )}
            <div className="eyeIcon1" onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <button
            type="submit"
            className="signupbtn"
            disabled={disabled}
            style={{ backgroundColor: disabled ? "#dbd2f0d2" : "#804bf2" }}
          >
            {loading ? "loading..." : "Join For Free"}
          </button>
        </form>
        <span className="or-container">
          <div className="line"></div>
          <span className="or">or</span>
          <div className="line"></div>
        </span>
        <article className="socials">
          <FaFacebook className="facebookIcon" />
          <FcGoogle className="googleIcon" />
        </article>
      </div>
    </div>
  );
};

export default SignUp;
