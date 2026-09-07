import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faAward, 
  faTrophy, 
  faStar, 
  faArrowTrendUp, 
  faCalendarAlt, 
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Timeline.scss';

interface PromotionNode {
  year: string;
  role: string;
  company: string;
  companyShort: string;
  type: "promotion" | "award" | "qualification" | "foundation";
  badge: string;
  level: number; // 1 to 5 for elevation
  chips: string[];
}

interface CompanyTenure {
  company: string;
  shortName: string;
  role: string;
  period: string;
  duration: string;
  startYear: number;
  endYear: number;
  totalYears: number;
  color: string;
  badge: string;
  achievements: string[];
}

const promotionData: PromotionNode[] = [
  {
    year: "2015 – 2018",
    role: "CA Articleship Trainee",
    company: "N K Jain & Co., Chartered Accountants",
    companyShort: "N K Jain & Co.",
    type: "foundation",
    badge: "ICAI Mandatory Articleship (3 Yrs)",
    level: 1,
    chips: ["Statutory Audits", "Tax Audit (Sec 44AB)", "CAATs", "Direct Taxation"]
  },
  {
    year: "2018",
    role: "Chartered Accountant (CA)",
    company: "The Institute of Chartered Accountants of India",
    companyShort: "ICAI",
    type: "qualification",
    badge: "Qualified Chartered Accountant · Exemptions in AMA, ISCA & SFM",
    level: 2,
    chips: ["ICAI Certified", "Advanced Financial Management", "Corporate Laws"]
  },
  {
    year: "2019",
    role: "Audit Executive",
    company: "N K Jain & Co., Chartered Accountants",
    companyShort: "N K Jain & Co.",
    type: "promotion",
    badge: "Post-Qualification Promotion · Risk & Audit Practice",
    level: 3,
    chips: ["Internal Audits", "ICFR Assurance", "GST Compliances", "Tax Advisory"]
  },
  {
    year: "2019 – 2021",
    role: "Manager – Finance & Accounts",
    company: "Cars24 Services Pvt. Ltd.",
    companyShort: "Cars24",
    type: "foundation",
    badge: "Corporate Controlling Transition",
    level: 3,
    chips: ["P2P & O2C Workflows", "Financial Controls", "Ind AS Reporting"]
  },
  {
    year: "2021",
    role: "Senior Manager / Finance Controller",
    company: "Cars24 Services Pvt. Ltd.",
    companyShort: "Cars24",
    type: "promotion",
    badge: "Promoted to Controllership · Employee of the Year 2021",
    level: 4,
    chips: ["Ind AS 109, 115, 116", "Statutory Audit Lead (EY/GT)", "₹80 Cr ESOP Buyback"]
  },
  {
    year: "2022",
    role: "Finance Controller",
    company: "Cars24 Services Pvt. Ltd.",
    companyShort: "Cars24",
    type: "award",
    badge: "Mr. Detail Oriented Award 2022 · Consistent 5/5 Rating",
    level: 4,
    chips: ["Global Entity Expansion", "ICFR Systems", "Team Leadership (10 Members)"]
  },
  {
    year: "2023 – Present",
    role: "Senior Manager – Controlling / Business Finance (India Lead)",
    company: "Cargo Partner Logistics India Pvt. Ltd. (Nippon Express)",
    companyShort: "Cargo Partner (Nippon Express)",
    type: "promotion",
    badge: "Promoted to India Lead · GEM Award 2024 & 2025 · Top Support Function 2024",
    level: 5,
    chips: ["Strategic FP&A", "AOP & Forecasting", "Profitability Turnaround", "SAP & Power BI"]
  }
];

const companyTenureData: CompanyTenure[] = [
  {
    company: "Cargo Partner Logistics India Pvt. Ltd.",
    shortName: "Cargo Partner (Nippon Express)",
    role: "Senior Manager – Controlling / Business Finance (India Lead)",
    period: "Aug 2023 – Present",
    duration: "2.5+ Years",
    startYear: 2023,
    endYear: 2026,
    totalYears: 2.6,
    color: "#5000ca",
    badge: "GEM Award (2024 & 2025) · Top Support Function Award",
    achievements: [
      "India Lead for Financial Controlling & Business Finance",
      "Spearheaded Annual Operating Plans (AOP) and Profitability Turnaround",
      "Turned ~75% profit centers profitable & generated ₹50+ Lacs recurring savings"
    ]
  },
  {
    company: "Cars24 Services Pvt. Ltd.",
    shortName: "Cars24 Services",
    role: "Senior Manager / Finance Controller",
    period: "Dec 2019 – Aug 2023",
    duration: "3 Years 9 Months",
    startYear: 2019,
    endYear: 2023,
    totalYears: 3.75,
    color: "#ff6b00",
    badge: "Employee of the Year 2021 · Detail Oriented Award 2022 · Rated 5/5",
    achievements: [
      "Promoted to Controllership leading statutory & ICFR audits (EY, GT)",
      "Compressed month-end closing from 11th to 7th day under Ind-AS",
      "Managed ₹80 Cr ESOP share buyback & led 10-member finance team"
    ]
  },
  {
    company: "N K Jain & Co., Chartered Accountants",
    shortName: "N K Jain & Co. (Post-CA)",
    role: "Audit Executive",
    period: "Jan 2019 – Dec 2019",
    duration: "1 Year",
    startYear: 2019,
    endYear: 2019.9,
    totalYears: 1.0,
    color: "#0284c7",
    badge: "Post-Qualification Assurance & GST Practice",
    achievements: [
      "Risk-based internal audits and physical control verifications",
      "Supervised direct and indirect taxation (GST returns & audits)"
    ]
  },
  {
    company: "N K Jain & Co., Chartered Accountants",
    shortName: "N K Jain & Co. (Articleship)",
    role: "Chartered Accountant Trainee (Articleship)",
    period: "2015 – 2018",
    duration: "3 Years",
    startYear: 2015,
    endYear: 2018,
    totalYears: 3.0,
    color: "#475569",
    badge: "ICAI Mandatory 3-Year Articleship",
    achievements: [
      "Statutory audits (Companies Act, 2013) & Tax Audits (Form 3CD)",
      "CAATs analytical procedures & ledger reconciliations"
    ]
  }
];

