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