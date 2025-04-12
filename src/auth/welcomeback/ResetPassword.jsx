import React, { useState, useEffect } from "react";
import "../../styles/authCss/resetpassword.css";
import lock from "../../assets/uim_padlock.svg";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    password: "",
    confirmPassword: "",
  });
  const [inputValue, setInputValue] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const token = useParams()

  const validateField = (name, value) => {
    let error = "";
    if (name === "newPassword") {
      if (!value.trim()) {
        error = "Password is required";
      } else if (value.length < 6 || value.length > 60) {
        error = "Password should be between 6 and 60 characters";
      }
    }

    if (name === "confirmPassword") {
      if (!value.trim()) {
        error = "Confirm Password is required";
      } else if (value !== inputValue.password) {
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

  const handleSubmit = async(e,data) => {
    e.preventDefault();
    setLoading(true);
    if (!disabled) {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}api/v1/reset_password/student/`,data,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setLoading(false);
        console.log(res)
      } catch (error) {
        toast.error(error?.response?.data?.message)
        setLoading(false);
        console.log(error)
      }
      // setTimeout(() => {
      //   setLoading(false);
      //   toast.success("Password reset successful!");
      // }, 3000);
    }
  };

  useEffect(() => {
    const { newPassword, confirmPassword } = inputValue;
    if (
      newPassword.trim() !== "" &&
      newPassword.length >= 6 &&
      newPassword.length <= 60 &&
      confirmPassword.trim() !== "" &&
      newPassword === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);

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
          <h1>Create a new password</h1>
          <p>
            Your new password must be different from previously used password
          </p>
        </div>
        <form className="resetinputdiv" onSubmit={(e)=>handleSubmit(e,inputValue)}>
          <div className="resetinput">
            <label className="resetlabel">Password</label>
            <div className="inputwrapper">
              <input
                name="newPassword"
                onChange={handleChange}
                value={inputValue.newPassword}
                type={showPassword ? "text" : "password"}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                placeholder="Enter Your Password"
                required
                className="resetinputmain"
              />
              <div className="reseteyeIcon" onClick={handleShowPassword}>
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {errorMessage.password && (
              <p className="error">{errorMessage.password}</p>
            )}
          </div>
          <div className="resetinput">
            <label className="resetlabel">Confirm Password</label>
            <div className="inputwrapper">
              <input
                name="confirmPassword"
                onChange={handleChange}
                value={inputValue.confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                placeholder="Confirm Password"
                required
                className="resetinputmain"
              />
              <div
                className="reseteyeIcon1"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {errorMessage.confirmPassword && (
              <p className="error">{errorMessage.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="resetbtn"
            disabled={disabled}
            style={{
              backgroundColor: disabled ? "#dbd2f0d2" : "#804bf2",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            onClick={() => navigate("/login")}
          >
            {loading ? "Loading..." : "Reset Password"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default ResetPassword;
