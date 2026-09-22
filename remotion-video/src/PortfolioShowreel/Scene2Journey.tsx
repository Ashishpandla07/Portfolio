import React from "react";
import { interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene2Journey: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - 155);

  const fadeIn = interpolate(frame, [155, 175], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [340, 360], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  const card1Spring = spring({ frame: relFrame - 5, fps, config: { damping: 14, stiffness: 110 } });
  const card2Spring = spring({ frame: relFrame - 18, fps, config: { damping: 14, stiffness: 110 } });
  const card3Spring = spring({ frame: relFrame - 30, fps, config: { damping: 14, stiffness: 110 } });

  const timelineItems = [
    {
      company: "cargo-partner",
      role: "Senior Manager Controlling",
      period: "2023 – Present • 3+ Years",
      type: "Global Freight Forwarding MNC",
      logo: staticFile("images/cargo_partner_logo.webp"),
      highlights: [
        "Head of India entity financial controlling & ICFR.",
        "Ind-AS/IFRS consolidation, transfer pricing, & audits.",
        "ERP integration & automated P&L dashboards.",
      ],
      color: "#10B981",
      spring: card1Spring,
      isCurrent: true,
    },
    {
      company: "CARS24",
      role: "Senior Manager / Manager FP&A",
      period: "2019 – 2023 • 3.8 Years",
      type: "High-Growth Auto-Tech Unicorn",
      logo: staticFile("images/cars24_logo.webp"),
      highlights: [
        "Led 4 promotions from Team Lead to Senior Manager.",
        "Spearheaded annual operating plans, runway & rolling forecasts.",
        "Unit economics, ESOP buybacks & institutional audit readiness.",
      ],
      color: "#06B6D4",
      spring: card2Spring,
      isCurrent: false,
    },
    {
      company: "N K Jain & Co.",
      role: "Audit Executive",
      period: "2019 • 1 Year",
      type: "Chartered Accountancy Firm",
      logo: staticFile("images/ca_logo.png"),
      highlights: [
        "Statutory & internal audits of mid-to-large corporates.",
        "Tax audit compliances, GST filing & ICFR verification.",
      ],
      color: "#8B5CF6",
      spring: card3Spring,
      isCurrent: false,
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
      <div style={{ marginBottom: 26, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: "#10B981",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            SECTION 01 • CAREER PROGRESSION &amp; LEADERSHIP
          </div>
          <h2
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Proven Track Record Across Scale &amp; Complexity
          </h2>
        </div>
        <div
          style={{
            padding: "8px 18px",
            borderRadius: 12,
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            color: "#34D399",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Tech Unicorn + Global MNC Experience
        </div>
      </div>

      {/* 3 Career Milestone Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {timelineItems.map((item) => (
          <div
            key={item.company}
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              border: `1px solid ${item.isCurrent ? "rgba(16, 185, 129, 0.45)" : "rgba(255, 255, 255, 0.1)"}`,
              borderRadius: 24,
              padding: "30px 26px",
              boxShadow: item.isCurrent
                ? "0 20px 40px rgba(16, 185, 129, 0.15)"
                : "0 20px 40px rgba(0,0,0,0.35)",
              backdropFilter: "blur(20px)",
              transform: `translateY(${(1 - item.spring) * 35}px) scale(${0.95 + 0.05 * item.spring})`,
              opacity: item.spring,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 340,
              position: "relative",
            }}
          >
            {/* Top Glow indicator */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${item.color}, transparent)`,
              }}
            />

            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                {/* Real Brand Logo Container */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    padding: 6,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.company}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </div>

                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: "rgba(255, 255, 255, 0.06)",
                    border: `1px solid ${item.color}55`,
                    color: item.color,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {item.period}
                </div>
              </div>

              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF", margin: "0 0 4px 0" }}>
                {item.company}
              </h3>

              <div style={{ fontSize: 15, fontWeight: 700, color: item.color, marginBottom: 4 }}>
                {item.role}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.45)", marginBottom: 14 }}>
                {item.type}
              </div>

              {/* Bullet points */}
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {item.highlights.map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.35 }}>
                    <span style={{ color: item.color }}>•</span>
                    <span>{point}</span>
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
