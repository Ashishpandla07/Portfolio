import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GavelIcon from '@mui/icons-material/Gavel';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        {/* Physical Office Address */}
        <div className="footer-address-block">
          <div className="address-header">
            <LocationOnIcon className="footer-icon" />
            <span className="address-title">Location &amp; Primary Contact</span>
          </div>
          <address className="physical-address">
            <span>CA Ashish Pandla</span> • 
            <span> DLF Cyber City, Sector 24 / 25A</span>, 
            <span> Gurugram</span>, <span>Haryana 122002</span>, 
            <span> India</span>
          </address>
        </div>

        {/* Visible YMYL Financial Disclaimer */}
        <div className="footer-disclaimer-box" id="disclaimer">
          <div className="disclaimer-header">
            <GavelIcon className="footer-icon" />
            <span className="disclaimer-title">Professional &amp; Financial Services Disclaimer (YMYL)</span>
          </div>
          <p className="disclaimer-text">
            The quantitative metrics, financial models, case studies, and career highlights presented on this website are published solely for executive portfolio demonstration, recruitment review, and professional showcase purposes. They do not constitute formal certified public accounting (CA/CPA) advisory, financial planning, investment consultation, taxation guidance, or legal advice. All commercial figures reflect verifiable past career achievements; past outcomes do not guarantee future corporate results.
          </p>
        </div>

        {/* Editorial Policy & Compliance Links */}
        <div className="footer-compliance-nav">
          <div className="policy-links">
            <a href="./editorial-policy.html" className="policy-link">
              <MenuBookIcon className="link-icon" />
              <span>Editorial Policy</span>
            </a>
            <span className="sep">•</span>
            <a href="./editorial-policy.html#disclaimers" className="policy-link">
              <span>Disclaimers</span>
            </a>
            <span className="sep">•</span>
            <a href="./editorial-policy.html#contact" className="policy-link">
              <span>Physical Address</span>
            </a>
          </div>
          <p className="copyright-text">
            © {new Date().getFullYear()} CA Ashish Pandla. Chartered Accountant (ICAI). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;