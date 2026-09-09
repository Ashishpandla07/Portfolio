import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import cars24Logo from '../assets/images/cars24_logo.png';
import cargoPartnerLogo from '../assets/images/cargo_partner_logo.jpg';
import '../assets/styles/Education.scss';

function Timeline() {
  return (
    <div className="education-container" id="history">
      <div className="section-header">
        <h1>Professional Experience</h1>
      </div>
      <div className="education-grid">
        {/* Entry 1: cargo-partner */}
        <div className="education-card">
          <div className="card-top-bar">
            <span className="credential-badge">Current Employer · Hybrid</span>
            <span className="year-pill">
              <CalendarTodayIcon />
              <span>Aug 2023 – Present</span>
            </span>
          </div>

          <div className="card-header">
            <div className="card-icon-wrapper" aria-label="cargo-partner Logo">
              <img src={cargoPartnerLogo} alt="cargo-partner" className="institution-logo" />
            </div>
            <div className="card-title-group">
              <h2>cargo-partner</h2>
              <p className="institution-name">Senior Manager & Manager Controlling</p>
            </div>
          </div>

          <div className="card-body">
            <div className="highlights-heading">Key Career Highlights</div>
            <ul className="highlights-list">
              <li>
                <strong>India Controlling Lead:</strong> Direct financial controllership & strategic board advisory across Indian entities.
              </li>
              <li>
                <strong>Enterprise FP&A:</strong> Orchestrated annual AOPs, rolling forecasts, and variance analysis for executive leadership.
              </li>
              <li>
                <strong>SAP S/4HANA & Power BI:</strong> Deployed automated financial dashboards, cutting reporting latency by 40%.
              </li>
              <li>
                <strong>GEM Awardee:</strong> Winner of GEM Award (2024 & 2025) for top support function & commercial business partnering.
              </li>
            </ul>
          </div>
        </div>

        {/* Entry 2: CARS24 */}
        <div className="education-card">
          <div className="card-top-bar">
            <span className="credential-badge">Full-time · Gurugram</span>
            <span className="year-pill">
              <CalendarTodayIcon />
              <span>Dec 2019 – Aug 2023</span>
            </span>
          </div>

          <div className="card-header">
            <div className="card-icon-wrapper" aria-label="CARS24 Logo">
              <img src={cars24Logo} alt="CARS24" className="institution-logo" />
            </div>
            <div className="card-title-group">
              <h2>CARS24</h2>
              <p className="institution-name">Senior Manager, Manager & AM</p>
            </div>
          </div>

          <div className="card-body">
            <div className="highlights-heading">Key Career Highlights</div>
            <ul className="highlights-list">
              <li>
                <strong>Capital Transactions:</strong> Executed ₹80 Cr ESOP Buyback & managed overseas entity structuring and transfer pricing.
              </li>
              <li>
                <strong>Big-4 Audit Lead:</strong> Spearheaded Statutory Audits (EY / GT) securing CARS24's first clean, unqualified ICFR opinion.
              </li>
              <li>
                <strong>Close Cycle Compression:</strong> Compressed month-end close cycle from 11th to 7th day via FinOps automation.
              </li>
              <li>
                <strong>Awards & Ratings:</strong> Employee of the Year 2021, Detail-Oriented Awardee 2022, and consistently rated 5/5.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;