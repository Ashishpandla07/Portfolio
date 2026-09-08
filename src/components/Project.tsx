import React from "react";
import financeDashboard from '../assets/images/finance_dashboard.jpg';
import achievementAward from '../assets/images/achievement_award.jpg';
import costOptimization from '../assets/images/cost_optimization.jpg';
import businessPartnering from '../assets/images/business_partnering.jpg';
import auditCompliance from '../assets/images/audit_compliance.jpg';
import financialGrowth from '../assets/images/financial_growth.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Key Achievements</h1>
            <div className="projects-grid">
                <div className="project">
                    <img src={costOptimization} className="zoom" alt="Cost Optimization" width="100%" />
                    <h2>Cost Optimization</h2>
                    <p>
                        <li>Led strategic cost-control initiatives across multiple cost centers to identify and operational leakages.</li>
                        <li>Delivered 50 lakhs in annual savings through targeted cost optimization initiatives.</li>
                        <li>Strengthened cost efficiency and operational performance through data-driven analysis and corrective actions.</li>
                    </p>
                </div>
                <div className="project">
                    <img src={financialGrowth} className="zoom" alt="Profitability Turnaround" width="100%" />
                    <h2>Financial Turnaround & Profitability Improvement</h2>
                    <p>
                        <li>Led profitability turnaround initiatives, making ~75% of profit centers profitable through margin improvement and cost optimization.</li>
                        <li>Improved operational productivity by 20% by identifying performance gaps and driving data-driven corrective actions.</li>
                        <li>Enhanced ROI from 1x to 2x through sales performance analysis, targeted interventions, and stronger financial decision-making.</li>
                    </p>
                </div>
                <div className="project">
                    <img src={financeDashboard} className="zoom" alt="MIS Dashboards" width="100%" />
                    <h2>Financial Modeling & MIS Dashboards</h2>
                    <p>
                        <li><strong>Dynamic Dashboards:</strong> Built comprehensive MIS trackers (Budget vs. Actual, Sales Rankings, KPIs Report, ROP Tracker, and Volume Analysis).</li>
                        <li><strong>Business Insights:</strong> Delivered actionable financial models to enable real-time, data-driven decision-making for senior leadership.</li>
                    </p>
                </div>
                <div className="project">
                    <img src={achievementAward} className="zoom" alt="FinOps Automation & Working Capital" width="100%" />
                    <h2>Awards and Recognition
</h2>
                    <p>
                        <li>Employee of the Year 2021 at Cars24.</li>
                        <li>Detail-Oriented Awardee in 2022 at Cars24.</li>
                        <li>Received GEM Award at Cargo Partner in 2024 & 2025.</li>
                        <li>Outstanding/Excellent ratings in appraisal cycles of 2021, 2022, 2023, 2025, and 2026.</li>
                    </p>
                </div>
                <div className="project"  style={{ width: "100%" }}>
                    <img src={auditCompliance} className="zoom" alt="Audit & Compliance" width="100%" />
                    <h2>Capital Transactions & Audit Management</h2>
                    <p>
                        <li> <strong>₹80 Cr ESOP Buyback:</strong> Managed the complete financial execution and capital structuring for the share buyback program at Cars24.</li>
                        <li> <strong>Audit Management:</strong> Spearheaded Statutory, Internal, Tax, and ICFR audits, liaising directly with Big-4 firms (EY and Grant Thornton).</li>
                        <li> <strong>Process Excellence & Compliance:</strong> Successfully remediated previous high-risk audit points, driving the team to secure the company's first ever clean Internal Audit and ICFR reports at Cars24.</li>
                    </p>
                </div>
                <div className="project">
                    <img src={businessPartnering} className="zoom" alt="Business Partnering" width="100%" />
                    <h2>International Expansion & Business Partnering</h2>
                    <p>
                        <li> <strong>Entity Structuring & Compliance:</strong> Managed banking setups, company structuring, and local compliance for overseas entities.</li>
                        <li> <strong>End-to-End Process Setup:</strong> Scaled Indian operational workflows globally, establishing books of accounts, Setting up of finance function, and cross-functional business processes.</li>
                        <li> <strong>Business Partnering:</strong> Partnered directly with business heads to drive cross-functional efficiency and business growth.</li>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;