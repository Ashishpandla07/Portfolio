import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faDatabase } from '@fortawesome/free-solid-svg-icons';
import SkillIcon from './SkillIcon';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Financial Planning & Analysis",
    "Budgeting & Forecasting",
    "Long-Term Financial Modeling",
    "Variance Analysis",
    "Capital Allocation",
    "Unit Economics & ROI",
    "KPI Dashboards",
    "Business Partnering",
    "Investor Relations"
];

const labelsSecond = [
    "Ind-AS / IFRS",
    "Financial Reporting",
    "Working Capital & Treasury",
    "ICFR Framework",
    "Statutory & Tax Audit",
    "Consolidation",
    "ESOP Buyback",
    "Internal Audit",
    "GST Compliance",
    "Transfer Pricing"
];

const labelsThird = [
    "SAP S/4HANA",
    "SAP B1",
    "Power BI",
    "Tableau",
    "CargoWise Certified",
    "Advanced Excel",
    "Salesforce",
    "Tally Prime",
    "Process Automation",
    "Artificial Intelligence"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h2 className="skills-title">Expertise</h2>
                <div className="skills-grid">
                    <div className="skill">
                        <div className="skill-icon-wrapper">
                            <FontAwesomeIcon icon={faChartLine} size="2x" />
                        </div>
                        <h3>Strategic FP&A & Modeling</h3>
                        <p>Directing annual budgeting (AOP), rolling 12–24 month forecasts, capital allocation, unit economics, cohort profitability, and executive board reporting.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Key skills:</span>
                            <div className="chips-list">
                                {labelsFirst.map((label, index) => (
                                    <div key={index} className="skill-chip-img" title={label}>
                                        <span className="chip-media"><SkillIcon name={label} size={15} /></span>
                                        <span className="chip-text">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon-wrapper">
                            <FontAwesomeIcon icon={faShieldHalved} size="2x" />
                        </div>
                        <h3>Controllership, Treasury & Governance</h3>
                        <p>Leading Ind-AS/IFRS financial reporting, multi-entity consolidation, working capital liquidity, ICFR risk matrices, and Big-4 statutory & tax audits.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Key skills:</span>
                            <div className="chips-list">
                                {labelsSecond.map((label, index) => (
                                    <div key={index} className="skill-chip-img" title={label}>
                                        <span className="chip-media"><SkillIcon name={label} size={15} /></span>
                                        <span className="chip-text">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon-wrapper">
                            <FontAwesomeIcon icon={faDatabase} size="2x" />
                        </div>
                        <h3>ERP Architecture & Automation</h3>
                        <p>Architecting executive BI dashboards, ERP migrations (SAP S/4HANA), automated banking reconciliations, and close cycle acceleration.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            <div className="chips-list">
                                {labelsThird.map((label, index) => (
                                    <div key={index} className="skill-chip-img" title={label}>
                                        <span className="chip-media"><SkillIcon name={label} size={15} /></span>
                                        <span className="chip-text">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
