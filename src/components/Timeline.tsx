import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faCheckCircle,
  faTrophy,
  faArrowTrendUp
} from "@fortawesome/free-solid-svg-icons";
import cars24Logo from "../assets/images/cars24_logo.png";
import cargoPartnerLogo from "../assets/images/cargo_partner_logo.jpg";
import "../assets/styles/Timeline.scss";

interface MinimalRole {
  title: string;
  period: string;
  duration: string;
  badge: string;
  badgeType: "promotion" | "award" | "foundation";
  highlights: string[];
}

interface ExecutiveCompany {
  id: string;
  name: string;
  logo: string;
  period: string;
  duration: string;
  location: string;
  workMode: string;
  color: string;
  isCurrent?: boolean;
  tagline: string;
  roles: MinimalRole[];
}

const EXECUTIVE_EXPERIENCE: ExecutiveCompany[] = [
  {
    id: "cargo-partner",
    name: "cargo-partner",
    logo: cargoPartnerLogo,
    period: "Aug 2023 – Present",
    duration: "3 yrs 2 mos",
    location: "Gurugram, India",
    workMode: "Hybrid",
    color: "#5000ca",
    isCurrent: true,
    tagline: "Leading India Financial Controlling, Enterprise AOPs & SAP S/4HANA Analytics",
    roles: [
      {
        title: "Senior Manager Controlling",
        period: "Apr 2026 – Present",
        duration: "Current",
        badge: "India Controlling Lead",
        badgeType: "promotion",
        highlights: [
          "Enterprise FP&A, rolling forecasts & strategic board advisory",
          "SAP S/4HANA & Power BI automated financial intelligence"
        ]
      },
      {
        title: "Manager Controlling",
        period: "Aug 2023 – Mar 2026",
        duration: "2 yrs 8 mos",
        badge: "GEM Awardee (2024 & 2025)",
        badgeType: "award",
        highlights: [
          "P&L turnaround & cost center governance across business units",
          "Working capital optimization & commercial business partnering"
        ]
      }
    ]
  },
  {
    id: "cars24",
    name: "CARS24",
    logo: cars24Logo,
    period: "Dec 2019 – Aug 2023",
    duration: "3 yrs 9 mos",
    location: "Gurugram, India",
    workMode: "On-site",
    color: "#ff6b00",
    tagline: "Scaled Finance Function from Growth Stage to Capital Transactions & Big-4 Audits",
    roles: [
      {
        title: "Senior Manager & Manager",
        period: "Apr 2022 – Aug 2023",
        duration: "1 yr 5 mos",
        badge: "Rated 5/5 · Mr. Detail Oriented Award",
        badgeType: "promotion",
        highlights: [
          "Executed ₹80 Cr ESOP Buyback & overseas entity structuring",
          "Led Big-4 Statutory Audits (EY / GT) with unqualified ICFR opinion"
        ]
      },
      {
        title: "Assistant Manager & Team Lead",
        period: "Dec 2019 – Mar 2022",
        duration: "2 yrs 4 mos",
        badge: "Employee of the Year 2021",
        badgeType: "award",
        highlights: [
          "Compressed month-end close cycle from 11th to 7th business day",
          "Architected P2P, O2C controls & balance sheet governance"
        ]
      }
    ]
  }
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        {/* Minimalist Section Header */}
        <div className="experience-header">
          <div className="header-eyebrow">
            <FontAwesomeIcon icon={faBriefcase} /> Experience Track
          </div>
          <h1>Professional Experience</h1>
          <p className="experience-subtitle">
            8+ years driving strategic FP&A, controllership, and business growth across hyper-growth enterprises.
          </p>
        </div>

        {/* Minimalist Executive Cards Grid */}
        <div className="executive-grid">
          {EXECUTIVE_EXPERIENCE.map((company) => (
            <div key={company.id} className="exec-card" style={{ "--brand-color": company.color } as React.CSSProperties}>
              {/* Card Header */}
              <div className="exec-card-header">
                <div className="company-info-row">
                  <div className="logo-box">
                    <img src={company.logo} alt={company.name} />
                  </div>
                  <div className="title-block">
                    <div className="name-wrap">
                      <h2>{company.name}</h2>
                      {company.isCurrent && <span className="active-badge">Current</span>}
                    </div>
                    <span className="meta-text">
                      {company.duration} · {company.location} ({company.workMode})
                    </span>
                  </div>
                </div>

                <span className="period-pill" style={{ backgroundColor: company.color }}>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {company.period}
                </span>
              </div>

              {/* Company Mission Tagline */}
              <p className="company-tagline">{company.tagline}</p>

              {/* Roles Snippets */}
              <div className="roles-stack">
                {company.roles.map((role, idx) => (
                  <div key={idx} className="role-snippet">
                    <div className="role-snippet-header">
                      <h3>{role.title}</h3>
                      <span className="badge-chip">
                        {role.badgeType === "award" && <FontAwesomeIcon icon={faTrophy} />}
                        {role.badgeType === "promotion" && <FontAwesomeIcon icon={faArrowTrendUp} />}
                        {role.badgeType === "foundation" && <FontAwesomeIcon icon={faCheckCircle} />}
                        <span>{role.badge}</span>
                      </span>
                    </div>

                    <ul className="mini-bullet-list">
                      {role.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;