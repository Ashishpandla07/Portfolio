import React from "react";
import financeDashboard from '../assets/images/finance_dashboard.jpg';
import achievementAward from '../assets/images/achievement_award.jpg';
import costOptimization from '../assets/images/cost_optimization.jpg';
import businessPartnering from '../assets/images/business_partnering.jpg';
import auditCompliance from '../assets/images/audit_compliance.jpg';
import financialGrowth from '../assets/images/financial_growth.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Key Achievements</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={costOptimization} className="zoom" alt="Cost Optimization" width="100%"/>
                <h2>₹50 Lacs Annual Cost Savings</h2>
                <p>Spearheaded strategic cost-control initiatives across cost centers at Cargo Partner, identified operational leakages, and delivered ~₹50 Lacs in annual savings through structured variance analysis.</p>
            </div>
            <div className="project">
                <img src={financialGrowth} className="zoom" alt="Profitability Turnaround" width="100%"/>
                <h2>20% Productivity Boost & Profitability Turnaround</h2>
                <p>Analyzed critical margins (Gross Margin, Net Margin, EBITDA) and drove a 20% boost in operational productivity, turning ~75% of profit centers from loss to profit at Cargo Partner.</p>
            </div>
            <div className="project">
                <img src={financeDashboard} className="zoom" alt="MIS Dashboards" width="100%"/>
                <h2>Dynamic MIS Dashboards & Financial Models</h2>
                <p>Developed comprehensive financial models and dynamic MIS dashboards (Budget vs. Actual, Sales Rankings, KPI Trackers) enabling real-time data-driven decision-making for senior leadership.</p>
            </div>
            <div className="project">
                <img src={achievementAward} className="zoom" alt="Employee of the Year" width="100%"/>
                <h2>Awards and Recognition</h2>
                    <li>✅ Employee of the Year 2021 at Cars24</li>
  <li>✅ Detail-Oriented Awardee 2022</li>
  <li>✅ Received GEM Award at Cargo Partner in 2024 & 2025</li>
  <li>✅ Outstanding/Excellent ratings in appraisal cycles of 2021, 2022, 2023, 2025 & 2026</li>
</ul>
            </div>
            <div className="project">
                <img src={auditCompliance} className="zoom" alt="Audit & Compliance" width="100%"/>
                <h2>₹80 Cr ESOP Buyback & Audit Leadership</h2>
                <p>Managed the entire financial execution for an ₹80 Cr ESOP share buyback at Cars24. Led statutory, tax, and ICFR audits in coordination with Big-4 firms EY and Grant Thornton.</p>
            </div>
            <div className="project">
                <img src={businessPartnering} className="zoom" alt="Business Partnering" width="100%"/>
                <h2>International Expansion & Business Partnering</h2>
                <p>Supported global expansion by setting up financial processes, compliance frameworks, and capital structures across multiple markets. Collaborated with business heads to co-pilot strategic growth and cross-functional efficiency.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;