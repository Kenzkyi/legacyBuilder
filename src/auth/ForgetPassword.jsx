import React from "react";
import "../styles/authCss/auth.css";
import { IoCloseCircleOutline } from "react-icons/io5";

const ForgetPassword = () => {
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
        <IoCloseCircleOutline className="closeIcon" />
      </div>
      <div className="signupForm">
        <div className="header">
          <h1>FORGET PASSWORD</h1>
        </div>
        <form className="form">
          <div className="signinput">
            <label className="signuplabel">Email Address</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="signinputmain"
            />
          </div>

          <button type="submit" className="forgetbtn">
            Send password reset link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
