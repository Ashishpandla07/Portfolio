import React from "react";
import cars24Logo from "../assets/images/cars24_logo.webp";
import cargoPartnerLogo from "../assets/images/cargo_partner_logo.webp";
import "../assets/styles/Timeline.scss";

interface Position {
  title: string;
  period: string;
  duration: string;
}

interface CompanyExperience {
  id: string;
  company: string;
  logo: string;
  employmentType: string;
  totalDuration: string;
  location: string;
  workMode?: string;
  positions: Position[];
}

const EXPERIENCE_DATA: CompanyExperience[] = [
  {
    id: "cars24",
    company: "CARS24",
    logo: cars24Logo,
    employmentType: "Full-time",
    totalDuration: "4 yrs 5 mos",
    location: "Gurugram, Haryana, India",
    workMode: "On-site",
    positions: [
      {
        title: "Lead - Financial Planning & Controlling",
        period: "Apr 2024 - Present",
        duration: "1 yr 12 mos"
      },
      {
        title: "Lead - Strategic Finance & Commercial Partnering",
        period: "Apr 2023 - Mar 2024",
        duration: "1 yr"
      },
      {
        title: "Senior Manager - Financial Planning & Controlling",
        period: "Nov 2021 - Mar 2023",
        duration: "1 yr 5 mos"
      }
    ]
  },
  {
    id: "cargo-partner",
    company: "cargo-partner",
    logo: cargoPartnerLogo,
    employmentType: "Full-time",
    totalDuration: "3 yrs 3 mos",
    location: "Gurugram, Haryana, India",
    workMode: "On-site",
    positions: [
      {
        title: "Assistant Manager - Financial Controlling & Accounting",
        period: "Sep 2018 - Nov 2021",
        duration: "3 yrs 3 mos"
      }
    ]
  }
];

function Timeline() {
  return (
    <div className="timeline-container" id="history">
      <div className="timeline-content">
        <div className="section-header">
          <h2>Experience</h2>
        </div>

        <div className="experience-card-wrapper">
          {EXPERIENCE_DATA.map((company, cIdx) => (
            <div key={company.id} className="company-group">
              {/* Company Logo Box */}
              <div className="company-logo-col">
                <div className="logo-box">
                  <img
                    src={company.logo}
                    srcSet={`${company.logo} 1x`}
                    alt={company.company}
                    className="logo-img-full"
                    width={48}
                    height={48}
                    fetchPriority={company.company === "cargo-partner" ? "high" : "auto"}
                    loading={company.company === "cargo-partner" ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              </div>

              {/* Company & Positions Info */}
              <div className="company-details-col">
                <div className="company-header">
                  <h3 className="company-name">{company.company}</h3>
                  <div className="company-meta">
                    <span>{company.employmentType}</span>
                    <span className="bullet-sep">·</span>
                    <span>{company.totalDuration}</span>
                  </div>
                  <div className="company-location">
                    <span>{company.location}</span>
                    {company.workMode && (
                      <>
                        <span className="bullet-sep">·</span>
                        <span>{company.workMode}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Vertical Positions Timeline */}
                <div className={`positions-timeline ${company.positions.length > 1 ? 'has-multiple-roles' : ''}`}>
                  {company.positions.map((pos, pIdx) => (
                    <div key={pIdx} className="position-item">
                      {company.positions.length > 1 && <span className="timeline-node" />}
                      <div className="position-details">
                        <h4 className="position-title">{pos.title}</h4>
                        <div className="position-period">
                          <span>{pos.period}</span>
                          <span className="bullet-sep">·</span>
                          <span>{pos.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {cIdx < EXPERIENCE_DATA.length - 1 && <div className="company-divider" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;