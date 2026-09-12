import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import TechLogo from './TechLogos';
import financialGrowth from '../assets/images/financial_growth.jpg';
import auditCompliance from '../assets/images/audit_compliance.jpg';
import systemsAutomation from '../assets/images/systems_automation.jpg';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Financial Planning & Analysis",
  "Budgeting & Forecasting",
  "Variance Analysis",
  "Fundraising",
  "Working Capital",
  "KPI Dashboards",
  "Business Partnering",
  "Investor Relations"
];

const labelsSecond = [
  "Ind-AS / IFRS",
  "ICFR Framework",
  "Financial Reporting",
  "Consolidation",
  "Cross Charge",
  "Statutory & Tax Audit",
  "ESOP Buyback",
  "Internal Audit",
  "GST Compliance",
  "Transfer Pricing"
];

interface TechStackItem {
  name: string;
  badge?: string;
}

const techStackList: TechStackItem[] = [
  { name: "SAP S/4HANA", badge: "ERP Core" },
  { name: "SAP B1", badge: "ERP" },
  { name: "CargoWise Certified", badge: "Logistics ERP" },
  { name: "Power BI", badge: "Analytics" },
  { name: "Tableau", badge: "BI Visuals" },
  { name: "Advanced Excel", badge: "Financial Modeling" },
  { name: "Salesforce", badge: "CRM" },
  { name: "Tally Prime", badge: "Accounting" },
  { name: "Artificial Intelligence", badge: "Automation" }
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <div className="section-header">
          <div className="expertise-eyebrow">
            <span className="pulse-dot"></span>
            <span>CORE COMPETENCIES</span>
          </div>
          <h1 className="skills-title">
            Domain Expertise & <span className="highlight-gradient">Tech Stack</span>
          </h1>
          <p className="skills-subtitle">
            Strategic financial leadership grounded in rigorous controllership, enterprise ERPs, and automated analytics.
          </p>
        </div>

        <div className="skills-grid">
          {/* 1. Strategic Finance & FP&A */}
          <div className="skill-card">
            <div className="card-img-wrapper">
              <img src={financialGrowth} className="zoom" alt="Strategic Finance & FP&A" />
              <span className="pillar-tag">Strategic FP&A</span>
            </div>
            <div className="card-content">
              <div className="card-header-inner">
                <div className="skill-icon-wrapper fp-icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3>Strategic Finance & FP&A</h3>
              </div>
              <p>Driving annual budgeting, driver-based financial models, monthly variance analysis, working capital optimization, and investor relations.</p>
              
              <div className="skills-chips-wrapper">
                <span className="chip-section-title">Key Competencies:</span>
                <div className="flex-chips">
                  {labelsFirst.map((label, index) => (
                    <Chip key={index} className="skill-chip" label={label} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Financial Controlling & Governance */}
          <div className="skill-card">
            <div className="card-img-wrapper">
              <img src={auditCompliance} className="zoom" alt="Financial Controlling & Governance" />
              <span className="pillar-tag">Governance & ICFR</span>
            </div>
            <div className="card-content">
              <div className="card-header-inner">
                <div className="skill-icon-wrapper gov-icon">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <h3>Financial Controlling & Governance</h3>
              </div>
              <p>Expert in Ind-AS & IFRS reporting, multi-entity consolidation, audits, ICFR, cross-charge, transfer pricing, and seamless GST compliance.</p>
              
              <div className="skills-chips-wrapper">
                <span className="chip-section-title">Key Competencies:</span>
                <div className="flex-chips">
                  {labelsSecond.map((label, index) => (
                    <Chip key={index} className="skill-chip" label={label} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Systems & Process Automation / Tech Stack */}
          <div className="skill-card tech-card">
            <div className="card-img-wrapper">
              <img src={systemsAutomation} className="zoom" alt="Systems & Process Automation" />
              <span className="pillar-tag tech-tag">Enterprise Tech</span>
            </div>
            <div className="card-content">
              <div className="card-header-inner">
                <div className="skill-icon-wrapper tech-icon">
                  <FontAwesomeIcon icon={faMicrochip} />
                </div>
                <h3>Systems & Process Automation</h3>
              </div>
              <p>Building dynamic management reporting dashboards, automating financial processes, and integrating ERPs with analytics tools.</p>
              
              <div className="skills-chips-wrapper">
                <span className="chip-section-title">Official Tech Stack & Tooling:</span>
                <div className="tech-logo-grid">
                  {techStackList.map((item, index) => (
                    <div key={index} className="tech-logo-tile" title={item.name}>
                      <div className="tech-tile-icon">
                        <TechLogo name={item.name} size={18} />
                      </div>
                      <div className="tech-tile-details">
                        <span className="tech-tile-name">{item.name}</span>
                        {item.badge && <span className="tech-tile-sub">{item.badge}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
