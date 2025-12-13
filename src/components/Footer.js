import React from "react";
import "./Footer.css";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="SoilBank Logo" className="footer-logo" />
          <h3 className="footer-brand">SoilBank</h3>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>
          <p>Email: info@soilbank.com</p>
          <p>Phone: +41 (0) 21 123 4567</p>
          <p>Location: Lausanne, Switzerland</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <p>
            <a href="#facebook" className="social-link">
              Facebook
            </a>{" "}
            |
            <a href="#twitter" className="social-link">
              Twitter
            </a>{" "}
            |
            <a href="#linkedin" className="social-link">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SoilBank. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
