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
          <div className="about-tag">
            <span className="tag-dot"></span>
            Chartered Accountant • Strategic Finance Leader
          </div>

          <h1 className="about-heading">About Me</h1>

          <div className="about-statement">
            <p className="statement-line lead">
              Results-oriented <strong>Chartered Accountant (ICAI)</strong> and <strong>Senior Finance Leader</strong> with <strong>8+ years</strong> of cross-functional leadership across Strategic FP&A, Financial Controlling, and Commercial Business Partnering.
            </p>
            <p className="statement-line">
              Proven track record in driving long-range financial forecasting, multi-entity consolidation, working capital optimization, and executing high-stakes capital transactions — including steering an <strong>₹80 Cr share buyback</strong>.
            </p>
            <p className="statement-line">
              Expert in navigating Big-4 statutory & ICFR audits (EY, Grant Thornton), establishing robust internal control frameworks, and transforming complex financial data into actionable, growth-focused business strategies.
            </p>
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