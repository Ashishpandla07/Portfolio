import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileImg from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Ashish Pandla" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://linkedin.com/in/ipandla" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
              <span className="contact-link-text">linkedin.com/in/ipandla</span>
            </a>
            <a href="mailto:ashishpandla07@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon/>
              <span className="contact-link-text">ashishpandla07@gmail.com</span>
            </a>
          </div>
          <h1>CA Ashish Pandla</h1>
          <p>Senior Finance Leader | FP&A, Controllership & Strategic Finance | 8 years of experience | Driving Profitability & Business Growth</p>

          <div className="mobile_social_icons">
            <a href="https://linkedin.com/in/ipandla" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
              <span className="contact-link-text">linkedin.com/in/ipandla</span>
            </a>
            <a href="mailto:ashishpandla07@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon/>
              <span className="contact-link-text">ashishpandla07@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;