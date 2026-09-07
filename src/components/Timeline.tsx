import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faChartLine, faAward, faTrophy, faStar } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <p className="timeline-subtitle">Chartered Accountant & Finance Leader · Track Record of Strategic FP&A, Controllership & Value Creation</p>
        <VerticalTimeline>
          {/* Role 1: Cargo Partner Logistics */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2023 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="timeline-header-block">
              <div className="company-logo-tag">
                <span className="logo-placeholder-pill">[Company / Firm Logo]</span>
                <span className="company-name">Cargo Partner Logistics India Pvt. Ltd.</span>
              </div>
              <div className="career-progression-badge">
                <FontAwesomeIcon icon={faTrophy} /> GEM Award (2024 & 2025) · Top Support Function Award
              </div>
            </div>

            <h3 className="vertical-timeline-element-title">Senior Manager – Controlling / Business Finance (India Lead)</h3>
            <h4 className="vertical-timeline-element-subtitle">Subsidiary of Nippon Express Group · Gurugram, India</h4>

            <ul>
              <li>
                <strong>Strategic FP&A & Corporate Forecasting:</strong> Orchestrated comprehensive Annual Operating Plans (AOP) and dynamic rolling forecasts across business units; developed variance analysis frameworks delivering real-time operating metrics and actionable insights to senior leadership.
              </li>
              <li>
                <strong>Profitability Turnaround & Commercial ROI:</strong> Engineered profitability turnaround programs across decentralized logistics branches, converting ~75% of profit centers into profitable units, boosting operational productivity by 20%, and scaling ROI from 1x to 2x.
              </li>
              <li>
                <strong>Cost Governance & Working Capital:</strong> Spearheaded strategic cost-control initiatives across cost centers, eliminating operational leakages to unlock ₹50+ Lacs in annual recurring savings while optimizing P2P and O2C cycles to strengthen liquidity.
              </li>
              <li>
                <strong>Enterprise Business Intelligence & MIS:</strong> Architected automated BI reporting models and executive dashboards (Budget vs. Actual, Sales Rankings, Volume/Yield trackers) using SAP and Power BI for data-driven executive decision-making.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Role 2: Cars24 Services */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Dec 2019 – Aug 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          >
            <div className="timeline-header-block">
              <div className="company-logo-tag">
                <span className="logo-placeholder-pill">[Company / Firm Logo]</span>
                <span className="company-name">Cars24 Services Pvt. Ltd.</span>
              </div>
              <div className="career-progression-badge">
                <FontAwesomeIcon icon={faAward} /> Employee of the Year (2021) · Detail-Oriented Award (2022) · Rated 5/5
              </div>
            </div>

            <h3 className="vertical-timeline-element-title">Senior Manager / Finance Controller</h3>
            <h4 className="vertical-timeline-element-subtitle">Cars24 Services Pvt. Ltd. · Gurugram, India</h4>

            <ul>
              <li>
                <strong>Statutory Controllership & Ind AS:</strong> Directed multi-entity financial statement consolidation and reporting under Ind AS (109, 115, 116, 102); compressed month-end financial closing schedules from the 11th to the 7th business day through process automation.
              </li>
              <li>
                <strong>Statutory, Tax & ICFR Audit Leadership:</strong> Spearheaded statutory, tax, and Internal Financial Controls (ICFR) audits coordinating with Big-4 and top-tier audit firms (EY, Grant Thornton); established robust Risk & Control Matrices (RCM) achieving clean audit reports.
              </li>
              <li>
                <strong>Capital Transactions & ESOP Execution:</strong> Managed the financial execution, regulatory reporting, and compliance governance for an ₹80 Cr ESOP share buyback program.
              </li>
              <li>
                <strong>Global Expansion & Team Mentorship:</strong> Supported international expansion across Southeast Asia and Middle East markets, establishing banking channels, legal entity compliances, and controllership frameworks while mentoring a 10-member finance team.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Role 3: N K Jain & Co. (Audit Executive) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jan 2019 – Dec 2019"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faChartLine} />}
          >
            <div className="timeline-header-block">
              <div className="company-logo-tag">
                <span className="logo-placeholder-pill">[Company / Firm Logo]</span>
                <span className="company-name">N K Jain & Co., Chartered Accountants</span>
              </div>
              <div className="career-progression-badge">
                <FontAwesomeIcon icon={faStar} /> Post-Qualification Assurance & Direct/Indirect Tax Practice
              </div>
            </div>

            <h3 className="vertical-timeline-element-title">Audit Executive</h3>
            <h4 className="vertical-timeline-element-subtitle">N K Jain & Co., Chartered Accountants · Gurugram, India</h4>

            <ul>
              <li>
                <strong>Internal Audits & Risk Assurance:</strong> Executed end-to-end risk-based internal audits and physical verification engagements across corporate clients, evaluating internal financial controls (IFC) and remediating control deficiencies.
              </li>
              <li>
                <strong>Audit Planning & Substantive Testing:</strong> Formulated comprehensive audit programs, substantive testing procedures, and analytical reviews of financial statements in accordance with ICAI Standards on Auditing (SAs).
              </li>
              <li>
                <strong>Taxation & GST Statutory Compliance:</strong> Supervised direct and indirect tax reporting, managing GST returns (GSTR-1, GSTR-3B, GSTR-9/9C) and Input Tax Credit (ITC) reconciliations with zero statutory penalty exposure.
              </li>
              <li>
                <strong>Technical Advisory & Tax Research:</strong> Delivered expert technical advisory and research memoranda on complex GST disputes, corporate tax rulings, and statutory compliance defense during assessment proceedings.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Role 4: N K Jain & Co. (CA Articleship) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2015 – 2018 (3 Years)"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="timeline-header-block">
              <div className="company-logo-tag">
                <span className="logo-placeholder-pill">[Company / Firm Logo]</span>
                <span className="company-name">N K Jain & Co., Chartered Accountants</span>
              </div>
              <div className="career-progression-badge">
                <FontAwesomeIcon icon={faStar} /> ICAI 3-Year Articleship · Statutory & Tax Audits
              </div>
            </div>

            <h3 className="vertical-timeline-element-title">Chartered Accountant Trainee (Articleship)</h3>
            <h4 className="vertical-timeline-element-subtitle">N K Jain & Co., Chartered Accountants · Delhi NCR, India</h4>

            <ul>
              <li>
                <strong>Statutory & Tax Audits:</strong> Managed statutory audits under the Companies Act, 2013 and prepared Tax Audit Reports under Section 44AB (Form 3CD) across manufacturing and trading entities.
              </li>
              <li>
                <strong>CAATs & Ledger Verification:</strong> Utilized Computer-Assisted Audit Techniques (CAATs) and analytical procedures to verify internal controls, journal vouchers, vendor reconciliations, and bank statements.
              </li>
              <li>
                <strong>Statutory Filings & Due Diligence:</strong> Managed TDS/TCS filings, corporate secretarial documentation (ROC filings), and vendor invoicing compliance, establishing deep foundational expertise across statutory accounting standards.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;