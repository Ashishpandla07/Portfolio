import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, 
  faArrowTrendUp, 
  faCalendarAlt, 
  faCheckCircle,
  faLocationDot,
  faCircleCheck,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import cars24Logo from '../assets/images/cars24_logo.png';
import cargoPartnerLogo from '../assets/images/cargo_partner_logo.jpg';
import icaiLogo from '../assets/images/icai_logo.png';
import '../assets/styles/Timeline.scss';

interface ExperienceItem {
  role: string;
  company: string;
  companyShort: string;
  logo: string;
  period: string;
  duration: string;
  location: string;
  workMode?: string;
  level: number;
  badge: string;
  badgeType: "promotion" | "award" | "foundation";
  responsibilities: {
    competency: string;
    detail: string;
  }[];
  skills: string[];
  isCurrent?: boolean;
}

// Reverse Chronological Order: Present (Latest) at Top → Past at Bottom
const experienceData: ExperienceItem[] = [
  {
    role: "Senior Manager Controlling",
    company: "cargo-partner",
    companyShort: "cargo-partner",
    logo: cargoPartnerLogo,
    period: "Apr 2026 – Present",
    duration: "6 mos",
    location: "Gurugram, Haryana, India",
    workMode: "Hybrid",
    level: 6,
    badge: "India Lead · Strategic Controllership",
    badgeType: "promotion",
    isCurrent: true,
    responsibilities: [
      {
        competency: "Strategic FP&A & Leadership",
        detail: "Direct annual operating plans (AOP) and dynamic rolling forecasts across business units; deliver real-time operating metrics and actionable intelligence to executive leadership."
      },
      {
        competency: "Commercial Governance & Turnaround",
        detail: "Oversee cross-border profitability turnaround programs, margin rationalization, and strategic revenue assurance models across multi-modal logistics divisions."
      },
      {
        competency: "Business Intelligence & MIS",
        detail: "Lead SAP S/4HANA and Power BI automated dashboard reporting for executive decision-making, performance tracking, and yield analysis."
      }
    ],
    skills: ["Strategic FP&A", "India Controlling Lead", "Profitability Turnaround", "Executive Leadership", "Budget Forecasting", "SAP & Power BI"]
  },
  {
    role: "Manager Controlling",
    company: "cargo-partner",
    companyShort: "cargo-partner",
    logo: cargoPartnerLogo,
    period: "Aug 2023 – Mar 2026",
    duration: "2 yrs 8 mos",
    location: "Gurugram, Haryana, India",
    workMode: "Hybrid",
    level: 5,
    badge: "GEM Award (2024 & 2025) · Top Support Function Award 2024",
    badgeType: "award",
    responsibilities: [
      {
        competency: "Profitability & Turnaround",
        detail: "Turned ~75% of profit centers profitable, boosted operational productivity by 20%, and scaled commercial ROI from 1x to 2x through targeted revenue assurance."
      },
      {
        competency: "Cost Governance & Savings",
        detail: "Spearheaded strategic cost-control initiatives across decentralized branches, eliminating operational leakages to unlock ₹50+ Lacs in annual recurring savings."
      },
      {
        competency: "Business Partnering & Variance Analysis",
        detail: "Partnered with operational heads on KPI trackers and dynamic variance reporting, optimizing P2P and O2C cycles to strengthen working capital liquidity."
      }
    ],
    skills: ["Budget Forecasting", "Business Partner Relations", "FP&A", "Cost Optimization", "Profitability Turnaround", "SAP"]
  },
  {
    role: "Senior Manager",
    company: "CARS24",
    companyShort: "CARS24",
    logo: cars24Logo,
    period: "Apr 2023 – Aug 2023",
    duration: "5 mos",
    location: "Gurugram, Haryana, India",
    workMode: "On-site",
    level: 5,
    badge: "Controllership & Capital Markets Lead · Rated 5/5",
    badgeType: "promotion",
    responsibilities: [
      {
        competency: "Capital Markets & ESOP Execution",
        detail: "Managed the financial execution, regulatory reporting, and compliance governance for an ₹80 Cr ESOP share buyback transaction."
      },
      {
        competency: "Global Entity Expansion",
        detail: "Supported international expansion across Southeast Asia and Middle East markets, establishing banking channels, legal entity compliances, and controllership frameworks."
      },
      {
        competency: "Team Mentorship & ICFR",
        detail: "Mentored a 10-member finance team, embedding internal financial controls (ICFR) across scalable transaction processing systems."
      }
    ],
    skills: ["Business Ethics", "Team Management", "₹80 Cr ESOP Buyback", "Global Expansion", "Controllership"]
  },
  {
    role: "Manager",
    company: "CARS24",
    companyShort: "CARS24",
    logo: cars24Logo,
    period: "Apr 2022 – Mar 2023",
    duration: "1 yr",
    location: "Gurugram, Haryana, India",
    level: 4,
    badge: "Big-4 Audit & Ind AS Lead · Mr. Detail Oriented Award 2022",
    badgeType: "award",
    responsibilities: [
      {
        competency: "Big-4 Statutory Audits",
        detail: "Spearheaded statutory, tax, and ICFR audits coordinating with top-tier audit firms (EY, Grant Thornton), institutionalizing robust Risk & Control Matrices (RCM)."
      },
      {
        competency: "Technical Ind AS Reporting",
        detail: "Governed complex multi-entity consolidation, revenue recognition under Ind AS 115, and lease accounting disclosures under Ind AS 116."
      },
      {
        competency: "Process Optimization",
        detail: "Redesigned financial workflows across inventory valuations and digital procurement rails, eliminating operational redundancies."
      }
    ],
    skills: ["Management", "Leadership", "Statutory & ICFR Audits (EY/GT)", "Ind AS 115 & 116", "Internal Controls"]
  },
  {
    role: "Assistant Manager",
    company: "CARS24",
    companyShort: "CARS24",
    logo: cars24Logo,
    period: "Apr 2021 – Mar 2022",
    duration: "1 yr",
    location: "Gurugram, Haryana, India",
    level: 3,
    badge: "Employee of the Year 2021 · FinOps",
    badgeType: "award",
    responsibilities: [
      {
        competency: "Accelerated Month-End Close",
        detail: "Compressed financial closing cadence from the 11th to the 7th business day through process automation and continuous ledger reconciliations."
      },
      {
        competency: "Balance Sheet Governance",
        detail: "Supervised high-volume balance sheet reconciliations, inter-company settlements, and treasury allocations across regional operating centers."
      },
      {
        competency: "Statutory Filings & Standards",
        detail: "Directed preparation of financial statement schedules under Ind AS 109 and Ind AS 102 with zero compliance deviations."
      }
    ],
    skills: ["Account Reconciliation", "Teamwork", "Ind AS Reporting", "Financial Statements", "Process Automation"]
  },
  {
    role: "Team Lead",
    company: "CARS24",
    companyShort: "CARS24",
    logo: cars24Logo,
    period: "Dec 2019 – Mar 2021",
    duration: "1 yr 4 mos",
    location: "Gurugram, Haryana, India",
    workMode: "On-site",
    level: 2,
    badge: "Scalable Finance Process Architecture",
    badgeType: "foundation",
    responsibilities: [
      {
        competency: "P2P & O2C Process Controls",
        detail: "Streamlined end-to-end Procure-to-Pay and Order-to-Cash operations, embedding validation gates to eliminate payment leakages."
      },
      {
        competency: "Statutory Tax Compliances",
        detail: "Managed direct/indirect tax withholdings, TDS/TCS filings, and corporate secretarial compliances under the Companies Act."
      },
      {
        competency: "Automotive Transaction Rails",
        detail: "Engineered scalable daily reconciliation frameworks for multi-crore automotive settlements with banking partners."
      }
    ],
    skills: ["Company Law", "P2P & O2C Workflows", "Financial Reconciliations", "Internal Controls"]
  },
  {
    role: "Audit Executive",
    company: "N K Jain & Co.",
    companyShort: "N K Jain & Co.",
    logo: icaiLogo,
    period: "Jan 2019 – Dec 2019",
    duration: "1 yr",
    location: "Gurugram, Haryana, India",
    level: 1,
    badge: "Statutory Assurance & Risk Advisory",
    badgeType: "foundation",
    responsibilities: [
      {
        competency: "Risk-Based Internal Audits",
        detail: "Conducted end-to-end internal audit reviews and physical control inspections across corporate and manufacturing entities to evaluate IFC effectiveness."
      },
      {
        competency: "Standards on Auditing (SAs)",
        detail: "Designed substantive testing procedures and analytical reviews of financial statements aligned with ICAI Standards on Auditing."
      },
      {
        competency: "GST Compliance & Filings",
        detail: "Led GST filings (GSTR-1, GSTR-3B, GSTR-9/9C) and Input Tax Credit (ITC) audits with zero penalty exposures."
      }
    ],
    skills: ["Audit & Assurance", "ICFR Frameworks", "GST Compliance", "Direct Tax Advisory"]
  }
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        {/* Section Header */}
        <div className="experience-header">
          <div className="header-eyebrow">
            <FontAwesomeIcon icon={faBriefcase} /> Career Milestones
          </div>
          <h1>Professional Experience</h1>
          <p className="experience-subtitle">
            Executive Career Progression · Present → Past Reverse Chronological Track
          </p>

          {/* Metric Summary Strip */}
          <div className="experience-metrics-strip">
            <div className="metric-cell">
              <span className="metric-number">7.5+</span>
              <span className="metric-text">Years Post-CA Impact</span>
            </div>
            <div className="metric-cell">
              <span className="metric-number">5</span>
              <span className="metric-text">Merit Promotions</span>
            </div>
            <div className="metric-cell">
              <span className="metric-number">6</span>
              <span className="metric-text">Executive Levels</span>
            </div>
            <div className="metric-cell">
              <span className="metric-number">5+</span>
              <span className="metric-text">Corporate Awards</span>
            </div>
          </div>
        </div>

        {/* Timeline Flow Anchor Top */}
        <div className="timeline-flow-marker top-marker">
          <span className="marker-pill">
            <span className="pulse-dot" /> PRESENT · LATEST ROLE
          </span>
        </div>

        {/* Vertical Timeline Tree (Reverse Chronological: Top = Present, Bottom = Past) */}
        <div className="corporate-timeline">
          {experienceData.map((item, index) => {
            const isCurrent = item.isCurrent;
            return (
              <div 
                key={index} 
                className={`timeline-card-wrapper level-${item.level} ${isCurrent ? 'is-current' : ''}`}
              >
                {/* Node on Vertical Timeline Track */}
                <div className="timeline-track-node">
                  <div className="node-circle" />
                  <span className="level-tag">L{item.level}</span>
                </div>

                {/* Experience Card */}
                <div className="timeline-card">
                  {/* Top Bar: Company, Logo, Dates & Current Pill */}
                  <div className="card-top-bar">
                    <div className="company-branding">
                      <div className="company-logo-box">
                        <img src={item.logo} alt={item.companyShort} className="company-logo-img" />
                      </div>
                      <div className="company-text-meta">
                        <div className="company-name-row">
                          <span className="company-name">{item.company}</span>
                          {isCurrent && (
                            <span className="current-badge">
                              <FontAwesomeIcon icon={faCircleCheck} /> Current Position
                            </span>
                          )}
                        </div>
                        <div className="location-row">
                          <FontAwesomeIcon icon={faLocationDot} /> {item.location} {item.workMode ? `· ${item.workMode}` : ''}
                        </div>
                      </div>
                    </div>

                    {/* Date / Duration Badge */}
                    <div className="date-duration-pill">
                      <span className="date-range"><FontAwesomeIcon icon={faCalendarAlt} /> {item.period}</span>
                      <span className="duration-tag">{item.duration}</span>
                    </div>
                  </div>

                  {/* Role Title & Level Header */}
                  <div className="role-title-row">
                    <h3 className="role-title">{item.role}</h3>
                    <span className="level-badge">Level {item.level}</span>
                  </div>

                  {/* Hero Badge (Promotion / Award / Recognition) */}
                  <div className={`hero-milestone-pill type-${item.badgeType}`}>
                    {item.badgeType === 'award' && <FontAwesomeIcon icon={faTrophy} />}
                    {item.badgeType === 'promotion' && <FontAwesomeIcon icon={faArrowTrendUp} />}
                    {item.badgeType === 'foundation' && <FontAwesomeIcon icon={faCheckCircle} />}
                    <span className="badge-text">{item.badge}</span>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="responsibilities-block">
                    <div className="responsibilities-title">Key Responsibilities & Impact:</div>
                    <ul className="responsibilities-list">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>
                          <strong>{resp.competency}:</strong> {resp.detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Associated Skills */}
                  <div className="skills-block">
                    <span className="skills-label">Skills:</span>
                    <div className="skills-chips">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="skill-chip">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Flow Anchor Bottom */}
        <div className="timeline-flow-marker bottom-marker">
          <span className="marker-pill bottom-pill">
            CAREER FOUNDATION · 2019
          </span>
        </div>
      </div>
    </div>
  );
}

export default Timeline;