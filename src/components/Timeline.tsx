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
  headline?: string;
  bullets?: {
    category: string;
    text: string;
  }[];
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
        duration: "6 mos",
        workMode: "Hybrid",
        level: 6,
        badge: "India Lead · Strategic Controllership",
        badgeType: "promotion",
        isCurrentRole: true,
        headline: "Spearheading enterprise controllership and strategic FP&A for the Indian entity, orchestrating multi-division Annual Operating Plans (AOP), SAP S/4HANA intelligence architectures, and executive decision-making for sustainable P&L expansion.",
        bullets: [
          {
            category: "Strategic FP&A & Rolling Forecasts",
            text: "Direct dynamic rolling forecasts and enterprise AOPs across multiple business units, deploying automated SAP S/4HANA and Power BI executive dashboards that slashed variance reporting latency by 40% and delivered real-time operational intelligence."
          },
          {
            category: "Commercial Business Partnering & Turnaround",
            text: "Partner with country leadership and divisional heads to enforce commercial governance, yield analysis, and margin optimization protocols, protecting bottom-line targets across volatile supply chain environments."
          },
          {
            category: "Financial Control & Board-Level Leadership",
            text: "Exercise comprehensive controllership over multi-branch statutory compliance, internal controls over financial reporting (ICFR), and audit governance, serving as the trusted finance advisor to regional and global executive management."
          }
        ],
        skills: ["Strategic FP&A", "India Controlling Lead", "Profitability Turnaround", "Executive Leadership", "Budget Forecasting", "SAP & Power BI"]
      },
      {
        role: "Manager Controlling",
        period: "Aug 2023 – Mar 2026",
        duration: "2 yrs 8 mos",
        workMode: "Hybrid",
        level: 5,
        badge: "GEM Award (2024 & 2025) · Top Support Function Award 2024",
        badgeType: "award",
        headline: "Transformed ~75% of unprofitable business units into positive P&L contributors while unlocking ₹50+ Lacs in annual recurring savings through aggressive cost-governance, commercial modeling, and data-driven business partnering.",
        bullets: [
          {
            category: "P&L Turnaround & ROI Escalation",
            text: "Engineered performance intervention models that transitioned ~75% of decentralized profit centers to profitability, lifted branch operational productivity by 20%, and scaled commercial sales ROI from 1x to 2x through targeted revenue assurance."
          },
          {
            category: "Cost Optimization & Budget Governance",
            text: "Spearheaded zero-based budgetary reviews and operational leakage audits across all decentralized cost centers, securing ₹50+ Lacs in recurring annual SG&A savings (recognized with the GEM Award in 2024 & 2025)."
          },
          {
            category: "Business Partnering & Liquidity Controls",
            text: "Built unified KPI variance trackers and cash-conversion models for operational heads, institutionalizing strict P2P/O2C checkpoints that accelerated working capital velocity and customer collections."
          }
        ],
        skills: ["Budget Forecasting", "Business Partner Relations", "FP&A", "Cost Optimization", "Profitability Turnaround", "SAP"]
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
        badge: "Controllership & Capital Markets Lead · Rated 5/5",
        badgeType: "promotion",
        headline: "Anchored complex capital market transactions including an ₹80 Cr ESOP buyback and spearheaded international finance architectures across Southeast Asia and Middle East markets during hyper-scale expansion.",
        bullets: [
          {
            category: "Capital Transactions & Liquidity Execution",
            text: "Led the end-to-end financial structuring, valuation mechanics, regulatory compliance, and banking disbursements for an ₹80 Cr ESOP buyback program under tight regulatory timelines."
          },
          {
            category: "Global Entity Structuring & FP&A",
            text: "Architected the complete financial, banking, and ERP infrastructure for newly launched overseas entities in Southeast Asia and the Middle East, embedding cross-border transfer pricing policies and local GAAP compliance."
          },
          {
            category: "Executive Controllership & Mentorship",
            text: "Mentored and scaled a high-performing 10-member finance controllership team, maintaining a 5/5 leadership rating and instituting robust enterprise internal financial controls (ICFR) across multi-million-dollar transaction rails."
          }
        ],
        skills: ["Business Ethics", "Team Management", "₹80 Cr ESOP Buyback", "Global Expansion", "Controllership"]
      },
      {
        role: "Manager",
        period: "Apr 2022 – Mar 2023",
        duration: "1 yr",
        level: 4,
        badge: "Big-4 Audit & Ind AS Lead · Mr. Detail Oriented Award 2022",
        badgeType: "award",
        headline: "Spearheaded statutory, tax, and ICFR audit closures in direct liaison with Big-4 firms (EY, Grant Thornton), delivering the company's first-ever clean ICFR and Internal Audit opinion alongside technical Ind AS 115/116 compliance.",
        bullets: [
          {
            category: "Big-4 Audit Governance & Assurance",
            text: "Managed comprehensive Statutory, Tax, and ICFR audits with Ernst & Young and Grant Thornton, remediating legacy high-risk audit observations to secure the organization's historic first unqualified (clean) audit opinion (awarded Mr. Detail-Oriented 2022)."
          },
          {
            category: "Technical Ind AS Consolidation",
            text: "Directed multi-entity financial consolidation and statutory disclosures under Ind AS 115 (Revenue from Contracts with Customers) and Ind AS 116 (Leases), standardizing accounting treatments across hundreds of retail hubs."
          },
          {
            category: "Financial Control & Process Engineering",
            text: "Formulated enterprise Risk and Control Matrices (RCM), re-engineering digital inventory valuation workflows and procurement approvals to eliminate operational risks at scale."
          }
        ],
        skills: ["Management", "Leadership", "Statutory & ICFR Audits (EY/GT)", "Ind AS 115 & 116", "Internal Controls"]
      },
      {
        role: "Assistant Manager",
        period: "Apr 2021 – Mar 2022",
        duration: "1 yr",
        level: 3,
        badge: "Employee of the Year 2021 · FinOps",
        badgeType: "award",
        headline: "Compressed the multi-entity financial close cycle by 36% (11th to 7th business day) through continuous automation, ledger reconciliations, and balance sheet integrity controls across high-volume automotive settlement rails.",
        bullets: [
          {
            category: "Month-End Close Acceleration & FP&A",
            text: "Re-engineered the financial reporting cadence by automating journal allocations and continuous reconciliations, compressing the month-end close timeline from the 11th to the 7th business day (recognized as Employee of the Year 2021)."
          },
          {
            category: "Balance Sheet Governance & Reconciliations",
            text: "Governed multi-billion-rupee daily banking reconciliations, vehicle inventory accounts, and inter-company balances across pan-India operating centers with zero audit discrepancies."
          },
          {
            category: "Financial Control & Statutory Alignment",
            text: "Supervised preparation of audit schedules under Ind AS 109 and Ind AS 102, establishing automated exception alerts that reduced transaction posting errors by 45%."
          }
        ],
        skills: ["Account Reconciliation", "Teamwork", "Ind AS Reporting", "Financial Statements", "Process Automation"]
      },
      {
        role: "Team Lead",
        period: "Dec 2019 – Mar 2021",
        duration: "1 yr 4 mos",
        workMode: "On-site",
        level: 2,
        badge: "Scalable Finance Process Architecture",
        badgeType: "foundation",
        headline: "Architected foundational Procure-to-Pay (P2P) and Order-to-Cash (O2C) transaction controls, establishing the scalable financial operational bedrock supporting unicorn-stage growth.",
        bullets: [
          {
            category: "Internal Control Infrastructure",
            text: "Designed end-to-end P2P and O2C transaction verification workflows with multi-tiered maker-checker authorization gates, completely preventing vendor overpayments and leakage."
          },
          {
            category: "Statutory Compliance & Filings",
            text: "Controlled direct and indirect tax withholding governance (TDS/TCS), corporate secretarial filings under the Companies Act, and vendor GST reconciliations with 100% on-time statutory adherence."
          },
          {
            category: "Reconciliation Automation",
            text: "Engineered automated reconciliation frameworks for multi-crore daily banking and vehicle financing settlements, safeguarding cash integrity during rapid regional expansion."
          }
        ],
        skills: ["Company Law", "P2P & O2C Workflows", "Financial Reconciliations", "Internal Controls"]
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
        headline: "Executed end-to-end statutory and internal audits across diversified corporate clients, strengthening ICFR frameworks and direct/indirect tax compliance.",
        bullets: [
          {
            category: "Statutory & Internal Assurance",
            text: "Conducted audit testing and compliance reviews for mid-market corporate clients under Indian GAAP and Companies Act provisions."
          },
          {
            category: "ICFR & Internal Control Assessments",
            text: "Evaluated standard operating procedures, identified process deficiencies, and delivered actionable management advisory reports."
          },
          {
            category: "Tax Governance",
            text: "Formulated tax audit schedules under Section 44AB and verified monthly GST reconciliations with 100% accuracy."
          }
        ],
        skills: ["Audit & Assurance", "ICFR Frameworks", "GST Compliance", "Direct Tax Advisory"]
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

                              {/* Executive Headline */}
                              {role.headline && (
                                <div className="subrole-executive-headline">
                                  <p>"{role.headline}"</p>
                                </div>
                              )}

                              {/* Executive Portfolio Bullets */}
                              {role.bullets && role.bullets.length > 0 && (
                                <div className="subrole-portfolio-bullets">
                                  <ul className="timeline-bullets-list">
                                    {role.bullets.map((bullet, bIdx) => (
                                      <li key={bIdx} className="timeline-bullet-item">
                                        <FontAwesomeIcon icon={faCheckCircle} className="bullet-check-icon" />
                                        <span>
                                          <strong>{bullet.category}: </strong>
                                          {bullet.text}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Associated Skills */}
                              <div className="subrole-skills-row">
                                <span className="skills-prefix">Skills:</span>
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