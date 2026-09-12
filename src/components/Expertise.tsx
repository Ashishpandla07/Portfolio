import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faDatabase } from '@fortawesome/free-solid-svg-icons';
import SkillIcon from './SkillIcon';
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

const labelsThird = [
    "SAP S/4HANA",
    "SAP B1",
    "CargoWise Certified",
    "Power BI",
    "Tableau",
    "Advanced Excel",
    "Salesforce",
    "Tally Prime",
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
                        <h3>Strategic Finance & FP&A</h3>
                        <p>Driving annual budgeting, driver-based financial models, monthly variance analysis, working capital optimization, and investor relations.</p>
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
                        <h3>Financial Controlling & Governance</h3>
                        <p>Expert in Ind-AS & IFRS reporting, multi-entity consolidation, audits, ICFR, cross-charge, transfer pricing, and seamless GST compliance.</p>
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
                        <h3>Systems & Process Automation</h3>
                        <p>Building dynamic management reporting dashboards, automating financial processes, and integrating ERPs with analytics tools.</p>
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
