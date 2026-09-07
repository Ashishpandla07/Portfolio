import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faAward, 
  faTrophy, 
  faArrowTrendUp, 
  faCalendarAlt, 
  faCheckCircle,
  faLocationDot,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import cars24Logo from '../assets/images/cars24_logo.png';
import cargoPartnerLogo from '../assets/images/cargo_partner_logo.jpg';
import icaiLogo from '../assets/images/icai_logo.png';
import '../assets/styles/Timeline.scss';

interface PromotionNode {
  period: string;
  duration: string;
  role: string;
  company: string;
  companyShort: string;
  location: string;
  workMode?: string;
  logo: string;
  type: "promotion" | "award" | "foundation";
  badge: string;
  subheading: string;
  level: number;
  skills: string[];
}

interface CompanyYoY {
  company: string;
  shortName: string;
  logo: string;
  employmentType: string;
  period: string;
  duration: string;
  location: string;
  workMode?: string;
  color: string;
  rolesLadder: {
    title: string;
    period: string;
    duration: string;
    workMode?: string;
    badge?: string;
  }[];
  skillsSummary: string[];
}

// Ordered in REVERSE CHRONOLOGICAL ORDER: Present (Latest) at Top → Past at Bottom
const promotionData: PromotionNode[] = [
  {
    period: "Apr 2026 – Present",
    duration: "6 mos",
    role: "Senior Manager Controlling",
    company: "cargo-partner",
    companyShort: "cargo-partner",
    location: "Gurugram, Haryana, India",
    workMode: "Hybrid",
    logo: cargoPartnerLogo,
    type: "promotion",
    badge: "India Lead · Strategic Controllership",
    subheading: "Executive FP&A, commercial governance & leadership",
    level: 6,
    skills: ["Strategic FP&A", "India Controlling Lead", "Profitability Turnaround", "Executive Leadership"]
  },
  {
    period: "Aug 2023 – Mar 2026",
    duration: "2 yrs 8 mos",
    role: "Manager Controlling",
    company: "cargo-partner",
    companyShort: "cargo-partner",
    location: "Gurugram, Haryana, India",
    workMode: "Hybrid",
    logo: cargoPartnerLogo,
    type: "award",
    badge: "GEM Award Winner · FP&A Lead",
    subheading: "Budget forecasting & cross-border profitability turnaround",
    level: 5,
    skills: ["Budget Forecasting", "Business Partner Relations", "FP&A", "SAP & Power BI"]
  },
  {
    period: "Apr 2023 – Aug 2023",
    duration: "5 mos",
    role: "Senior Manager",
    company: "CARS24",
    companyShort: "CARS24",
    location: "Gurugram, Haryana, India",
    workMode: "On-site",
    logo: cars24Logo,
    type: "promotion",
    badge: "Controllership & Capital Markets Lead",
    subheading: "₹80 Cr ESOP buyback governance & international expansion",
    level: 5,
    skills: ["Business Ethics", "Team Management", "₹80 Cr ESOP Buyback", "Global Expansion"]
  },
  {
    period: "Apr 2022 – Mar 2023",
    duration: "1 yr",
    role: "Manager",
    company: "CARS24",
    companyShort: "CARS24",
    location: "Gurugram, Haryana, India",
    logo: cars24Logo,
    type: "award",
    badge: "Big-4 Audit & Ind AS Lead",
    subheading: "Zero-defect statutory audit defense & technical accounting",
    level: 4,
    skills: ["Management", "Leadership", "Statutory & ICFR Audits (EY/GT)", "Ind AS 115 & 116"]
  },
  {
    period: "Apr 2021 – Mar 2022",
    duration: "1 yr",
    role: "Assistant Manager",
    company: "CARS24",
    companyShort: "CARS24",
    location: "Gurugram, Haryana, India",
    logo: cars24Logo,
    type: "award",
    badge: "Employee of the Year · FinOps",
    subheading: "Continuous closing workflows & automated reconciliations",
    level: 3,
    skills: ["Account Reconciliation", "Teamwork", "Ind AS Reporting", "Financial Statements"]
  },
  {
    period: "Dec 2019 – Mar 2021",
    duration: "1 yr 4 mos",
    role: "Team Lead",
    company: "CARS24",
    companyShort: "CARS24",
    location: "Gurugram, Haryana, India",
    workMode: "On-site",
    logo: cars24Logo,
    type: "foundation",
    badge: "Scalable Finance Process Architecture",
    subheading: "Building enterprise transaction rails for rapid scale",
    level: 2,
    skills: ["Company Law", "P2P & O2C Workflows", "Financial Reconciliations", "Internal Controls"]
  },
  {
    period: "Jan 2019 – Dec 2019",
    duration: "1 yr",
    role: "Audit Executive",
    company: "N K Jain & Co.",
    companyShort: "N K Jain & Co.",
    location: "Gurugram, Haryana, India",
    logo: icaiLogo,
    type: "foundation",
    badge: "Statutory Assurance & Risk Advisory",
    subheading: "Rigorous forensic verification & corporate compliance baseline",
    level: 1,
    skills: ["Audit & Assurance", "ICFR Frameworks", "GST Compliance", "Direct Tax Advisory"]
  }
];

