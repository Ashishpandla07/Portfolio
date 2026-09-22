import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene3Expertise: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - 350);

  const fadeIn = interpolate(frame, [350, 370], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [565, 585], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  const sp1 = spring({ frame: relFrame - 5, fps, config: { damping: 14, stiffness: 110 } });
  const sp2 = spring({ frame: relFrame - 18, fps, config: { damping: 14, stiffness: 110 } });
  const sp3 = spring({ frame: relFrame - 30, fps, config: { damping: 14, stiffness: 110 } });

  const expertisePillars = [
    {
      title: "Strategic Finance & FP&A",
      tag: "Business Co-Pilot",
      color: "#10B981",
      icon: "📊",
      skills: ["Annual Operating Plans", "Rolling Forecasts", "Driver-Based Models", "Working Capital", "Unit Economics", "Investor Relations"],
      spring: sp1,
    },
    {
      title: "Controlling & Governance",
      tag: "Audit & ICFR",
      color: "#06B6D4",
      icon: "🛡️",
      skills: ["Ind-AS / IFRS Reporting", "Multi-Entity Consolidation", "Statutory & Tax Audit", "Transfer Pricing", "Cross Charge", "GST Compliance"],
      spring: sp2,
    },
    {
      title: "Systems & Automation",
      tag: "Data & Tech Stack",
      color: "#8B5CF6",
      icon: "⚡",
      skills: ["SAP S/4HANA & SAP B1", "CargoWise Certified", "Power BI & Tableau", "Advanced Financial Modeling", "Process Automation", "AI Integration"],
      spring: sp3,
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: 105,
        bottom: 115,
        left: 60,
        right: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        opacity: sceneOpacity,
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: "#06B6D4",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            SECTION 02 • CORE COMPETENCIES &amp; SKILL PILLARS
          </div>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            End-to-End Financial Leadership &amp; Modern Analytics
          </h2>
        </div>
        <div
          style={{
            padding: "8px 18px",
            borderRadius: 12,
            background: "rgba(6, 182, 212, 0.15)",
            border: "1px solid rgba(6, 182, 212, 0.3)",
            color: "#22D3EE",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Institutional Standards + Tech-Driven
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 26,
        }}
      >
        {expertisePillars.map((pillar) => (
          <div
            key={pillar.title}
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 24,
              padding: "32px 28px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              backdropFilter: "blur(20px)",
              transform: `translateY(${(1 - pillar.spring) * 35}px) scale(${0.95 + 0.05 * pillar.spring})`,
              opacity: pillar.spring,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 330,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${pillar.color}, transparent)`,
              }}
            />

            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  {pillar.icon}
                </div>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: "rgba(255, 255, 255, 0.06)",
                    border: `1px solid ${pillar.color}55`,
                    color: pillar.color,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {pillar.tag}
                </div>
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF", margin: "0 0 16px 0" }}>
                {pillar.title}
              </h3>

              {/* Skill chips grid */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {pillar.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 10,
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "#E2E8F0",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
