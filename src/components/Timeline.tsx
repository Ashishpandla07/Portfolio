import React from "react";
import cars24Logo from "../assets/images/cars24_logo.png";
import cargoPartnerLogo from "../assets/images/cargo_partner_logo.jpg";
import caLogo from "../assets/images/ca_logo.png";
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
    id: "cargo-partner",
    company: "cargo-partner",
    logo: cargoPartnerLogo,
    employmentType: "Full-time",
    totalDuration: "3 yrs 2 mos",
    location: "Gurugram, Haryana, India",
    workMode: "Hybrid",
    positions: [
      {
        title: "Senior Manager Controlling",
        period: "Apr 2026 – Present",
        duration: "6 mos"
      },
      {
        title: "Manager Controlling",
        period: "Aug 2023 – Mar 2026",
        duration: "2 yrs 8 mos"
      }
    ]
  },
  {
    id: "cars24",
    company: "CARS24",
    logo: cars24Logo,
    employmentType: "Full-time",
    totalDuration: "3 yrs 9 mos",
    location: "Gurugram, Haryana, India",
    positions: [
      {
        title: "Senior Manager",
        period: "Apr 2023 – Aug 2023",
        duration: "5 mos"
      },
      {
        title: "Manager",
        period: "Apr 2022 – Mar 2023",
        duration: "1 yr"
      },
      {
        title: "Assistant Manager",
        period: "Apr 2021 – Mar 2022",
        duration: "1 yr"
      },
      {
        title: "Team Lead",
        period: "Dec 2019 – Mar 2021",
        duration: "1 yr 4 mos"
      }
    ]
  },
  {
    id: "nk-jain",
    company: "N K Jain & Co.",
    logo: caLogo,
    employmentType: "Full-time",
    totalDuration: "1 yr",
    location: "Gurugram, Haryana, India",
    positions: [
      {
        title: "Audit Executive",
        period: "Jan 2019 – Dec 2019",
        duration: "1 yr"
      }
    ]
  }
];

function Timeline() {
  return (
    <div id="history">
      <div className="linkedin-experience-container">
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
                    alt={company.company}
                    className="logo-img-full"
                    fetchPriority="high"
                    loading="eager"
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