const companyYoYData: CompanyYoY[] = [
  {
    company: "cargo-partner",
    shortName: "cargo-partner",
    logo: cargoPartnerLogo,
    employmentType: "Full-time",
    period: "Aug 2023 – Present",
    duration: "3 yrs 2 mos",
    location: "Gurugram, Haryana, India",
    workMode: "Hybrid",
    color: "#5000ca",
    rolesLadder: [
      {
        title: "Senior Manager Controlling",
        period: "Apr 2026 – Present",
        duration: "6 mos",
        workMode: "Hybrid",
        badge: "India Lead · Strategic Controllership"
      },
      {
        title: "Manager Controlling",
        period: "Aug 2023 – Mar 2026",
        duration: "2 yrs 8 mos",
        workMode: "Hybrid",
        badge: "GEM Award Winner · FP&A Lead"
      }
    ],
    skillsSummary: ["Budget Forecasting", "Business Partner Relations", "Strategic FP&A", "Profitability Turnaround"]
  },
  {
    company: "CARS24",
    shortName: "CARS24",
    logo: cars24Logo,
    employmentType: "Full-time",
    period: "Dec 2019 – Aug 2023",
    duration: "3 yrs 9 mos",
    location: "Gurugram, Haryana, India",
    color: "#ff6b00",
    rolesLadder: [
      {
        title: "Senior Manager",
        period: "Apr 2023 – Aug 2023",
        duration: "5 mos",
        workMode: "On-site",
        badge: "Controllership & Capital Markets Lead"
      },
      {
        title: "Manager",
        period: "Apr 2022 – Mar 2023",
        duration: "1 yr",
        badge: "Big-4 Audit & Ind AS Lead"
      },
      {
        title: "Assistant Manager",
        period: "Apr 2021 – Mar 2022",
        duration: "1 yr",
        badge: "Employee of the Year · FinOps"
      },
      {
        title: "Team Lead",
        period: "Dec 2019 – Mar 2021",
        duration: "1 yr 4 mos",
        workMode: "On-site",
        badge: "Scalable Finance Process Architecture"
      }
    ],
    skillsSummary: ["Business Ethics", "Team Management", "Leadership", "Account Reconciliation", "Company Law"]
  },
  {
    company: "N K Jain & Co.",
    shortName: "N K Jain & Co.",
    logo: icaiLogo,
    employmentType: "Full-time",
    period: "Jan 2019 – Dec 2019",
    duration: "1 yr",
    location: "Gurugram, Haryana, India",
    color: "#0284c7",
    rolesLadder: [
      {
        title: "Audit Executive",
        period: "Jan 2019 – Dec 2019",
        duration: "1 yr",
        badge: "Statutory Assurance & Risk Advisory"
      }
    ],
    skillsSummary: ["Internal Audits", "ICFR Assurance", "GST Compliances", "Direct Tax Advisory"]
  }
];

