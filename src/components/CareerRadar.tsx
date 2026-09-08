import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faArrowTrendUp,
  faCheckCircle,
  faLayerGroup,
  faBuilding,
  faCalendarAlt,
  faCodeCompare,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/CareerRadar.scss";

interface CompetencyScore {
  key: string;
  name: string;
  shortName: string;
  value: number;
}

interface PortfolioRole {
  id: string;
  company: "cargo-partner" | "CARS24";
  companyName: string;
  title: string;
  period: string;
  duration: string;
  level: number;
  badge: string;
  themeColor: string;
  headline: string;
  competencies: CompetencyScore[];
  bullets: {
    category: string;
    text: string;
  }[];
}

const COMPETENCY_AXES = [
  { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast" },
  { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering" },
  { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership" },
  { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale" },
  { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership" }
];

const ROLES_DATA: PortfolioRole[] = [
  {
    id: "cargo-sm",
    company: "cargo-partner",
    companyName: "cargo-partner",
    title: "Senior Manager Controlling",
    period: "Apr 2026 – Present",
    duration: "Current Role",
    level: 6,
    badge: "India Lead · Strategic Controllership",
    themeColor: "#5000ca",
    headline: "Spearheading enterprise controllership and strategic FP&A for the Indian entity, orchestrating multi-division Annual Operating Plans (AOP), SAP S/4HANA intelligence architectures, and executive decision-making for sustainable P&L expansion.",
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 96 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 94 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 95 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 88 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 93 }
    ],
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
    ]
  },
  {
    id: "cargo-mgr",
    company: "cargo-partner",
    companyName: "cargo-partner",
    title: "Manager Controlling",
    period: "Aug 2023 – Mar 2026",
    duration: "2 yrs 8 mos",
    level: 5,
    badge: "GEM Award (2024 & 2025) · Top Support Function Award",
    themeColor: "#6d28d9",
    headline: "Transformed ~75% of unprofitable business units into positive P&L contributors while unlocking ₹50+ Lacs in annual recurring savings through aggressive cost-governance, commercial modeling, and data-driven business partnering.",
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 88 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 92 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 86 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 78 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 82 }
    ],
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
    ]
  },
  {
    id: "cars24-sm",
    company: "CARS24",
    companyName: "CARS24",
    title: "Senior Manager",
    period: "Apr 2023 – Aug 2023",
    duration: "5 mos",
    level: 5,
    badge: "Controllership & Capital Markets Lead · Rated 5/5",
    themeColor: "#ff6b00",
    headline: "Anchored complex capital market transactions including an ₹80 Cr ESOP buyback and spearheaded international finance architectures across Southeast Asia and Middle East markets during hyper-scale expansion.",
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 82 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 85 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 90 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 94 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 86 }
    ],
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
    ]
  },
  {
    id: "cars24-mgr",
    company: "CARS24",
    companyName: "CARS24",
    title: "Manager",
    period: "Apr 2022 – Mar 2023",
    duration: "1 yr",
    level: 4,
    badge: "Big-4 Audit & Ind AS Lead · Mr. Detail Oriented Award 2022",
    themeColor: "#f97316",
    headline: "Spearheaded statutory, tax, and ICFR audit closures in direct liaison with Big-4 firms (EY, Grant Thornton), delivering the company's first-ever clean ICFR and Internal Audit opinion alongside technical Ind AS 115/116 compliance.",
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 74 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 76 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 92 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 75 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 76 }
    ],
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
    ]
  },
  {
    id: "cars24-am",
    company: "CARS24",
    companyName: "CARS24",
    title: "Assistant Manager",
    period: "Apr 2021 – Mar 2022",
    duration: "1 yr",
    level: 3,
    badge: "Employee of the Year 2021 · FinOps & Ind AS",
    themeColor: "#fb923c",
    headline: "Compressed the multi-entity financial close cycle by 36% (11th to 7th business day) through continuous automation, ledger reconciliations, and balance sheet integrity controls across high-volume automotive settlement rails.",
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 68 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 66 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 82 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 64 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 65 }
    ],
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
    ]
  },
  {
    id: "cars24-tl",
    company: "CARS24",
    companyName: "CARS24",
    title: "Team Lead",
    period: "Dec 2019 – Mar 2021",
    duration: "1 yr 4 mos",
    level: 2,
    badge: "Scalable Finance Process Architecture",
    themeColor: "#fdba74",
    headline: "Architected foundational Procure-to-Pay (P2P) and Order-to-Cash (O2C) transaction controls, establishing the scalable financial operational bedrock supporting unicorn-stage growth.",
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 52 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 54 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 72 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 50 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 55 }
    ],
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
    ]
  }
];

