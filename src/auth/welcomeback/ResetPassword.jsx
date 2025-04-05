import React, { useState } from "react";
import "../../styles/authCss/resetpassword.css";
import lock from "../../assets/uim_padlock.svg";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);
  return (
    <main className="ResetPasswordmain">
      <div className="ResetPasswordcircle">
        <div className="ResetPasswordinnercircle"></div>
      </div>
      <div className="ResetPasswordcircle1">
        <div className="ResetPasswordinnercircle1"></div>
      </div>
      <div className="ResetPasswordgoldsmallcircle"></div>
      <div className="ResetPasswordgoldsmallcircle1"></div>
      <section className="ResetPasswordcontainer">
        <div className="ResetPasswordlogocontainer">
          <img src={lock} alt="" className="ResetPasswordplogo" />
        </div>
        <div className="ResetPasswordheader">
          <h1>Create a new account</h1>
          <p>
            Your new account must be different from previously used password
          </p>
        </div>
        <div className="resetinputdiv">
          <div className="resetinput">
            <label className="resetlabel">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              onClick={handleShowPassword}
              placeholder="Enter Your Password"
              required
              className="resetinputmain"
            />
            <div className="reseteyeIcon" onClick={handleShowPassword}>
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <div className="resetinput">
            <label className="resetlabel">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              onClick={handleShowConfirmPassword}
              placeholder="Confirm Password"
              required
              className="resetinputmain"
            />
            <div className="reseteyeIcon1" onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <button type="submit" className="resetbtn">
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
