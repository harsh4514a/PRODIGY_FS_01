import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img1.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);

  return (
    <div className="hero-section">
      <img src={heroImage} alt="Secure authentication" />
      <h4>Hello, {user ? user.name : "User"}</h4>
      <h1>Secure User Authentication System</h1>
      <p>
        This application demonstrates a complete authentication flow using the
        MERN stack with OTP verification via Twilio and Nodemailer. Register,
        verify your account, and log in securely with encrypted passwords and
        token-based sessions.
      </p>
    </div>
  );
};

export default Hero;