function Timeline() {
  const [activeTab, setActiveTab] = useState<"graph" | "yoy">("graph");

  return (
    <div id="history">
      <div className="items-container">
        <div className="history-header">
          <h1>Experience</h1>
          <p className="timeline-subtitle">
            Executive Career Progression · Present → Past Reverse Chronological Flow
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

        {/* VIEW 1: PROMOTION GRAPH FROM LINKEDIN (PRESENT → PAST) */}
        {activeTab === 'graph' && (
          <div className="promotion-graph-section">
            <div className="graph-intro-bar">
              <div className="metric-box">
                <span className="metric-val">3 Top Brands</span>
                <span className="metric-lbl">Corporate Tenures</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">5 Promotions</span>
                <span className="metric-lbl">Career Trajectory</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">6 Levels</span>
                <span className="metric-lbl">Executive Hierarchy</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">5+ Honors</span>
                <span className="metric-lbl">Awards & Recognition</span>
              </div>
            </div>

            {/* Timeline Direction Indicator */}
            <div className="timeline-flow-indicator">
              <span className="flow-badge top-badge">
                <span className="pulse-beacon" /> PRESENT · LATEST ROLE
              </span>
            </div>

            {/* Stepped Elevation Promotion Chart (Reverse Chronological: Top = Present, Bottom = Past) */}
            <div className="stepped-promotion-chart reverse-flow">
              {promotionData.map((node, index) => {
                const isCurrent = index === 0;
                return (
                  <div 
                    key={index} 
                    className={`promotion-step-card level-${node.level} ${isCurrent ? 'current-step' : ''}`}
                  >
                    <div className="step-elevation-badge">
                      <span className="level-indicator">Level {node.level}</span>
                      <span className="step-year"><FontAwesomeIcon icon={faCalendarAlt} /> {node.duration}</span>
                      {isCurrent && <span className="active-role-tag">Active</span>}
                    </div>

                    <div className="step-body">
                      <div className="company-logo-header">
                        <div className="company-logo-wrapper">
                          <img src={node.logo} alt={node.companyShort} className="company-brand-logo" />
                        </div>
                        <div className="company-header-meta">
                          <span className="company-title-text">{node.company}</span>
                          <span className="company-location-text">
                            <FontAwesomeIcon icon={faLocationDot} /> {node.location} {node.workMode ? `· ${node.workMode}` : ''}
                          </span>
                        </div>
                        {isCurrent && (
                          <div className="current-prominence-tag">
                            <FontAwesomeIcon icon={faCircleCheck} /> Current Position
                          </div>
                        )}
                      </div>

                      <h3 className="role-heading">{node.role}</h3>
                      <div className="role-subheading">{node.subheading}</div>
                      <div className="role-timeline-sub">{node.period} · {node.duration}</div>

                      <div className="promotion-milestone-pill">
                        {node.type === 'award' && <FontAwesomeIcon icon={faTrophy} />}
                        {node.type === 'promotion' && <FontAwesomeIcon icon={faArrowTrendUp} />}
                        {node.type === 'foundation' && <FontAwesomeIcon icon={faCheckCircle} />}
                        <span>{node.badge}</span>
                      </div>

                      <div className="skill-chips-row">
                        {node.skills.map((skill, i) => (
                          <span key={i} className="skill-chip">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="timeline-flow-indicator bottom-indicator">
              <span className="flow-badge bottom-badge">
                CAREER FOUNDATION · 2019
              </span>
            </div>
          </div>
        )}

        {/* VIEW 2: YEAR-ON-YEAR COMPANY WORKED WITH CHART (PRESENT → PAST) */}
        {activeTab === 'yoy' && (
          <div className="yoy-company-section">
            <div className="yoy-chart-container">
              <div className="yoy-scale-header">
                <div className="scale-title">Company Tenures & Promotion Ladders (Present → Past)</div>
                <div className="scale-years">
                  <span className="highlight-present">Present</span>
                  <span>2026</span>
                  <span>2025</span>
                  <span>2024</span>
                  <span>2023</span>
                  <span>2022</span>
                  <span>2021</span>
                  <span>2020</span>
                  <span>2019</span>
                </div>
              </div>

              {/* Company YoY Cards */}
              <div className="yoy-cards-list">
                {companyYoYData.map((item, index) => {
                  const isCurrentCompany = index === 0;
                  return (
                    <div 
                      key={index} 
                      className={`yoy-company-card ${isCurrentCompany ? 'current-company-card' : ''}`}
                      style={{ borderLeftColor: item.color }}
                    >
                      <div className="card-top-row">
                        <div className="company-info-group">
                          <div className="company-logo-wrapper">
                            <img src={item.logo} alt={item.shortName} className="company-brand-logo" />
                          </div>
                          <div>
                            <div className="company-title-wrap">
                              <h3 className="company-main-name">{item.company}</h3>
                              {isCurrentCompany && (
                                <span className="current-org-tag">Current Employer</span>
                              )}
                            </div>
                            <div className="company-meta-line">
                              {item.employmentType} · {item.duration} · {item.location} {item.workMode ? `· ${item.workMode}` : ''}
                            </div>
                          </div>
                        </div>

                        <div className="tenure-badge-box">
                          <span className="tenure-duration" style={{ background: item.color }}>
                            {item.duration}
                          </span>
                          <span className="tenure-period">{item.period}</span>
                        </div>
                      </div>

                      {/* Progression Ladder Inside Company */}
                      <div className="company-roles-ladder">
                        <div className="ladder-label">Promotion Progression (Latest First):</div>
                        {item.rolesLadder.map((r, rIdx) => (
                          <div key={rIdx} className="ladder-step">
                            <div className="ladder-bullet" style={{ background: item.color }} />
                            <div className="ladder-content">
                              <div className="ladder-title-row">
                                <span className="ladder-title">{r.title}</span>
                                <span className="ladder-date">{r.period} · {r.duration}</span>
                              </div>
                              {r.badge && (
                                <div className="ladder-badge">
                                  <FontAwesomeIcon icon={faAward} /> {r.badge}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Key Skills from LinkedIn */}
                      <div className="company-skills-footer">
                        <span className="skills-lbl">Associated Skills:</span>
                        <div className="skill-chips-row">
                          {item.skillsSummary.map((skill, sIdx) => (
                            <span key={sIdx} className="skill-chip">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;