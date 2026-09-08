import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileImg from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container" id="about">
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
          <h1>About Me</h1>
          <p className="secondary hero-bio">
            Results-oriented finance leader with 8 years of experience in FP&A, financial controlling, and strategic business 
collaboration. Expertise in budgeting, forecasting, profitability analysis, financial reporting, and compliance, with a 
proven ability to drive cost optimization, improve controls, and support business growth through data-driven financial 
insights. </p>

          <div className="hero-action-buttons">
            <a
              href={`${process.env.PUBLIC_URL || ''}/Resume-Ashish.pdf`}
              target="_blank"
              rel="noreferrer"
              className="hero-btn primary-btn"
            >
              📄 View Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-btn secondary-btn"
            >
              ✉️ Contact Me
            </a>
          </div>

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