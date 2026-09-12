import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import profileImg from '../assets/images/profile.webp';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="about-content">
          {/* Mobile Profile Photo (Visible ONLY on mobile screens <= 992px, strictly hidden on desktop web version) */}
          <div className="mobile-profile-photo" aria-label="Profile photo of CA Ashish Pandla">
            <div className="mobile-avatar-wrapper">
              <img
                src={profileImg}
                srcSet={`${profileImg} 1x`}
                alt="CA Ashish Pandla"
                width={140}
                height={140}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <h1 className="about-heading">About Me</h1>

          <div className="about-statement">
            <p className="statement-line lead">
              Senior Finance Leader and Chartered Accountant with over 8 years of cross-functional experience. Leading FP&amp;A, financial controlling, and commercial strategy across high-growth environments including CARS24 and cargo-partner. Specializing in annual operating plans, rolling forecasts, unit economics, and audit governance. Partnering with executive leadership to turn financial data into decisive business growth.
            </p>
          </div>

          {/* Clean Contact Badges (Phone, Email & LinkedIn) */}
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