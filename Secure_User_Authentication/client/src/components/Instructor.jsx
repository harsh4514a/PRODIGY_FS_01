import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.png";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        
        <div className="instructor-info">
          <h1>Harsh Gondaliya</h1>
          <h4>Full Stack Developer</h4>
          <p>
            This project is built as part of a web development internship to
            implement a secure user authentication system using the MERN stack.
            It focuses on core concepts like registration, login, password
            hashing with bcrypt, OTP-based verification, and JWT-based
            authentication. The goal is to create a clean, secure and
            easy-to-understand foundation for real-world auth systems.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/harsh4514a"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-gondaliya-156b481b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
