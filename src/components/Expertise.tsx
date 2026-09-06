import React from 'react';
import { faChartLine, faShieldHalved, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Financial Planning & Analysis",
    "Budgeting & Forecasting",
    "Financial Modelling",
    "Variance Analysis",
    "P&L Management",
    "Working Capital Management",
    "Cost Optimization",
    "KPI Dashboards",
    "Business Partnering",
    "Fundraising",
    "Investor Relations",
];

const labelsSecond = [
    "Ind-AS",
    "IFRS",
    "Financial Reporting",
    "Financial Consolidation",
    "Statutory Audit",
    "Internal Audit",
    "Tax Audit",
    "ICFR",
    "GST Compliance",
    "Transfer Pricing",
    "Risk Management",
    "Corporate Governance",
    "ESOP Management",
    "Due Diligence",
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
    "Process Automation",
    "Data Modeling",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Strategic Finance & FP&A</h3>
                    <p>7.5+ years leading FP&A, annual budgeting, long-term financial modeling, and strategic forecasting. Proven track record of delivering data-driven business insights via executive MIS dashboards, performance trackers, and variance analyses that drive executive decision-making and profitable growth.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Key skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faShieldHalved} size="3x"/>
                    <h3>Financial Controlling & Compliance</h3>
                    <p>Specialized in Ind-AS and IFRS financial reporting, regulatory risk mitigation, and audit management (Big 4 & Mid-tier). Strong background in ICFR enforcement, GST compliance, and internal controls. Successfully executed a ₹80 Cr ESOP buyback and directed international cross-border financial expansion.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Key skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Systems & Analytics</h3>
                    <p>Proficient in deploying enterprise-grade ERPs and business intelligence platforms. Hands-on expertise in SAP, Power BI, and Advanced Excel to architect automated financial reporting workflows, custom KPI dashboards, and high-impact analytics that streamline operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
