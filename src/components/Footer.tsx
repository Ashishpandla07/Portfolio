import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../assets/styles/Footer.scss';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="executive-footer">

      {/* Gradient Top Accent */}
      <div className="footer-accent-line"></div>

      <div className="footer-inner">

        {/* Row 1: Multi-Column Grid */}
        <div className="footer-grid">

          {/* Column 1: Brand Identity & Tagline */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <h3 className="brand-name">Ashish Pandla</h3>
              <span className="brand-designation">CA · Chartered Accountant</span>
            </div>
            <p className="brand-tagline">
              Strategic Finance Leader specializing in FP&A, financial controlling, Ind-AS / IFRS reporting, and enterprise-level governance for high-growth organizations.
            </p>
            <div className="footer-social-row">
              <a
                href="https://linkedin.com/in/ipandla"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn linkedin"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:ashishpandla07@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn email"
                aria-label="Email"
              >
                <EmailIcon />
              </a>
              <a
                href="tel:+918058914286"
                className="social-icon-btn phone"
                aria-label="Phone"
              >
                <PhoneIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-col nav-col">
            <h4 className="col-heading">Navigate</h4>
            <ul className="footer-nav-list">
              <li><button type="button" onClick={() => scrollToSection('about')}>About Me</button></li>
              <li><button type="button" onClick={() => scrollToSection('expertise')}>Expertise</button></li>
              <li><button type="button" onClick={() => scrollToSection('history')}>Experience</button></li>
              <li><button type="button" onClick={() => scrollToSection('projects')}>Achievements</button></li>
              <li><button type="button" onClick={() => scrollToSection('credentials')}>Education</button></li>
              <li><button type="button" onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="footer-col services-col">
            <h4 className="col-heading">Core Services</h4>
            <ul className="footer-services-list">
              <li>Financial Planning & Analysis</li>
              <li>Budgeting & Forecasting</li>
              <li>Financial Controlling</li>
              <li>Ind-AS / IFRS Reporting</li>
              <li>Tax Planning & Compliance</li>
              <li>Internal Controls (ICFR)</li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="footer-col contact-col">
            <h4 className="col-heading">Reach Out</h4>
            <div className="footer-contact-items">
              <a href="mailto:ashishpandla07@gmail.com" className="contact-line">
                <EmailIcon className="contact-line-icon" />
                <span>ashishpandla07@gmail.com</span>
              </a>
              <a href="tel:+918058914286" className="contact-line">
                <PhoneIcon className="contact-line-icon" />
                <span>+91 80589 14286</span>
              </a>
              <div className="contact-line location">
                <LocationOnIcon className="contact-line-icon" />
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Row 2: Divider + Bottom Bar */}
        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Ashish Pandla, CA &nbsp;·&nbsp; All rights reserved &nbsp;·&nbsp; Member, ICAI
          </p>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUpwardIcon className="top-arrow" />
            <span>Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;