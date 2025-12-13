import React from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <img src={logo} alt="SoilBank Logo" className="logo-image" />
        <span className="logo-text">SoilBank</span>
      </div>

      {/* Navigation links in center */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/investors" className="nav-link">
          For Investors
        </Link>
        <Link to="/farmers" className="nav-link">
          For Farmers
        </Link>
      </div>

      {/* Login button on the right */}
      <div className="navbar-auth">
        <button className="login-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
