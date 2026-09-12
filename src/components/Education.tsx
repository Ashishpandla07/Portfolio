import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import icaiLogo from '../assets/images/icai_logo.png';
import rajasthanLogo from '../assets/images/rajasthan_university_logo.png';
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div className="education-container" id="credentials">
      <div className="section-header">
        <h2>Education & Credentials</h2>
      </div>
      <div className="education-grid">
        {/* Entry 1: Chartered Accountant Qualification */}
        <div className="education-card">
          <div className="card-top-bar">
            <span className="credential-badge">Professional Qualification</span>
            <span className="year-pill">
              <CalendarTodayIcon />
              <span>2018</span>
            </span>
          </div>

          <div className="card-header">
            <div className="card-icon-wrapper" aria-label="ICAI Logo">
              <img src={icaiLogo} alt="The Institute of Chartered Accountants of India" className="institution-logo" />
            </div>
            <div className="card-title-group">
              <h3>Chartered Accountant (CA)</h3>
              <p className="institution-name">The Institute of Chartered Accountants of India (ICAI)</p>
            </div>
          </div>

          <div className="card-body">
            <div className="highlights-heading">Key Highlights & Honors</div>
            <ul className="highlights-list">
              <li>
                <strong>Exemptions:</strong> Secured exemptions in Strategic Financial Management (SFM), Advanced Management Accounting (AMA), and ISCA.
              </li>
              <li>
                <strong>Articleship Experience:</strong> 3 years of hands-on exposure managing client engagements, statutory audits, and regulatory filings.
              </li>
              <li>
                <strong>Taxation & Advisory:</strong> Strategic capability in corporate tax planning, GST compliance, and transfer pricing documentation.
              </li>
              <li>
                <strong>Technology & Analytics:</strong> Hands-on command of digital auditing tools (CAATs), ERP systems, and Excel modeling gained via Advanced ITT.
              </li>
              <li>
                <strong>Management & Leadership:</strong> Executive communication, negotiation, and decision-making skills honed through ICAI's GMCS courses.
              </li>
            </ul>
          </div>
        </div>

        {/* Entry 2: Bachelor's and Master's Degree */}
        <div className="education-card">
          <div className="card-top-bar">
            <span className="credential-badge">Academic Qualifications</span>
            <span className="year-pill">
              <CalendarTodayIcon />
              <span>2014 – 2016</span>
            </span>
          </div>

          <div className="card-header">
            <div className="card-icon-wrapper" aria-label="University of Rajasthan Logo">
              <img src={rajasthanLogo} alt="University of Rajasthan" className="institution-logo" />
            </div>
            <div className="card-title-group">
              <h3>Master's & Bachelor's Degrees</h3>
              <p className="institution-name">University of Rajasthan</p>
            </div>
          </div>

          <div className="card-body">
            {/* Master's Degree Sub-entry */}
            <div className="degree-sub-entry">
              <div className="sub-entry-header">
                <h4>Master of Commerce (M.Com)</h4>
                <span className="sub-year">2016</span>
              </div>
              <p className="sub-institution">University of Rajasthan</p>
              <p className="sub-description">
                <strong>Specialization:</strong> Advanced Financial Management, Strategic Cost Accounting, and Quantitative Business Analysis.
              </p>
            </div>

            {/* Bachelor's Degree Sub-entry */}
            <div className="degree-sub-entry">
              <div className="sub-entry-header">
                <h4>Bachelor of Commerce (B.Com)</h4>
                <span className="sub-year">2014</span>
              </div>
              <p className="sub-institution">University of Rajasthan</p>
              <p className="sub-description">
                <strong>Specialization:</strong> Corporate & Mercantile Law, Auditing Principles, Financial Accounting, and Macroeconomic Governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
