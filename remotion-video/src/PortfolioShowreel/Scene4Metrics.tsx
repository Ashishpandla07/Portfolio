import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene4Metrics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - 575);

  const fadeIn = interpolate(frame, [575, 595], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [745, 765], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  // Animated counters
  const countProgress = interpolate(relFrame, [10, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const yearsVal = (countProgress * 8).toFixed(0);
  const budgetVal = (countProgress * 100).toFixed(0);
  const complianceVal = (countProgress * 100).toFixed(0);
  const efficiencyVal = (countProgress * 30).toFixed(0);

  const sp1 = spring({ frame: relFrame - 5, fps, config: { damping: 14, stiffness: 120 } });
  const sp2 = spring({ frame: relFrame - 15, fps, config: { damping: 14, stiffness: 120 } });
  const sp3 = spring({ frame: relFrame - 25, fps, config: { damping: 14, stiffness: 120 } });
  const sp4 = spring({ frame: relFrame - 35, fps, config: { damping: 14, stiffness: 120 } });

  const metrics = [
    {
      label: "Cross-Functional Experience",
      value: `${yearsVal}+ Yrs`,
      badge: "Automotive, Tech & Logistics",
      color: "#10B981",
      icon: "🏆",
      subtext: "From early-stage scaling to global MNC matrix structures.",
      fillPercent: 88,
      spring: sp1,
    },
    {
      label: "Budgetary Governance",
      value: `$${budgetVal}M+`,
      badge: "Annual OPEX & CAPEX",
      color: "#06B6D4",
      icon: "💰",
      subtext: "Driver-based rolling forecasts and variance containment.",
      fillPercent: 94,
      spring: sp2,
    },
    {
      label: "Regulatory & Audit Track Record",
      value: `${complianceVal}%`,
      badge: "Ind-AS, ICFR, GST",
      color: "#8B5CF6",
      icon: "🛡️",
      subtext: "Zero-qualification statutory audit and compliance outcomes.",
      fillPercent: 100,
      spring: sp3,
    },
    {
      label: "Process Automation Gains",
      value: `${efficiencyVal}%+`,
      badge: "ERP & Power BI Workflows",
      color: "#F59E0B",
      icon: "⚡",
      subtext: "Turnaround time reduction across monthly financial close.",
      fillPercent: 82,
      spring: sp4,
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
              color: "#8B5CF6",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            SECTION 03 • TANGIBLE BUSINESS IMPACT &amp; SCALE
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
            Delivering High-Impact Financial Governance &amp; ROI
          </h2>
        </div>
        <div
          style={{
            padding: "8px 18px",
            borderRadius: 12,
            background: "rgba(139, 92, 246, 0.15)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            color: "#C084FC",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Proven Leadership Scorecard
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 22,
        }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 24,
              padding: "28px 24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              backdropFilter: "blur(20px)",
              transform: `translateY(${(1 - m.spring) * 35}px) scale(${0.95 + 0.05 * m.spring})`,
              opacity: m.spring,
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
                background: `linear-gradient(90deg, ${m.color}, transparent)`,
              }}
            />

            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  {m.icon}
                </div>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 20,
                    background: "rgba(255, 255, 255, 0.06)",
                    border: `1px solid ${m.color}55`,
                    color: m.color,
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {m.badge}
                </div>
              </div>

              <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255, 255, 255, 0.65)", marginBottom: 10 }}>
                {m.label}
              </div>

              <div
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                }}
              >
                {m.value}
              </div>

              {/* Progress bar visual indicator */}
              <div
                style={{
                  marginTop: 12,
                  width: "100%",
                  height: 6,
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${m.fillPercent * Math.max(0, m.spring)}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${m.color}, #38BDF8)`,
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.07)",
                paddingTop: 12,
                fontSize: 12,
                color: "rgba(255, 255, 255, 0.55)",
                lineHeight: 1.35,
              }}
            >
              {m.subtext}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