function Timeline() {
  const [activeTab, setActiveTab] = useState<"graph" | "yoy">("graph");

  return (
    <div id="history">
      <div className="items-container">
        <div className="history-header">
          <h1>Career Progression & History</h1>
          <p className="timeline-subtitle">
            Year-on-Year Growth Trajectory, Corporate Tenures & Promotion Milestones (2015 – Present)
          </p>

          {/* Tab Selector */}
          <div className="career-view-tabs">
            <button 
              className={`tab-btn ${activeTab === 'graph' ? 'active' : ''}`}
              onClick={() => setActiveTab('graph')}
            >
              <FontAwesomeIcon icon={faArrowTrendUp} /> Promotion Graph & Milestones
            </button>
            <button 
              className={`tab-btn ${activeTab === 'yoy' ? 'active' : ''}`}
              onClick={() => setActiveTab('yoy')}
            >
              <FontAwesomeIcon icon={faBuilding} /> Company Year-on-Year Chart
            </button>
          </div>
        </div>

        {/* VIEW 1: PROMOTION GRAPH FROM LINKEDIN */}
        {activeTab === 'graph' && (
          <div className="promotion-graph-section">
            <div className="graph-intro-bar">
              <div className="metric-box">
                <span className="metric-val">8+ Years</span>
                <span className="metric-lbl">Total Experience</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">5 Levels</span>
                <span className="metric-lbl">Career Elevation</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">3 Top Brands</span>
                <span className="metric-lbl">Corporate Tenures</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">5+ Awards</span>
                <span className="metric-lbl">Honors & Recognition</span>
              </div>
            </div>

            {/* Stepped Elevation Promotion Chart */}
            <div className="stepped-promotion-chart">
              {promotionData.map((node, index) => {
                const isCurrent = index === promotionData.length - 1;
                return (
                  <div key={index} className={`promotion-step-card level-${node.level} ${isCurrent ? 'current-step' : ''}`}>
                    <div className="step-elevation-badge">
                      <span className="level-indicator">Level {node.level}</span>
                      <span className="step-year"><FontAwesomeIcon icon={faCalendarAlt} /> {node.year}</span>
                    </div>

                    <div className="step-body">
                      <div className="company-logo-header">
                        <span className="company-logo-pill">[Company / Firm Logo]</span>
                        <span className="company-title-text">{node.company}</span>
                      </div>

                      <h3 className="role-heading">{node.role}</h3>

                      <div className="promotion-milestone-pill">
                        {node.type === 'award' && <FontAwesomeIcon icon={faTrophy} />}
                        {node.type === 'promotion' && <FontAwesomeIcon icon={faArrowTrendUp} />}
                        {node.type === 'qualification' && <FontAwesomeIcon icon={faStar} />}
                        {node.type === 'foundation' && <FontAwesomeIcon icon={faCheckCircle} />}
                        <span>{node.badge}</span>
                      </div>

                      <div className="skill-chips-row">
                        {node.chips.map((chip, i) => (
                          <span key={i} className="skill-chip">{chip}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: YEAR-ON-YEAR COMPANY WORKED WITH CHART */}
        {activeTab === 'yoy' && (
          <div className="yoy-company-section">
            <div className="yoy-chart-container">
              {/* Timeline Header Scale */}
              <div className="yoy-scale-header">
                <div className="scale-title">Company Tenure & Year-on-Year Timeline</div>
                <div className="scale-years">
                  <span>2015</span>
                  <span>2017</span>
                  <span>2019</span>
                  <span>2021</span>
                  <span>2023</span>
                  <span>2025</span>
                  <span>Present</span>
                </div>
              </div>

              {/* Company YoY Cards */}
              <div className="yoy-cards-list">
                {companyTenureData.map((item, index) => (
                  <div key={index} className="yoy-company-card" style={{ borderLeftColor: item.color }}>
                    <div className="card-top-row">
                      <div className="company-info-group">
                        <span className="company-logo-pill">[Company / Firm Logo]</span>
                        <div>
                          <h3 className="company-main-name">{item.company}</h3>
                          <div className="company-designation">{item.role}</div>
                        </div>
                      </div>

                      <div className="tenure-badge-box">
                        <span className="tenure-duration" style={{ background: item.color }}>
                          {item.duration}
                        </span>
                        <span className="tenure-period">{item.period}</span>
                      </div>
                    </div>

                    {/* Progress Bar Visualization */}
                    <div className="timeline-visual-bar-wrapper">
                      <div className="timeline-visual-track">
                        <div 
                          className="timeline-visual-fill"
                          style={{ 
                            background: item.color,
                            width: `${Math.min(100, Math.round((item.totalYears / 10.5) * 100))}%`
                          }}
                        />
                      </div>
                      <span className="tenure-percentage-label">
                        {Math.round((item.totalYears / 10.5) * 100)}% of Total Career
                      </span>
                    </div>

                    {/* Milestone / Award Tag */}
                    <div className="card-milestone-tag">
                      <FontAwesomeIcon icon={faAward} />
                      <span>{item.badge}</span>
                    </div>

                    {/* Quick Highlights */}
                    <ul className="yoy-highlights-list">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx}>
                          <FontAwesomeIcon icon={faCheckCircle} /> {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;