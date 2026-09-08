import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, 
  faArrowTrendUp, 
  faCalendarAlt, 
  faCheckCircle, 
  faLocationDot, 
  faCircleCheck, 
  faBriefcase,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';
import cars24Logo from '../assets/images/cars24_logo.png';
import cargoPartnerLogo from '../assets/images/cargo_partner_logo.jpg';
import icaiLogo from '../assets/images/icai_logo.png';
import '../assets/styles/Timeline.scss';

interface SubRole {
  role: string;
  period: string;
  duration: string;
  location?: string;
  workMode?: string;
  level: number;
  badge: string;
  badgeType: "promotion" | "award" | "foundation";
  skills: string[];
  isCurrentRole?: boolean;
}

interface CompanyExperience {
  id: string;
  company: string;
  companyShort: string;
  logo: string;
  employmentType: string;
  period: string;
  duration: string;
  location: string;
  workMode?: string;
  color: string;
  isCurrent?: boolean;
  roles: SubRole[];
}

// Clubbed Company-Wise Experience in Reverse Chronological Order (Present → Past)
const companyData: CompanyExperience[] = [
  {
    id: "cargo-partner",
    company: "cargo-partner",
    companyShort: "cargo-partner",
    logo: cargoPartnerLogo,
    employmentType: "Full-time",
    period: "Aug 2023 – Present",
    duration: "3 yrs 2 mos",
    location: "Gurugram, Haryana, India",
    workMode: "Hybrid",
    color: "#5000ca",
    isCurrent: true,
    roles: [
      {
        role: "Senior Manager Controlling",
        period: "Apr 2026 – Present",
        duration: "Current",
        workMode: "Hybrid",
        level: 6,
        badge: "India Controlling Lead",
        badgeType: "promotion",
        isCurrentRole: true,
        skills: ["Enterprise FP&A", "AOP & Rolling Forecasts", "Statutory Controllership", "SAP S/4HANA & Power BI", "Board Advisory"]
      },
      {
        role: "Manager Controlling",
        period: "Aug 2023 – Mar 2026",
        duration: "2 yrs 8 mos",
        workMode: "Hybrid",
        level: 5,
        badge: "GEM Award (2024 & 2025) · Top Support Function Award",
        badgeType: "award",
        skills: ["Commercial Business Partnering", "P&L Turnaround", "Cost Center Governance", "Working Capital Optimization", "SAP Analytics"]
      }
    ]
  },
  {
    id: "cars24",
    company: "CARS24",
    companyShort: "CARS24",
    logo: cars24Logo,
    employmentType: "Full-time",
    period: "Dec 2019 – Aug 2023",
    duration: "3 yrs 9 mos",
    location: "Gurugram, Haryana, India",
    color: "#ff6b00",
    roles: [
      {
        role: "Senior Manager",
        period: "Apr 2023 – Aug 2023",
        duration: "5 mos",
        workMode: "On-site",
        level: 5,
        badge: "Rated 5/5 · Capital Markets Lead",
        badgeType: "promotion",
        skills: ["₹80 Cr ESOP Buyback", "Overseas Entity Structuring", "Cross-Border Transfer Pricing", "Team Leadership (10 Members)"]
      },
      {
        role: "Manager",
        period: "Apr 2022 – Mar 2023",
        duration: "1 yr",
        level: 4,
        badge: "Mr. Detail Oriented Award 2022 · Big-4 Audit Lead",
        badgeType: "award",
        skills: ["Statutory Audits (EY / GT)", "Unqualified ICFR Opinion", "Ind AS 115 & 116 Consolidation", "Risk & Control Matrix (RCM)"]
      },
      {
        role: "Assistant Manager",
        period: "Apr 2021 – Mar 2022",
        duration: "1 yr",
        level: 3,
        badge: "Employee of the Year 2021 · FinOps",
        badgeType: "award",
        skills: ["Close Cycle Compression (11th to 7th Day)", "High-Volume Auto Settlements", "Balance Sheet Governance", "Automated Reconciliations"]
      },
      {
        role: "Team Lead",
        period: "Dec 2019 – Mar 2021",
        duration: "1 yr 4 mos",
        workMode: "On-site",
        level: 2,
        badge: "Foundational Process Architect",
        badgeType: "foundation",
        skills: ["P2P & O2C Maker-Checker Controls", "Statutory Compliance (TDS / GST)", "Secretarial Filings", "Banking Reconciliation Rails"]
      }
    ]
  },
  {
    id: "nkjain",
    company: "N K Jain & Co.",
    companyShort: "N K Jain & Co.",
    logo: icaiLogo,
    employmentType: "Full-time",
    period: "Jan 2019 – Dec 2019",
    duration: "1 yr",
    location: "Gurugram, Haryana, India",
    color: "#0284c7",
    roles: [
      {
        role: "Audit Executive",
        period: "Jan 2019 – Dec 2019",
        duration: "1 yr",
        level: 1,
        badge: "Statutory Assurance & Risk Advisory",
        badgeType: "foundation",
        skills: ["Statutory & Internal Audits", "ICFR Assessment", "Corporate Tax Filings (Sec 44AB)", "GST Compliance Reviews"]
      }
    ]
  }
];

