import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faBuilding,
  faCalendarAlt,
  faCodeCompare,
  faCheck
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
  tagline: string;
  highlights: string[];
  competencies: CompetencyScore[];
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
    duration: "Current",
    level: 6,
    badge: "India Controlling Lead",
    themeColor: "#5000ca",
    tagline: "Leading enterprise controllership, multi-division AOPs & SAP S/4HANA financial intelligence.",
    highlights: [
      "Orchestrates enterprise AOPs & rolling forecasts across Indian entities",
      "Deployed SAP S/4HANA & Power BI dashboards, slashing reporting latency by 40%",
      "Serves as trusted finance advisor to executive leadership on margin optimization"
    ],
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 96 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 94 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 95 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 88 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 93 }
    ]
  },
  {
    id: "cargo-mgr",
    company: "cargo-partner",
    companyName: "cargo-partner",
    title: "Manager Controlling",
    period: "Aug 2023 – Mar 2026",
    duration: "2y 8m",
    level: 5,
    badge: "GEM Award 2024 & 2025",
    themeColor: "#6d28d9",
    tagline: "Turned around 75% of unprofitable branches & unlocked ₹50L+ recurring annual SG&A savings.",
    highlights: [
      "Transitioned ~75% of loss-making business units to profitability",
      "Unlocked ₹50+ Lacs in annual recurring savings via zero-based reviews",
      "Lifted commercial sales ROI from 1x to 2x with targeted interventions"
    ],
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 88 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 92 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 86 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 78 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 82 }
    ]
  },
  {
    id: "cars24-sm",
    company: "CARS24",
    companyName: "CARS24",
    title: "Senior Manager",
    period: "Apr 2023 – Aug 2023",
    duration: "5m",
    level: 5,
    badge: "5/5 Leadership Rating",
    themeColor: "#ff6b00",
    tagline: "Anchored ₹80 Cr ESOP buyback transaction & established overseas finance architectures.",
    highlights: [
      "Led valuation, compliance & disbursement for ₹80 Cr ESOP buyback",
      "Architected finance & ERP infrastructure for Southeast Asia & Middle East entities",
      "Mentored & scaled high-performing 10-member finance controllership team"
    ],
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 82 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 85 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 90 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 94 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 86 }
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
    badge: "Clean ICFR Audit Lead",
    themeColor: "#f97316",
    tagline: "Managed Big-4 statutory audits (EY, GT) & secured historic first clean ICFR opinion.",
    highlights: [
      "Direct Big-4 liaison (EY & Grant Thornton) with 100% clean audit closure",
      "Standardized multi-entity Ind AS 115/116 consolidation across retail hubs",
      "Engineered Risk & Control Matrices (RCM) for high-scale auto settlement rails"
    ],
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 74 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 76 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 92 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 75 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 76 }
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
    badge: "Employee of the Year 2021",
    themeColor: "#fb923c",
    tagline: "Compressed month-end close by 36% (11th to 7th business day) through automated reconciliations.",
    highlights: [
      "Accelerated close cycle from 11th to 7th business day via automation",
      "Governed multi-billion-rupee daily banking & inventory reconciliations",
      "Reduced transaction posting errors by 45% with automated exception alerts"
    ],
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 68 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 66 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 82 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 64 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 65 }
    ]
  },
  {
    id: "cars24-tl",
    company: "CARS24",
    companyName: "CARS24",
    title: "Team Lead",
    period: "Dec 2019 – Mar 2021",
    duration: "1y 4m",
    level: 2,
    badge: "Foundational P2P / O2C Lead",
    themeColor: "#fdba74",
    tagline: "Architected foundational P2P & O2C transaction controls for unicorn-stage hypergrowth.",
    highlights: [
      "Designed end-to-end P2P/O2C maker-checker verification workflows",
      "Ensured 100% on-time statutory compliance (TDS, GST, Secretarial filings)",
      "Built multi-crore daily banking reconciliation frameworks"
    ],
    competencies: [
      { key: "fpa", name: "Strategic FP&A & Forecasting", shortName: "FP&A & Forecast", value: 52 },
      { key: "partnering", name: "Business Partnering & Turnaround", shortName: "Biz Partnering", value: 54 },
      { key: "controllership", name: "Financial Controllership & ICFR", shortName: "Controllership", value: 72 },
      { key: "capital", name: "Capital Transactions & Scale", shortName: "Capital & Scale", value: 50 },
      { key: "leadership", name: "Executive Leadership & Mentorship", shortName: "Leadership", value: 55 }
    ]
  }
];

