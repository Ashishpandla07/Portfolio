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
                {/* 1. Cost Optimization & Capital Allocation */}
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
                            alt="Cost Optimization and Capital Discipline"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Capital Allocation & Cost Discipline</h3>
                        <ul className="achievement-list">
                            <li>Led company-wide Zero-Based Budgeting (ZBB) reviews across operating cost centers to eliminate structural leakages.</li>
                            <li>Delivered <strong>₹50+ Lakhs</strong> in recurring annual SG&A savings, sustainably expanding operating margins and ROIC.</li>
                            <li>Institutionalized driver-based rolling variance reviews, restricting budget-to-actual deviations within <strong>±3%</strong>.</li>
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
                        <h3>Commercial Turnaround & Unit Economics</h3>
                        <ul className="achievement-list">
                            <li>Turned around <strong>~75% of unprofitable business units</strong> into positive EBITDA centers via pricing and cost restructuring.</li>
                            <li>Enhanced operational workforce productivity by <strong>20%</strong> through automated internal control benchmarks.</li>
                            <li>Lifted commercial sales ROI from <strong>1x to 2x</strong> through strategic high-margin portfolio reallocation.</li>
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
                        <h3>Strategic Modeling & Board Intelligence</h3>
                        <ul className="achievement-list">
                            <li><strong>Executive BI Suites:</strong> Built automated Power BI suites monitoring multi-entity P&L, cohort economics, DSO, and cash burn.</li>
                            <li><strong>Predictive Scenario Models:</strong> Directed 12–24 month rolling forecast models to guide C-suite capital deployment and Board strategy.</li>
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
                            alt="Audit and Capital Transactions"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Capital Transactions & Governance</h3>
                        <ul className="achievement-list">
                            <li><strong>₹80 Cr ESOP Buyback:</strong> Steered end-to-end capital structuring, statutory valuation, and disbursement at CARS24.</li>
                            <li><strong>Big-4 Audit Management:</strong> Led Statutory, Tax, and ICFR audit cycles with global leaders (EY and Grant Thornton).</li>
                            <li><strong>100% Clean Opinions:</strong> Remediated high-risk audit items, consistently achieving zero material audit adjustments.</li>
                        </ul>
                    </div>
                </div>

                {/* 5. Close Acceleration & Global Expansion */}
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
                            alt="Global Expansion and Fast Close"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Global Expansion & Close Velocity</h3>
                        <ul className="achievement-list">
                            <li><strong>DCO Compression:</strong> Slashed Days Close Outstanding (DCO) by <strong>36% (11th to 7th business day)</strong> via reconciliation automation.</li>
                            <li><strong>Cross-Border Architecture:</strong> Established international banking rails, transfer pricing, and multi-currency consolidation for overseas entities.</li>
                            <li><strong>Operations Costing:</strong> Formulated end-to-end financial controls and supply chain unit costing for Mega Refurbishment Labs (MRLs).</li>
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
                            alt="Executive Awards and Honors"
                        />
                    </div>
                    <div className="card-content">
                        <h3>Executive Recognition & Honors</h3>
                        <ul className="achievement-list">
                            <li><strong>Employee of the Year 2021</strong> & <strong>Detail-Oriented Awardee 2022</strong> at CARS24.</li>
                            <li><strong>GEM Award</strong> at cargo-partner in 2024 & 2025 for driving fiscal transformation.</li>
                            <li><strong>Top appraisal ratings (5/5)</strong> across multiple consecutive leadership cycles (2021, 2022, 2023, 2025, and 2026).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;