function Timeline() {
  // All companies expanded by default, with interactive +/- toggle
  const [expandedCompanies, setExpandedCompanies] = useState<Record<string, boolean>>({
    "cargo-partner": true,
    "cars24": true,
    "nkjain": true
  });

  const toggleCompany = (id: string) => {
    setExpandedCompanies(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const areAllExpanded = Object.values(expandedCompanies).every(Boolean);

  const toggleAll = () => {
    const nextState = !areAllExpanded;
    setExpandedCompanies({
      "cargo-partner": nextState,
      "cars24": nextState,
      "nkjain": nextState
    });
  };

  return (
    <div id="history">
      <div className="items-container">
        {/* Header Section */}
        <div className="experience-header">
          <div className="header-eyebrow">
            <FontAwesomeIcon icon={faBriefcase} /> Corporate History
          </div>
          <h1>Professional Experience</h1>
          <p className="experience-subtitle">
            Company-Wise Progression & Promotion Ladder · Present → Past Reverse Chronological Track
          </p>

          {/* Metric Summary Strip */}
          <div className="experience-metrics-strip">
            <div className="metric-cell">
              <span className="metric-number">3</span>
              <span className="metric-text">Corporate Brands</span>
            </div>
            <div className="metric-cell">
              <span className="metric-number">7.5+</span>
              <span className="metric-text">Years Post-CA Impact</span>
            </div>
            <div className="metric-cell">
              <span className="metric-number">5</span>
              <span className="metric-text">Merit Promotions</span>
            </div>
            <div className="metric-cell">
              <span className="metric-number">5+</span>
              <span className="metric-text">Corporate Awards</span>
            </div>
          </div>

          {/* Toggle All Expand / Collapse */}
          <div className="clubbed-controls-bar">
            <button className="toggle-all-btn" onClick={toggleAll}>
              <FontAwesomeIcon icon={areAllExpanded ? faMinus : faPlus} />
              <span>{areAllExpanded ? "Collapse All Companies" : "+ Expand All Companies"}</span>
            </button>
          </div>
        </div>

        {/* Timeline Flow Anchor Top */}
        <div className="timeline-flow-marker top-marker">
          <span className="marker-pill">
            <span className="pulse-dot" /> PRESENT · LATEST TENURE
          </span>
        </div>

        {/* Vertical Company-Wise Timeline */}
        <div className="clubbed-company-timeline">
          {companyData.map((company) => {
            const isExpanded = !!expandedCompanies[company.id];
            const isCurrent = company.isCurrent;

            return (
              <div 
                key={company.id} 
                className={`company-clubbed-card ${isCurrent ? 'is-current-company' : ''} ${isExpanded ? 'expanded' : 'collapsed'}`}
                style={{ borderLeftColor: company.color }}
              >
                {/* Company Header Row (Clickable to Toggle +/-) */}
                <div className="company-main-header" onClick={() => toggleCompany(company.id)}>
                  <div className="company-meta-left">
                    <div className="company-logo-frame">
                      <img src={company.logo} alt={company.companyShort} className="company-logo-img" />
                    </div>

                    <div className="company-identity-text">
                      <div className="company-name-row">
                        <h2 className="company-title">{company.company}</h2>
                        {isCurrent && (
                          <span className="current-org-pill">
                            <FontAwesomeIcon icon={faCircleCheck} /> Current Employer
                          </span>
                        )}
                      </div>
                      <div className="company-submeta">
                        <span>{company.employmentType}</span>
                        <span className="sep">•</span>
                        <span>{company.duration}</span>
                        <span className="sep">•</span>
                        <span><FontAwesomeIcon icon={faLocationDot} /> {company.location}</span>
                        {company.workMode && (
                          <>
                            <span className="sep">•</span>
                            <span className="workmode-tag">{company.workMode}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="company-toggle-right">
                    <div className="tenure-badge" style={{ background: company.color }}>
                      <FontAwesomeIcon icon={faCalendarAlt} /> {company.period}
                    </div>

                    {/* The + / - Interactive Sign */}
                    <button 
                      type="button" 
                      className="plus-minus-btn"
                      aria-label={isExpanded ? `Collapse ${company.company}` : `Expand ${company.company}`}
                    >
                      <FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} />
                      <span className="btn-label-text">
                        {isExpanded ? "Collapse" : `+ ${company.roles.length} Roles`}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Collapsed Preview Pill (when hidden) */}
                {!isExpanded && (
                  <div className="collapsed-preview-bar" onClick={() => toggleCompany(company.id)}>
                    <span className="preview-label">
                      Click <strong className="plus-symbol">+</strong> to view {company.roles.length} role{company.roles.length > 1 ? 's' : ''} & promotion hierarchy
                    </span>
                    <span className="preview-role-summary">
                      Latest: <em>{company.roles[0].role}</em>
                    </span>
                  </div>
                )}

                {/* Expanded Sub-Roles Ladder */}
                {isExpanded && (
                  <div className="nested-roles-ladder">
                    <div className="ladder-header-title">
                      Promotion & Career Hierarchy ({company.roles.length} Stage{company.roles.length > 1 ? 's' : ''}):
                    </div>

                    <div className="roles-list-track">
                      {company.roles.map((role, rIdx) => {
                        const isLatestRole = role.isCurrentRole || rIdx === 0;

                        return (
                          <div 
                            key={rIdx} 
                            className={`subrole-entry ${isLatestRole && isCurrent ? 'is-active-subrole' : ''}`}
                          >
                            {/* Track Bullet Node */}
                            <div className="track-bullet-column">
                              <div className="bullet-node" style={{ borderColor: company.color }} />
                              <span className="level-chip">L{role.level}</span>
                            </div>

                            {/* Subrole Body Card */}
                            <div className="subrole-body">
                              <div className="subrole-top-line">
                                <div className="subrole-heading-wrap">
                                  <h3 className="subrole-title">{role.role}</h3>
                                  {role.workMode && <span className="subrole-mode">{role.workMode}</span>}
                                  {isLatestRole && isCurrent && (
                                    <span className="active-now-tag">Active Position</span>
                                  )}
                                </div>

                                <div className="subrole-duration-tag">
                                  <span>{role.period}</span>
                                  <span className="role-duration-pill">{role.duration}</span>
                                </div>
                              </div>

                              {/* Hero Badge */}
                              <div className={`subrole-hero-badge type-${role.badgeType}`}>
                                {role.badgeType === 'award' && <FontAwesomeIcon icon={faTrophy} />}
                                {role.badgeType === 'promotion' && <FontAwesomeIcon icon={faArrowTrendUp} />}
                                {role.badgeType === 'foundation' && <FontAwesomeIcon icon={faCheckCircle} />}
                                <span>{role.badge}</span>
                              </div>

                              {/* Core Functional Focus */}
                              <div className="subrole-skills-row">
                                <span className="skills-prefix">Focus:</span>
                                <div className="skills-chip-group">
                                  {role.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="subrole-skill-pill">{skill}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
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