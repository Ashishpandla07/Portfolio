import React from 'react';

interface SkillIconProps {
  name: string;
  size?: number;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, size = 16 }) => {
  switch (name) {
    // --- Tech Stack Real Brand Logos ---
    case 'SAP S/4HANA':
    case 'SAP B1':
      return (
        <svg width={size * 1.4} height={size} viewBox="0 0 36 20" fill="none">
          <rect width="36" height="20" rx="3" fill="#0070F2" />
          <text x="18" y="14" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="Arial, sans-serif" textAnchor="middle">SAP</text>
        </svg>
      );

    case 'Power BI':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="2" y="9" width="3.5" height="9" rx="1" fill="#E6AD10" />
          <rect x="7" y="5.5" width="3.5" height="12.5" rx="1" fill="#F2C811" />
          <rect x="12" y="2" width="3.5" height="16" rx="1" fill="#D99208" />
        </svg>
      );

    case 'Tableau':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="1.8" fill="#E8762D" />
          <circle cx="10" cy="4" r="1.3" fill="#1F4570" />
          <circle cx="10" cy="16" r="1.3" fill="#1F4570" />
          <circle cx="4" cy="10" r="1.3" fill="#E8762D" />
          <circle cx="16" cy="10" r="1.3" fill="#E8762D" />
          <circle cx="5.8" cy="5.8" r="1" fill="#4E79A7" />
          <circle cx="14.2" cy="5.8" r="1" fill="#F28E2B" />
          <circle cx="5.8" cy="14.2" r="1" fill="#59A14F" />
          <circle cx="14.2" cy="14.2" r="1" fill="#E15759" />
        </svg>
      );

    case 'Advanced Excel':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="1.5" y="1.5" width="17" height="17" rx="3" fill="#107C41" />
          <path d="M5.5 5.5L8.5 10L5.5 14.5H7.5L9.5 11.2L11.5 14.5H13.5L10.5 10L13.5 5.5H11.5L9.5 8.8L7.5 5.5H5.5Z" fill="#FFFFFF" />
        </svg>
      );

    case 'Salesforce':
      return (
        <svg width={size * 1.2} height={size} viewBox="0 0 24 18" fill="none">
          <path d="M9.5 4.5C10.7 3.3 12.5 3 14 3.5C15.5 4 16.5 5.3 16.7 6.8C18.2 7.1 19.5 8.4 19.5 10C19.5 11.8 18 13.3 16.2 13.3H6.5C4.8 13.3 3.5 12 3.5 10.3C3.5 8.8 4.6 7.6 6 7.3C6.4 5.7 7.8 4.6 9.5 4.5Z" fill="#00A1E0" />
        </svg>
      );

    case 'CargoWise Certified':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8.5" fill="#002F6C" />
          <path d="M5 10C5 7.2 7.2 5 10 5C11.8 5 13.4 6 14.2 7.5L12.2 8.7C11.7 7.9 10.9 7.4 10 7.4C8.5 7.4 7.4 8.5 7.4 10C7.4 11.5 8.5 12.6 10 12.6C10.9 12.6 11.7 12.1 12.2 11.3L14.2 12.5C13.4 14 11.8 15 10 15C7.2 15 5 12.8 5 10Z" fill="#F58220" />
        </svg>
      );

    case 'Tally Prime':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="2" y="3" width="16" height="14" rx="3" fill="#D32F2F" />
          <path d="M5 7H15V9H11.5V14H8.5V9H5V7Z" fill="#FFFFFF" />
          <circle cx="15" cy="5.5" r="1.5" fill="#FBC02D" />
        </svg>
      );

    case 'Artificial Intelligence':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="3.5" y="3.5" width="13" height="13" rx="3" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="2.2" fill="#A855F7" />
          <path d="M10 1.5V3.5M10 16.5V18.5M1.5 10H3.5M16.5 10H18.5" stroke="#C084FC" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    // --- Key Skills Visual Badges (FP&A) ---
    case 'Financial Planning & Analysis':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path d="M3 17V3M3 17H17M6 13L10 8L13 11L17 5" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Budgeting & Forecasting':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M10 6V10L13 12" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'Variance Analysis':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path d="M4 14L8 6L12 12L16 4" stroke="#F43F5E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="4" r="1.5" fill="#F43F5E" />
        </svg>
      );

    case 'Fundraising':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path d="M10 2L12.5 7H18L13.5 10.5L15 16L10 12.5L5 16L6.5 10.5L2 7H7.5L10 2Z" fill="#FBBF24" />
        </svg>
      );

    case 'Working Capital':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <circle cx="7" cy="10" r="5" stroke="#34D399" strokeWidth="1.5" />
          <circle cx="13" cy="10" r="5" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );

    case 'KPI Dashboards':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="3" y="3" width="6" height="6" rx="1.5" fill="#818CF8" />
          <rect x="11" y="3" width="6" height="6" rx="1.5" fill="#38BDF8" />
          <rect x="3" y="11" width="6" height="6" rx="1.5" fill="#34D399" />
          <rect x="11" y="11" width="6" height="6" rx="1.5" fill="#FBBF24" />
        </svg>
      );

    case 'Business Partnering':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path d="M6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8ZM14 8C15.1 8 16 7.1 16 6C16 4.9 15.1 4 14 4C12.9 4 12 4.9 12 6C12 7.1 12.9 8 14 8ZM6 10C4 10 0 11.1 0 13.1V15H12V13.1C12 11.1 8 10 6 10ZM14 10C13.7 10 13.3 10.1 12.8 10.2C13.6 10.9 14 11.9 14 13.1V15H20V13.1C20 11.1 16 10 14 10Z" fill="#A78BFA" />
        </svg>
      );

    case 'Investor Relations':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="3" y="5" width="14" height="11" rx="2" stroke="#60A5FA" strokeWidth="1.5" />
          <path d="M7 5V3.5C7 2.7 7.7 2 8.5 2H11.5C12.3 2 13 2.7 13 3.5V5" stroke="#60A5FA" strokeWidth="1.5" />
        </svg>
      );

    // --- Key Skills Visual Badges (Controlling & Governance) ---
    case 'Ind-AS / IFRS':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M2.5 10H17.5M10 2.5C12 4.5 13 7.2 13 10C13 12.8 12 15.5 10 17.5M10 2.5C8 4.5 7 7.2 7 10C7 12.8 8 15.5 10 17.5" stroke="#38BDF8" strokeWidth="1.2" />
        </svg>
      );

    case 'ICFR Framework':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path d="M10 2L3 5.5V10C3 14.5 6 17.5 10 18.5C14 17.5 17 14.5 17 10V5.5L10 2Z" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1.5" />
          <path d="M7.5 10L9 11.5L12.5 8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Financial Reporting':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="4" y="2" width="12" height="16" rx="2" stroke="#818CF8" strokeWidth="1.5" />
          <path d="M7 6H13M7 10H13M7 14H10" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'Consolidation':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="#A78BFA" strokeWidth="1.4" />
          <rect x="12" y="2" width="6" height="6" rx="1.5" stroke="#A78BFA" strokeWidth="1.4" />
          <rect x="7" y="12" width="6" height="6" rx="1.5" fill="#A78BFA" />
          <path d="M5 8V10H15V8M10 10V12" stroke="#A78BFA" strokeWidth="1.4" />
        </svg>
      );

    case 'Cross Charge':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path d="M14 4L18 8L14 12M18 8H6C4.3 8 3 9.3 3 11M6 16L2 12L6 8M2 12H14C15.7 12 17 10.7 17 9" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Statutory & Tax Audit':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7" stroke="#F59E0B" strokeWidth="1.5" />
          <path d="M8 10L9.5 11.5L12.5 8.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'ESOP Buyback':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" strokeWidth="1.4" />
          <text x="10" y="14" fill="#F59E0B" fontSize="11" fontWeight="800" textAnchor="middle">₹</text>
        </svg>
      );

    case 'Internal Audit':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="5.5" stroke="#60A5FA" strokeWidth="1.5" />
          <path d="M13.5 13.5L17 17" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'GST Compliance':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <rect x="3" y="3" width="14" height="14" rx="3" stroke="#10B981" strokeWidth="1.5" />
          <path d="M7 10L9 12L13 7" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Transfer Pricing':
      return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path d="M3 10C3 6.1 6.1 3 10 3M17 10C17 13.9 13.9 17 10 17" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 2L10 3L8 4M12 16L10 17L12 18" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="10" r="3" fill="#38BDF8" />
        </svg>
      );

    default:
      return null;
  }
};

export default SkillIcon;
