import React, { useState } from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <img src={logo} alt="SoilBank Logo" className="logo-image" />
        <span className="logo-text">SoilBank</span>
      </div>

      {/* Navigation links in center */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/investors" className="nav-link" onClick={closeMenu}>
          For Investors
        </Link>
        <Link to="/farmers" className="nav-link" onClick={closeMenu}>
          For Farmers
        </Link>
        <button className="login-btn mobile-login" onClick={closeMenu}>
          Sign In
        </button>
      </div>

      {/* Hamburger menu icon */}
      <div
        className={`hamburger-icon ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Login button on the right (desktop only) */}
      <div className="navbar-auth">
        <button className="login-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
