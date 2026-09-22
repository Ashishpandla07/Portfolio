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
                width={135}
                height={135}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <h1 className="about-heading">About Me</h1>

          <div className="about-statement">
            <p className="statement-line lead">
              Chartered Accountant and Executive Finance Leader with over 8 years of cross-functional experience across high-growth tech (<strong>CARS24</strong>) and global MNC logistics (<strong>cargo-partner</strong>). Proven track record directing company-wide annual operating plans (AOP), dynamic financial modeling, multi-entity controllership, and Big-4 audit governance.
            </p>
            <p className="statement-line lead">
              Strategic finance co-pilot to executive leadership and the Board—translating financial intelligence into decisive business growth, unit economics optimization, working capital excellence, and scalable financial operations.
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