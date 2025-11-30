import React from "react";
import "../styles/Footer.css";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Secure User Authentication</h2>
          <p>
            A MERN-based authentication system with OTP verification using
            Twilio and Nodemailer.
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/harsh4514a"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={git} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-gondaliya-156b481b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Secure Authentication System. All Rights Reserved.</p>
        <p>Designed & Developed by Harsh Gondaliya</p>
      </div>
    </footer>
  );
};

export default Footer;
