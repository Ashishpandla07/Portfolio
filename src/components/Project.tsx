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
            <div className="section-header">
                <h1>Key Achievements</h1>
            </div>
            <div className="projects-grid">
                {/* 1. Cost Optimization */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img src={costOptimization} className="zoom" alt="Cost Optimization" />
                    </div>
                    <div className="card-content">
                        <h2>Cost Optimization</h2>
                        <ul className="achievement-list">
                            <li>Led strategic cost-control initiatives across multiple cost centers to identify operational leakages.</li>
                            <li>Delivered <strong>₹50 lakhs</strong> in annual savings through targeted cost optimization initiatives.</li>
                            <li>Strengthened cost efficiency and operational performance through data-driven analysis and corrective actions.</li>
                        </ul>
                    </div>
                </div>

                {/* 2. Turnaround & Profitability */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img src={financialGrowth} className="zoom" alt="Profitability Turnaround" />
                    </div>
                    <div className="card-content">
                        <h2>Financial Turnaround & Profitability</h2>
                        <ul className="achievement-list">
                            <li>Led turnaround of <strong>~75% profit centers</strong> to profitability via margin improvement and cost optimization.</li>
                            <li>Improved operational productivity by <strong>20%</strong> through corrective actions.</li>
                            <li>Doubled ROI from <strong>1x to 2x</strong> via targeted sales interventions.</li>
                        </ul>
                    </div>
                </div>

                {/* 3. Modeling & MIS */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img src={financeDashboard} className="zoom" alt="MIS Dashboards" />
                    </div>
                    <div className="card-content">
                        <h2>Financial Modeling & MIS Dashboards</h2>
                        <ul className="achievement-list">
                            <li><strong>Dynamic Dashboards:</strong> Built comprehensive MIS trackers (Budget vs. Actual, Sales Rankings, KPIs Report, ROP Tracker, and Volume Analysis).</li>
                            <li><strong>Business Insights:</strong> Delivered actionable financial models to enable real-time, data-driven decision-making for senior leadership.</li>
                        </ul>
                    </div>
                </div>

                {/* 4. Capital Transactions & Audits */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img src={auditCompliance} className="zoom" alt="Audit & Compliance" />
                    </div>
                    <div className="card-content">
                        <h2>Capital Transactions & Audit Management</h2>
                        <ul className="achievement-list">
                            <li><strong>₹80 Cr ESOP Buyback:</strong> Managed complete financial execution and capital structuring for share buyback at Cars24.</li>
                            <li><strong>Audit Management:</strong> Spearheaded Statutory, Internal, Tax, and ICFR audits with Big-4 and leading global firms (EY and Grant Thornton).</li>
                            <li><strong>Process Excellence:</strong> Remediated high-risk audit points, securing Cars24's first clean Internal Audit & ICFR reports.</li>
                        </ul>
                    </div>
                </div>

                {/* 5. International Expansion */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img src={businessPartnering} className="zoom" alt="Business Partnering" />
                    </div>
                    <div className="card-content">
                        <h2>International Expansion & Partnering</h2>
                        <ul className="achievement-list">
                            <li><strong>Entity Structuring & Compliance:</strong> Managed banking setups, company structuring, and local compliance for overseas entities.</li>
                            <li><strong>End-to-End Process Setup:</strong> Scaled operational workflows globally, setting up finance function and books of accounts.</li>
                            <li><strong>Business Partnering:</strong> Partnered directly with business heads to drive cross-functional efficiency and growth.</li>
                        <li><strong>MRL Financial Architecture:</strong> Established end-to-end accounting for CARS24’s Mega Refurbishment Labs (MRL)—governing spare parts procurement, refurbishment costing (denting, painting, repair), and service revenue recognition.</li>
                        </ul>
                    </div>
                </div>

                {/* 6. Awards & Recognition */}
                <div className="project-card highlight-award-card">
                    <div className="card-img-wrapper">
                        <img src={achievementAward} className="zoom" alt="Awards and Recognition" />
                    </div>
                    <div className="card-content">
                        <h2>Awards & Recognition</h2>
                        <ul className="achievement-list">
                            <li><strong>Employee of the Year 2021</strong> at Cars24.</li>
                            <li><strong>Detail-Oriented Awardee 2022</strong> at Cars24.</li>
                            <li><strong>GEM Award</strong> at Cargo Partner in 2024 & 2025.</li>
                            <li><strong>Outstanding/Excellent ratings</strong> in appraisal cycles of 2021, 2022, 2023, 2025, and 2026.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;