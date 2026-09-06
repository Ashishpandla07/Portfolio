import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faDatabase } from '@fortawesome/free-solid-svg-icons';
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
    "Investors Relations",
    
];

const labelsSecond = [
    "Ind-AS and IFRS",
    "Financial Reporting",
    "Financial Consolidation",
    "Statutory Audit",
    "Internal Audit",
    "Tax Audit",
    "ICFR",
    "Transfer Pricing",
    "Risk Management",
    "ESOP Management",
    "Corporate Governance",
    "GST Compliance",
    "Due Diligence",
    
    
];

const labelsThird = [
    "SAP S/4HANA",
    "SAP B1",
    "Cargowise Certified",
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
                    <p>7.5+ years driving FP&A, budgeting, forecasting, and financial modelling. Proven ability to deliver data-driven insights through MIS dashboards, KPI trackers, and variance analysis to support leadership decision-making.</p>
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
                    <p>Expert in Ind-AS & IFRS financial reporting, statutory and tax audits (EY, GT), ICFR, GST compliance, and internal controls. Managed ₹80 Cr ESOP buyback and led international financial expansion across markets.</p>
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
                    <p>Proficient in enterprise-grade ERP and analytics platforms. Leverages SAP, Power BI, and Advanced Excel to build dynamic financial dashboards, automate reporting, and derive actionable business intelligence.</p>
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