function CareerRadar() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("cargo-sm");
  const [showFoundationComparison, setShowFoundationComparison] = useState<boolean>(true);

  const activeRole = ROLES_DATA.find(r => r.id === selectedRoleId) || ROLES_DATA[0];
  const foundationRole = ROLES_DATA[ROLES_DATA.length - 1]; // CARS24 Team Lead

  // Geometry
  const SVG_SIZE = 340;
  const CENTER_X = SVG_SIZE / 2;
  const CENTER_Y = SVG_SIZE / 2;
  const MAX_RADIUS = 115;
  const NUM_AXES = COMPETENCY_AXES.length;
  const RINGS = [0.25, 0.5, 0.75, 1.0];

  const getCoordinates = (index: number, value: number, radius: number = MAX_RADIUS) => {
    const angle = (index * (2 * Math.PI / NUM_AXES)) - (Math.PI / 2);
    const r = (value / 100) * radius;
    const x = CENTER_X + r * Math.cos(angle);
    const y = CENTER_Y + r * Math.sin(angle);
    return { x, y };
  };

  const buildPolygonPoints = (competencies: CompetencyScore[]) => {
    return competencies.map((comp, idx) => {
      const { x, y } = getCoordinates(idx, comp.value);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
  };

  const activePointsStr = buildPolygonPoints(activeRole.competencies);
  const foundationPointsStr = buildPolygonPoints(foundationRole.competencies);

  // Overall average score
  const avgScore = Math.round(
    activeRole.competencies.reduce((acc, c) => acc + c.value, 0) / activeRole.competencies.length
  );

  return (
    <div id="career-radar">
      <div className="items-container">
        {/* Crisp Header */}
        <div className="radar-header">
          <div className="header-eyebrow">
            <FontAwesomeIcon icon={faChartPie} /> Quantitative Career Radar
          </div>
          <h1>Competency Growth Radar</h1>
          <p className="radar-subtitle">
            Visual progression across 5 core finance disciplines throughout career tenures at <strong>cargo-partner</strong> and <strong>CARS24</strong>.
          </p>
        </div>

        {/* Minimalist LinkedIn-Style Role Selector Tabs */}
        <div className="radar-nav-tabs">
          <div className="tabs-scroll-row">
            {ROLES_DATA.map((role) => {
              const isSelected = role.id === activeRole.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  className={`radar-tab-pill ${isSelected ? "is-selected" : ""}`}
                  onClick={() => setSelectedRoleId(role.id)}
                >
                  <span className="tab-company">{role.companyName}</span>
                  <span className="tab-title">{role.title}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className={`compare-chip ${showFoundationComparison ? "active" : ""}`}
            onClick={() => setShowFoundationComparison(!showFoundationComparison)}
            title="Overlay 2019 Baseline"
          >
            <FontAwesomeIcon icon={faCodeCompare} />
            <span>{showFoundationComparison ? "2019 Baseline: ON" : "Overlay 2019 Baseline"}</span>
          </button>
        </div>

        {/* Short & Sweet Dual-Pane Card */}
        <div className="radar-compact-card">
          {/* Left: Clean SVG Radar */}
          <div className="radar-chart-pane">
            <div className="svg-wrap">
              <svg viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} role="img" aria-label="Radar Chart">
                <defs>
                  <linearGradient id="radar-fill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={activeRole.themeColor} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={activeRole.themeColor} stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {/* Grid Web */}
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
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                        strokeDasharray={rIdx === RINGS.length - 1 ? undefined : "2 3"}
                      />
                    </g>
                  );
                })}

                {/* Radial Rays & Labels */}
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
                        stroke="rgba(255, 255, 255, 0.12)"
                        strokeWidth="1"
                      />
                      <text
                        x={labelCoord.x}
                        y={labelCoord.y + (labelCoord.y > CENTER_Y ? 8 : -2)}
                        fontSize="9"
                        fontWeight="600"
                        fill="#94a3b8"
                        textAnchor="middle"
                      >
                        {axis.shortName}
                      </text>
                    </g>
                  );
                })}

                {/* Baseline Polygon */}
                {showFoundationComparison && activeRole.id !== foundationRole.id && (
                  <polygon
                    points={foundationPointsStr}
                    fill="rgba(148, 163, 184, 0.08)"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                  />
                )}

                {/* Active Role Polygon */}
                <polygon
                  points={activePointsStr}
                  fill="url(#radar-fill-grad)"
                  stroke={activeRole.themeColor}
                  strokeWidth="2.5"
                  style={{ transition: "all 0.35s ease" }}
                />

                {/* Vertex Nodes with Score Pills */}
                {activeRole.competencies.map((comp, idx) => {
                  const { x, y } = getCoordinates(idx, comp.value);
                  return (
                    <g key={`node-${comp.key}`}>
                      <circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill={activeRole.themeColor}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <text
                        x={x}
                        y={y - 6}
                        fontSize="9.5"
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

            <div className="radar-legend-row">
              <span className="legend-dot" style={{ background: activeRole.themeColor }} />
              <span className="legend-label">Current: <strong>{activeRole.title}</strong></span>
              {showFoundationComparison && activeRole.id !== foundationRole.id && (
                <>
                  <span className="legend-sep">•</span>
                  <span className="legend-dot baseline" />
                  <span className="legend-label">2019 Baseline</span>
                </>
              )}
            </div>
          </div>

          {/* Right: Executive Summary Pane */}
          <div className="radar-summary-pane">
            {/* Role Header */}
            <div className="role-header-line">
              <div>
                <div className="role-tags">
                  <span className="company-chip" style={{ color: activeRole.themeColor, borderColor: `${activeRole.themeColor}55` }}>
                    <FontAwesomeIcon icon={faBuilding} /> {activeRole.companyName}
                  </span>
                  <span className="period-chip">
                    <FontAwesomeIcon icon={faCalendarAlt} /> {activeRole.period} ({activeRole.duration})
                  </span>
                </div>
                <h2 className="role-heading">{activeRole.title}</h2>
              </div>
              <div className="score-badge">
                <span className="score-num">{avgScore}</span>
                <span className="score-txt">Avg Index</span>
              </div>
            </div>

            {/* Crisp 1-Line Tagline */}
            <p className="role-tagline">"{activeRole.tagline}"</p>

            {/* 5-Competency Clean Progress Meters */}
            <div className="competency-meters-list">
              {activeRole.competencies.map((comp) => (
                <div key={comp.key} className="meter-row">
                  <div className="meter-label-wrap">
                    <span className="meter-name">{comp.name}</span>
                    <span className="meter-val">{comp.value}/100</span>
                  </div>
                  <div className="meter-track">
                    <div
                      className="meter-fill"
                      style={{
                        width: `${comp.value}%`,
                        background: activeRole.themeColor
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Crisp Bullet Points */}
            <div className="highlights-list">
              {activeRole.highlights.map((h, i) => (
                <div key={i} className="highlight-item">
                  <FontAwesomeIcon icon={faCheck} className="highlight-check" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Print Table Matrix (Visible only in @media print) */}
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
