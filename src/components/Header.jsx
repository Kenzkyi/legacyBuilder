import React from "react";
import "../styles/header.css";
import menuBar from "../assets/navBar.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderLogo from "../assets/public/legacy_builder_logo.png";

const Header = () => {
  const location = useLocation();
  const nav = useNavigate();

  return (
    <div className="header">
      <div className="header-holder">
        <div className="header-holderImg">
          <img src={HeaderLogo} alt="Legacy Builders" />
        </div>
        <div className="header-holderText">
          <ul>
            {menuBar.map((item, index) => (
              <li
                key={index}
                style={{
                  borderColor:
                    location.pathname === item.link ? "#804BF2" : "white",
                }}
              >
                <Link
                  to={item.link}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <aside>
            <button className="header-signup" onClick={() => nav("/signup")}>
              SIGN UP
            </button>
            <button className="header-login" onClick={() => nav("/login")}>
              LOGIN
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Header;
