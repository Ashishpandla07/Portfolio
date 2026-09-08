import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="about-content">
          <h1 className="about-heading">About Me</h1>

          <div className="about-statement">
            <p className="statement-line lead">
              Results-oriented finance leader with 8 years of experience in FP&A, financial controlling, and strategic business collaboration. Expertise in budgeting, forecasting, profitability analysis, financial reporting, and compliance, with a proven ability to drive cost optimization, improve controls, and support business growth through data-driven financial insights.</p>
          </div>

          {/* Clean Contact Badges */}
          <div className="about-badges">
            <a href="tel:+918058914286" className="badge-item phone">
              <PhoneIcon className="badge-icon" />
              <span>+91 80589 14286</span>
            </a>
            <a href="mailto:ashishpandla07@gmail.com" className="badge-item email">
              <EmailIcon className="badge-icon" />
              <span>ashishpandla07@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/ipandla" target="_blank" rel="noreferrer" className="badge-item linkedin">
              <LinkedInIcon className="badge-icon" />
              <span>linkedin.com/in/ipandla</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;