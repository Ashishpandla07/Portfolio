import React from 'react';

interface TechLogoProps {
  name: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, size = 20 }) => {
  switch (name) {
    case 'SAP S/4HANA':
    case 'SAP B1':
      return (
        <svg width={size} height={size} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="24" rx="4" fill="#0070F2" />
          <text x="20" y="16.5" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="Arial, sans-serif" textAnchor="middle" letterSpacing="1">SAP</text>
        </svg>
      );

    case 'Power BI':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="11" width="4.5" height="10" rx="1.5" fill="#E6AD10" />
          <rect x="8" y="7" width="4.5" height="14" rx="1.5" fill="#F2C811" />
          <rect x="14" y="3" width="4.5" height="18" rx="1.5" fill="#D99208" />
        </svg>
      );

    case 'Tableau':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2.2" fill="#E8762D" />
          <circle cx="12" cy="5" r="1.6" fill="#1F4570" />
          <circle cx="12" cy="19" r="1.6" fill="#1F4570" />
          <circle cx="5" cy="12" r="1.6" fill="#E8762D" />
          <circle cx="19" cy="12" r="1.6" fill="#E8762D" />
          <circle cx="7.2" cy="7.2" r="1.2" fill="#4E79A7" />
          <circle cx="16.8" cy="7.2" r="1.2" fill="#F28E2B" />
          <circle cx="7.2" cy="16.8" r="1.2" fill="#59A14F" />
          <circle cx="16.8" cy="16.8" r="1.2" fill="#E15759" />
        </svg>
      );

    case 'Advanced Excel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#107C41" />
          <path d="M7 6.5L10.5 12L7 17.5H9.2L11.5 13.5L13.8 17.5H16L12.5 12L16 6.5H13.8L11.5 10.5L9.2 6.5H7Z" fill="#FFFFFF" />
        </svg>
      );

    case 'Salesforce':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5.5C11.3 4.2 13.2 3.8 14.9 4.4C16.6 5 17.8 6.5 18 8.3C19.7 8.6 21 10.1 21 11.9C21 14 19.3 15.7 17.2 15.7H6.5C4.6 15.7 3 14.1 3 12.2C3 10.5 4.2 9.1 5.9 8.8C6.3 6.9 8 5.6 10 5.5Z" fill="#00A1E0" />
        </svg>
      );

    case 'CargoWise Certified':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#002F6C" />
          <path d="M6 12C6 8.7 8.7 6 12 6C14.2 6 16.1 7.2 17.1 9L14.7 10.4C14.1 9.4 13.1 8.8 12 8.8C10.2 8.8 8.8 10.2 8.8 12C8.8 13.8 10.2 15.2 12 15.2C13.1 15.2 14.1 14.6 14.7 13.6L17.1 15C16.1 16.8 14.2 18 12 18C8.7 18 6 15.3 6 12Z" fill="#F58220" />
        </svg>
      );

    case 'Tally Prime':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="18" rx="4" fill="#D32F2F" />
          <path d="M6 8H18V10.5H13.5V17H10.5V10.5H6V8Z" fill="#FFFFFF" />
          <circle cx="18" cy="6" r="2" fill="#FBC02D" />
        </svg>
      );

    case 'Artificial Intelligence':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="#A855F7" />
          <path d="M12 2V4M12 20V22M2 12H4M20 12H22M6 6L7.5 7.5M16.5 16.5L18 18M6 18L7.5 16.5M16.5 7.5L18 6" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
};

export default TechLogo;
