import React from "react";
import costOptimization from '../assets/images/cost_optimization.webp';
import costOptimizationSm from '../assets/images/cost_optimization-sm.webp';
import financialGrowth from '../assets/images/financial_growth.webp';
import financialGrowthSm from '../assets/images/financial_growth-sm.webp';
import financeDashboard from '../assets/images/finance_dashboard.webp';
import financeDashboardSm from '../assets/images/finance_dashboard-sm.webp';
import auditCompliance from '../assets/images/audit_compliance.webp';
import auditComplianceSm from '../assets/images/audit_compliance-sm.webp';
import businessPartnering from '../assets/images/business_partnering.webp';
import businessPartneringSm from '../assets/images/business_partnering-sm.webp';
import achievementAward from '../assets/images/achievement_award.webp';
import achievementAwardSm from '../assets/images/achievement_award-sm.webp';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <div className="section-header">
                <h2>Key Achievements</h2>
            </div>
            <div className="projects-grid">
                {/* 1. Cost Optimization */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img
                            src={costOptimization}
                            srcSet={`${costOptimizationSm} 400w, ${costOptimization} 1264w`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            width={400}
                            height={268}
                            loading="lazy"
                            decoding="async"
                            className="zoom"
                            alt="Cost Optimization"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Enterprise Cost Discipline</h3>
                        <ul className="achievement-list">
                            <li>Led company-wide cost-control and zero-based reviews across operating cost centers to eradicate leakages.</li>
                            <li>Delivered <strong>₹50+ Lakhs</strong> in recurring annual savings through targeted operational interventions.</li>
                            <li>Enhanced operating cash flows and margin discipline via continuous driver-based variance reviews.</li>
                        </ul>
                    </div>
                </div>

                {/* 2. Turnaround & Profitability */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img
                            src={financialGrowth}
                            srcSet={`${financialGrowthSm} 400w, ${financialGrowth} 1264w`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            width={400}
                            height={268}
                            loading="lazy"
                            decoding="async"
                            className="zoom"
                            alt="Profitability Turnaround"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Commercial Turnaround & Profitability</h3>
                        <ul className="achievement-list">
                            <li>Turned around <strong>~75% of unprofitable profit centers</strong> into profitable units through pricing and unit cost restructuring.</li>
                            <li>Improved operational productivity by <strong>20%</strong> through automated controls.</li>
                            <li>Lifted commercial sales ROI from <strong>1x to 2x</strong> via high-margin business interventions.</li>
                        </ul>
                    </div>
                </div>

                {/* 3. Modeling & MIS */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img
                            src={financeDashboard}
                            srcSet={`${financeDashboardSm} 400w, ${financeDashboard} 1264w`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            width={400}
                            height={268}
                            loading="lazy"
                            decoding="async"
                            className="zoom"
                            alt="MIS Dashboards"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Strategic Modeling & Board MIS</h3>
                        <ul className="achievement-list">
                            <li><strong>Dynamic Executive Dashboards:</strong> Built comprehensive MIS suites (Budget vs. Actual, Sales Rankings, KPI Scorecards, and Volume Analysis).</li>
                            <li><strong>Executive Decision Support:</strong> Delivered multi-year valuation and scenario models to steer Board and C-suite growth strategy.</li>
                        </ul>
                    </div>
                </div>

                {/* 4. Capital Transactions & Audits */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img
                            src={auditCompliance}
                            srcSet={`${auditComplianceSm} 400w, ${auditCompliance} 1264w`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            width={400}
                            height={268}
                            loading="lazy"
                            decoding="async"
                            className="zoom"
                            alt="Audit & Compliance"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Capital Transactions & Governance</h3>
                        <ul className="achievement-list">
                            <li><strong>₹80 Cr ESOP Buyback:</strong> Executed end-to-end capital structuring, valuation, and disbursement at CARS24.</li>
                            <li><strong>Big-4 Audit Management:</strong> Led Statutory, Internal, Tax, and ICFR audits with leading global firms (EY and Grant Thornton).</li>
                            <li><strong>Clean Opinions:</strong> Remediated high-risk audit items, securing 100% clean ICFR and internal audit reports.</li>
                        </ul>
                    </div>
                </div>

                {/* 5. International Expansion */}
                <div className="project-card">
                    <div className="card-img-wrapper">
                        <img
                            src={businessPartnering}
                            srcSet={`${businessPartneringSm} 400w, ${businessPartnering} 1264w`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            width={400}
                            height={268}
                            loading="lazy"
                            decoding="async"
                            className="zoom"
                            alt="Business Partnering"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Global Expansion & Partnering</h3>
                        <ul className="achievement-list">
                            <li><strong>Overseas Entity Architecture:</strong> Established cross-border banking, international transfer pricing, and finance workflows for overseas entities.</li>
                            <li><strong>Executive Partnering:</strong> Collaborated with business heads to evaluate new business lines and optimize unit margins.</li>
                            <li><strong>MRL Infrastructure:</strong> Set up end-to-end accounting governance for Mega Refurbishment Labs, managing supply chain and refurbishment costing.</li>
                        </ul>
                    </div>
                </div>

                {/* 6. Awards & Recognition */}
                <div className="project-card highlight-award-card">
                    <div className="card-img-wrapper">
                        <img
                            src={achievementAward}
                            srcSet={`${achievementAwardSm} 400w, ${achievementAward} 1264w`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                            width={400}
                            height={268}
                            loading="lazy"
                            decoding="async"
                            className="zoom"
                            alt="Awards and Recognition"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Executive Recognition & Honors</h3>
                        <ul className="achievement-list">
                            <li><strong>Employee of the Year 2021</strong> at CARS24.</li>
                            <li><strong>Detail-Oriented Awardee 2022</strong> at CARS24.</li>
                            <li><strong>GEM Award</strong> at cargo-partner in 2024 & 2025.</li>
                            <li><strong>Top appraisal ratings (5/5)</strong> across multiple leadership cycles (2021, 2022, 2023, 2025, and 2026).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;