function CareerRadar() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("cargo-sm");
  const [showFoundationComparison, setShowFoundationComparison] = useState<boolean>(true);

  const activeRole = ROLES_DATA.find(r => r.id === selectedRoleId) || ROLES_DATA[0];
  const foundationRole = ROLES_DATA[ROLES_DATA.length - 1]; // CARS24 Team Lead

  // Radar geometry configuration
  const SVG_SIZE = 400;
  const CENTER_X = SVG_SIZE / 2;
  const CENTER_Y = SVG_SIZE / 2;
  const MAX_RADIUS = 135;
  const NUM_AXES = COMPETENCY_AXES.length;
  const RINGS = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Helper to compute (x, y) given angle index and value percentage (0 - 100)
  const getCoordinates = (index: number, value: number, radius: number = MAX_RADIUS) => {
    // Start from top (-90 degrees) and rotate clockwise
    const angle = (index * (2 * Math.PI / NUM_AXES)) - (Math.PI / 2);
    const r = (value / 100) * radius;
    const x = CENTER_X + r * Math.cos(angle);
    const y = CENTER_Y + r * Math.sin(angle);
    return { x, y, angle };
  };

  // Build SVG polygon points string
  const buildPolygonPoints = (competencies: CompetencyScore[]) => {
    return competencies.map((comp, idx) => {
      const { x, y } = getCoordinates(idx, comp.value);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
  };

  const activePointsStr = buildPolygonPoints(activeRole.competencies);
  const foundationPointsStr = buildPolygonPoints(foundationRole.competencies);

  return (
    <div id="career-radar">
      <div className="items-container">
        {/* Header Section */}
        <div className="radar-header">
          <div className="header-eyebrow">
            <FontAwesomeIcon icon={faChartPie} /> Quantitative Visual Growth
          </div>
          <h1>Interactive Career Radar</h1>
          <p className="radar-subtitle">
            Explore 5-dimensional competency growth across career tenures at cargo-partner & CARS24.
            Select any role or enable comparison against the 2019 career baseline to inspect visual capability expansion.
          </p>
        </div>

        {/* Controls Bar: Role Selector Pills & Comparison Toggle */}
        <div className="career-controls-wrapper">
          <div className="scrubber-header">
            <span className="scrubber-label">
              <FontAwesomeIcon icon={faLayerGroup} /> Select Career Stage:
            </span>

            {activeRole.id !== foundationRole.id && (
              <button
                type="button"
                className={`compare-toggle-btn ${showFoundationComparison ? "active" : ""}`}
                onClick={() => setShowFoundationComparison(!showFoundationComparison)}
                title="Overlay 2019 Team Lead Baseline for Growth Comparison"
              >
                <FontAwesomeIcon icon={faCodeCompare} />
                <span>{showFoundationComparison ? "Baseline Comparison: ON" : "Compare 2019 Baseline"}</span>
              </button>
            )}
          </div>

          <div className="role-pills-row">
            {ROLES_DATA.map((role) => {
              const isSelected = role.id === activeRole.id;
              const isCargo = role.company === "cargo-partner";
              return (
                <button
                  key={role.id}
                  type="button"
                  className={`role-pill ${
                    isSelected ? (isCargo ? "active-cargo" : "active-cars24") : ""
                  }`}
                  onClick={() => setSelectedRoleId(role.id)}
                >
                  <span
                    className="pill-tag"
                    style={{
                      background: isSelected ? undefined : (isCargo ? "rgba(80,0,202,0.18)" : "rgba(255,107,0,0.18)"),
                      color: isSelected ? undefined : (isCargo ? "#a78bfa" : "#fb923c")
                    }}
                  >
                    {role.company}
                  </span>
                  <span className="pill-role-title">{role.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual-Pane Display: Radar SVG on Left, Executive Dossier on Right */}
        <div className="radar-dossier-grid">
          {/* Left Pane: Interactive SVG Radar Chart */}
          <div className="radar-visualizer-card">
            <div className="radar-svg-container">
              <svg viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} role="img" aria-label="Career Competency Radar Chart">
                <defs>
                  {/* Glow filter for active polygon */}
                  <filter id="radar-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Gradient for Cargo-Partner Active Role */}
                  <linearGradient id="cargo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7b2cbf" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#5000ca" stopOpacity="0.2" />
                  </linearGradient>

                  {/* Gradient for CARS24 Active Role */}
                  <linearGradient id="cars24-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Concentric Grid Web Polygons */}
                {RINGS.map((ringScale, rIdx) => {
                  const ringRadius = MAX_RADIUS * ringScale;
                  const ringPoints = COMPETENCY_AXES.map((_, i) => {
                    const { x, y } = getCoordinates(i, 100, ringRadius);
                    return `${x.toFixed(1)},${y.toFixed(1)}`;
                  }).join(" ");

                  return (
                    <g key={rIdx}>
                      <polygon
                        points={ringPoints}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.12)"
                        strokeWidth="1"
                        strokeDasharray={rIdx === RINGS.length - 1 ? undefined : "2 3"}
                      />
                      {/* Scale labels (20, 40, 60, 80, 100) */}
                      <text
                        x={CENTER_X + 4}
                        y={CENTER_Y - ringRadius + 3}
                        fontSize="9"
                        fill="rgba(148, 163, 184, 0.7)"
                        textAnchor="start"
                      >
                        {Math.round(ringScale * 100)}
                      </text>
                    </g>
                  );
                })}

                {/* Axis Radial Rays */}
                {COMPETENCY_AXES.map((axis, i) => {
                  const { x, y } = getCoordinates(i, 100);
                  const labelCoord = getCoordinates(i, 118);

                  return (
                    <g key={axis.key}>
                      <line
                        x1={CENTER_X}
                        y1={CENTER_Y}
                        x2={x}
                        y2={y}
                        stroke="rgba(255, 255, 255, 0.15)"
                        strokeWidth="1.2"
                      />
                      {/* Axis Label */}
                      <text
                        x={labelCoord.x}
                        y={labelCoord.y + (labelCoord.y > CENTER_Y ? 10 : -4)}
                        fontSize="10"
                        fontWeight="600"
                        fill="#cbd5e1"
                        textAnchor="middle"
                      >
                        {axis.shortName}
                      </text>
                    </g>
                  );
                })}

                {/* Comparison Polygon (2019 Team Lead Baseline, if toggled and not selected) */}
                {showFoundationComparison && activeRole.id !== foundationRole.id && (
                  <g>
                    <polygon
                      points={foundationPointsStr}
                      fill="rgba(148, 163, 184, 0.1)"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                    />
                    {foundationRole.competencies.map((comp, idx) => {
                      const { x, y } = getCoordinates(idx, comp.value);
                      return (
                        <circle
                          key={`found-${idx}`}
                          cx={x}
                          cy={y}
                          r="3"
                          fill="#94a3b8"
                          stroke="#0f172a"
                          strokeWidth="1.5"
                        />
                      );
                    })}
                  </g>
                )}

                {/* Active Role Polygon */}
                <polygon
                  points={activePointsStr}
                  fill={activeRole.company === "cargo-partner" ? "url(#cargo-gradient)" : "url(#cars24-gradient)"}
                  stroke={activeRole.themeColor}
                  strokeWidth="2.8"
                  filter="url(#radar-glow)"
                  style={{ transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
                />

                {/* Active Role Vertex Nodes with Data Points */}
                {activeRole.competencies.map((comp, idx) => {
                  const { x, y } = getCoordinates(idx, comp.value);
                  return (
                    <g key={`vertex-${comp.key}`}>
                      <circle
                        cx={x}
                        cy={y}
                        r="5.5"
                        fill={activeRole.themeColor}
                        stroke="#ffffff"
                        strokeWidth="2"
                        style={{ transition: "all 0.4s ease" }}
                      />
                      {/* Score Value Tag near vertex */}
                      <text
                        x={x}
                        y={y - 9}
                        fontSize="11"
                        fontWeight="800"
                        fill="#ffffff"
                        textAnchor="middle"
                      >
                        {comp.value}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Visual Legend Bar */}
            <div className="radar-legend-bar">
              <div className="legend-item">
                <span className="legend-color-box" style={{ background: activeRole.themeColor }} />
                <span><strong>{activeRole.title}</strong> (Score Footprint)</span>
              </div>
              {showFoundationComparison && activeRole.id !== foundationRole.id && (
                <div className="legend-item">
                  <span className="legend-color-box" style={{ background: "#94a3b8", border: "1px dashed #ffffff" }} />
                  <span>2019 Team Lead Baseline</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Pane: Executive Dossier & Bullet Points */}
          <div
            className="executive-dossier-card"
            style={{ borderLeftColor: activeRole.themeColor }}
          >
            {/* Dossier Header Row */}
            <div>
              <div className="dossier-header-bar">
                <div className="dossier-titles">
                  <span
                    className="company-badge"
                    style={{
                      background: activeRole.company === "cargo-partner" ? "#5000ca" : "#ff6b00",
                      color: "#ffffff"
                    }}
                  >
                    <FontAwesomeIcon icon={faBuilding} /> {activeRole.companyName}
                  </span>
                  <h2 className="dossier-role-title">{activeRole.title}</h2>
                  <div className="dossier-tenure">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{activeRole.period}</span>
                    <span className="duration-pill">{activeRole.duration}</span>
                  </div>
                </div>

                <div className="dossier-level-badge">
                  <span className="level-number">L{activeRole.level}</span>
                  <span className="level-sub">Career Level</span>
                </div>
              </div>

              {/* Section 1: The Executive Headline */}
              <div
                className="executive-headline-box"
                style={{
                  borderColor: `${activeRole.themeColor}55`,
                  background: activeRole.company === "cargo-partner"
                    ? "linear-gradient(135deg, rgba(80, 0, 202, 0.15) 0%, rgba(15, 23, 42, 0.4) 100%)"
                    : "linear-gradient(135deg, rgba(255, 107, 0, 0.15) 0%, rgba(15, 23, 42, 0.4) 100%)"
                }}
              >
                <div
                  className="headline-tag"
                  style={{ color: activeRole.company === "cargo-partner" ? "#a78bfa" : "#fb923c" }}
                >
                  <FontAwesomeIcon icon={faShieldHalved} /> The Executive Headline
                </div>
                <p>"{activeRole.headline}"</p>
              </div>

              {/* Section 3 (Mapping Overview): Competency Score Strip */}
              <div className="competency-bars-strip">
                {activeRole.competencies.map((comp) => (
                  <div key={comp.key} className="comp-cell">
                    <span className="comp-score">{comp.value}</span>
                    <span className="comp-shortname">{comp.shortName}</span>
                    <div className="comp-track">
                      <div
                        className="comp-fill"
                        style={{
                          width: `${comp.value}%`,
                          background: activeRole.themeColor
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 2: The Portfolio Bullets */}
              <div className="dossier-bullets-section">
                <div className="bullets-header">
                  <FontAwesomeIcon icon={faArrowTrendUp} /> Executive Portfolio Bullets (FP&A, Controls & Leadership)
                </div>
                <ul className="portfolio-bullet-list">
                  {activeRole.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="bullet-item">
                      <FontAwesomeIcon icon={faCheckCircle} className="bullet-icon" />
                      <div>
                        <strong>{bullet.category}: </strong>
                        {bullet.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full 6-Milestone Competency Score Matrix for Print Mode */}
        <div className="radar-print-matrix">
          <div className="print-matrix-title">
            <strong>Full Career Competency Progression Matrix (Scale 1–100)</strong>
          </div>
          <table className="print-competency-table">
            <thead>
              <tr>
                <th>Company & Role</th>
                <th>Tenure</th>
                <th>FP&A & Forecast</th>
                <th>Biz Partnering</th>
                <th>Controllership</th>
                <th>Capital & Scale</th>
                <th>Leadership</th>
              </tr>
            </thead>
            <tbody>
              {ROLES_DATA.map((role) => (
                <tr key={role.id}>
                  <td>
                    <strong>{role.companyName}</strong> – {role.title}
                  </td>
                  <td>{role.period}</td>
                  {role.competencies.map((c) => (
                    <td key={c.key} className="score-cell">
                      <strong>{c.value}</strong>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CareerRadar;
