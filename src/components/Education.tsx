import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Chip from '@mui/material/Chip';
import icaiLogo from '../assets/images/icai_logo.png';
import rajasthanLogo from '../assets/images/rajasthan_university_logo.png';
import '../assets/styles/Education.scss';

const caSkills = [
  "Statutory Compliance",
  "Financial Governance",
  "Taxation Framework",
  "Ind-AS / IFRS",
  "ICFR & Internal Controls",
  "Auditing & Assurance"
];

const academicSkills = [
  "Corporate Financial Management",
  "Advanced Financial Accounting",
  "Cost & Management Accounting",
  "Corporate & Mercantile Law",
  "Auditing Principles",
  "Business Economics"
];

function Education() {
  return (
    <div className="education-container" id="credentials">
      <div className="section-header">
        <h1>Education & Credentials</h1>
        <p className="section-subtitle">Professional statutory qualifications, financial credentials, and academic degrees</p>
      </div>

      <div className="education-grid">
        {/* Entry 1: Chartered Accountant Qualification */}
        <div className="education-card">
          <div>
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
                <h2>Chartered Accountant (CA)</h2>
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
                  <strong>Financial Reporting:</strong> Proven mastery in preparing Ind AS/IFRS financial statements and designing ICFR control matrices.
                </li>
                <li>
                  <strong>Taxation & Advisory:</strong> Strategic capability in corporate tax planning, GST compliance, and transfer pricing documentation.
                </li>
                <li>
                  <strong>Technology & Analytics:</strong> Hands-on command of digital auditing tools (CAATs), ERP systems, and Excel modeling gained via Advanced ITT.
                </li>
                <li>
                  <strong>Management & Leadership:</strong> Polished executive communication, negotiation, and decision-making skills honed through ICAI's GMCS courses.
                </li>
              </ul>
            </div>
          </div>

          <div className="card-footer">
            <div className="flex-chips">
              <span className="chip-title">Core Competencies:</span>
              {caSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Entry 2: Bachelor's and Master's Degree */}
        <div className="education-card">
          <div>
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
                <h2>Master's & Bachelor's Degrees</h2>
                <p className="institution-name">University of Rajasthan</p>
              </div>
            </div>

            <div className="card-body">
              {/* Bachelor's Degree Sub-entry */}
              <div className="degree-sub-entry">
                <div className="sub-entry-header">
                  <h3>Bachelor of Commerce (B.Com)</h3>
                  <span className="sub-year">2014</span>
                </div>
                <p className="sub-institution">University of Rajasthan</p>
                <p className="sub-description">
                  <strong>Specialization:</strong> Corporate & Mercantile Law, Auditing Principles, Financial Accounting, and Macroeconomic Governance.
                </p>
              </div>

              {/* Master's Degree Sub-entry */}
              <div className="degree-sub-entry">
                <div className="sub-entry-header">
                  <h3>Master of Commerce (M.Com)</h3>
                  <span className="sub-year">2016</span>
                </div>
                <p className="sub-institution">University of Rajasthan</p>
                <p className="sub-description">
                  <strong>Specialization:</strong> Advanced Financial Management, Strategic Cost Accounting, and Quantitative Business Analysis.
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <div className="flex-chips">
              <span className="chip-title">Academic Focus:</span>
              {academicSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
