import React, { useEffect, useState } from "react";
import "../styles/authCss/auth.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validateField = (name, value) => {
    let error = "";
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
    setErrorMessage((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };
  console.log(inputValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!disabled) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success("Login up successful!");
      }, 3000);
    }
  };
  useEffect(() => {
    const { email, password } = inputValue;
    if (
      validateEmail(email) &&
      password.trim() !== "" &&
      password.length >= 6
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);

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
          <h1>MEMBER LOGIN</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="signinput">
            <label className="signuplabel">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputValue.email}
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
                type={show ? "text" : "password"}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                placeholder="Enter Your Password"
                required
                className="signinputmain1"
              />
              <div className="eyeIcon2" onClick={handleShow}>
                {show ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {errorMessage.password && (
              <p className="error">{errorMessage.password}</p>
            )}
          </div>
          <div className="rememberme">
            <div className="checkbox">
              <input type="checkbox" className="checkboxtic" />
            </div>
            <label className="rememberlabel">Remember Me</label>
          </div>
          <button
            type="submit"
            className="signupbtn"
            disabled={disabled}
            style={{ backgroundColor: disabled ? "#dbd2f0d2" : "#804bf2" }}
          >
            {loading ? "loading..." : "Login"}
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
        <article className="forgotpassworddiv">
          <p
            className="forgotpassword"
            onClick={() => navigate("/forgetpassword")}
          >
            Forgot Password?
          </p>
          <p className="signuptext">
            Don't have an account?
            <span className="signupLink">click here to create one now</span>
          </p>
        </article>
      </div>
    </div>
  );
};

export default Login;
