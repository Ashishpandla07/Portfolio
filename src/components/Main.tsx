import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LanguageIcon from '@mui/icons-material/Language';
import '../assets/styles/Main.scss';

function Main() {
  const highlights = [
    {
      icon: <TrendingUpIcon className="highlight-icon" />,
      value: "8+ Years",
      label: "Strategic FP&A & Controlling",
      desc: "Budgeting, variance analysis & data-backed decision support"
    },
    {
      icon: <AccountBalanceIcon className="highlight-icon" />,
      value: "₹80 Cr+",
      label: "Capital Transactions",
      desc: "ESOP share buyback & capital structuring execution"
    },
    {
      icon: <VerifiedUserIcon className="highlight-icon" />,
      value: "Big-4 Audits",
      label: "ICFR & Governance",
      desc: "Clean reports with EY & Grant Thornton, risk remediation"
    },
    {
      icon: <LanguageIcon className="highlight-icon" />,
      value: "Multi-Entity",
      label: "Global Operations",
      desc: "Ind-AS, IFRS, transfer pricing & cross-border controllership"
    }
  ];

  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="about-hero-card">
          {/* Header Pill */}
          <div className="about-badge">
            <span className="badge-dot"></span>
            Chartered Accountant (ICAI) • Strategic Finance Leader
          </div>

          <h1 className="about-title">About Me</h1>
          
          <h2 className="about-subtitle">
            Driving Sustainable Growth Through Financial Precision & Strategic Leadership
          </h2>

          <div className="about-bio-container">
            <p className="about-bio-lead">
              Results-driven <strong>Chartered Accountant</strong> and <strong>Senior Finance Leader</strong> with <strong>8+ years</strong> of cross-industry expertise spanning Strategic FP&A, Financial Controlling, and Commercial Business Partnering across high-growth startups (<em>Cars24</em>) and global logistics leaders (<em>cargo-partner</em>).
            </p>
            <p className="about-bio-body">
              Specialized in budgeting & forecasting, multi-entity consolidation, working capital optimization, and corporate governance. Proven track record of spearheading complex capital transactions—including an <strong>₹80 Cr share buyback</strong>—and delivering clean statutory & ICFR audits with Big-4 firms through rigorous internal controls and financial process excellence.
            </p>
          </div>

          {/* Quick Highlight Metrics */}
          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <div className="highlight-card" key={idx}>
                <div className="highlight-header">
                  <div className="icon-box">{item.icon}</div>
                  <span className="highlight-value">{item.value}</span>
                </div>
                <h3 className="highlight-label">{item.label}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Direct Quick Contact Pills */}
          <div className="about-contact-bar">
            <a href="tel:+918058914286" className="contact-pill phone-pill">
              <PhoneIcon sx={{ fontSize: '1.1rem' }} />
              <span>+91 80589 14286</span>
            </a>
            <a href="mailto:ashishpandla07@gmail.com" className="contact-pill email-pill">
              <EmailIcon sx={{ fontSize: '1.1rem' }} />
              <span>ashishpandla07@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/ipandla" target="_blank" rel="noreferrer" className="contact-pill linkedin-pill">
              <LinkedInIcon sx={{ fontSize: '1.1rem' }} />
              <span>linkedin.com/in/ipandla</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;