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
                            <li><strong>AOP & Board Reporting:</strong> Managed annual budgeting & rolling forecasts across business divisions, created integrated 3-statement models, Capex/Opex allocation frameworks, and board presentation decks.</li>
                            <li><strong>₹50+ Lakhs Cost Optimization:</strong> Led strategic cost-control reviews across cost centers, plugged operational leakages, and achieved ~₹50 lacs in annual bottom-line savings.</li>
                            <li><strong>Revenue Assurance:</strong> Implemented cross-functional audits across business verticals, tracked profit-center billing accuracy, and safeguarded gross margins.</li>
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
                            <li><strong>P&L Turnaround:</strong> Developed contribution-margin and unit economics frameworks, turning <strong>~75% of previously losing profit centers</strong> profitable.</li>
                            <li><strong>Productivity & ROI:</strong> Enhanced operational productivity by <strong>20%</strong> and doubled commercial sales ROI from <strong>1x to 2x</strong>.</li>
                            <li><strong>Working Capital Management:</strong> Optimized receivables, payables, and cash flow to maintain liquidity and operational efficiency.</li>
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
                            <li><strong>Financial Modeling:</strong> Developed end-to-end financial models and live MIS dashboards (budget vs. actual, sales rankings, KPI trackers) enabling data-driven leadership decisions.</li>
                            <li><strong>Business Partnering:</strong> Collaborated closely with business heads to co-pilot strategic growth, margin improvement, and cross-functional operational efficiency.</li>
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
                            <li><strong>$10M (₹80 Cr) ESOP Buyback:</strong> Steered end-to-end execution across independent share valuation, board approvals, and withholding tax (TDS) calculations in compliance with Ind-AS 102/32 and Companies Act.</li>
                            <li><strong>Audit & Due Diligence:</strong> Led Statutory, Tax, and Internal/ICFR audits with external auditors (EY, Grant Thornton), resolving critical control deficiencies to achieve a <strong>100% clean internal audit report</strong>.</li>
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
                            <li><strong>Month-End Closing:</strong> Streamlined book closures and compliance, compressing closing deadlines from the <strong>11th to the 7th day</strong>.</li>
                            <li><strong>Cross-Border Structuring:</strong> Partnered with leadership to execute international market entry, capital structures, FEMA, and transfer pricing frameworks.</li>
                            <li><strong>ERP Automation & Inventory Controls:</strong> Implemented scalable SAP S/4HANA & Power BI workflows; governed periodic physical verifications, Ind-AS 2 cost vs. NRV valuations, and refurbishment inventory controls.</li>
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
                            <li><strong>Cargo-Partner:</strong> GEM Award recipient (2024, 2025, 2026) & Top Support Function Award in Process Excellence (2024, 2025).</li>
                            <li><strong>CARS24:</strong> Employee of the Year (2021) & Detail-Oriented Excellence Award (2022).</li>
                            <li><strong>Performance Ratings:</strong> Ranked in the top appraisal tier (Outstanding/Excellent) across all cycles (2021–2026).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;