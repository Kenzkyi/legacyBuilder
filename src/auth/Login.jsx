import React, { useState } from "react";
import "../styles/authCss/auth.css";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <div className="signupMain">
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
        <form className="form">
          <div className="signinput">
            <label className="signuplabel">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="signinputmain"
            />
          </div>
          <div className="signinput">
            <label className="signuplabel">Password</label>
            <input
              type={show ? "text" : "password"}
              placeholder="Enter Your Password"
              required
              className="signinputmain"
            />
            <div className="eyeIcon" onClick={handleShow}>
              {show ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <div className="rememberme">
            <div className="checkbox">
              <input type="checkbox" className="checkboxtic" />
            </div>
            <label className="rememberlabel">Remember Me</label>
          </div>
          <button type="submit" className="signupbtn">
            Sign in
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
          <p className="forgotpassword">Forgot Password?</p>
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
