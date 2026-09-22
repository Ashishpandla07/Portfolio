import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene3Chart: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset from start of scene (starts at frame 220)
  const relFrame = Math.max(0, frame - 220);

  // Transitions
  const fadeIn = interpolate(frame, [220, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [345, 365], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  // Bar chart animation progress
  const barData = [
    { quarter: "Q1 FY25", revenue: 28.5, growth: "+26%", heightPercent: 55, delay: 5, color: "#3B82F6" },
    { quarter: "Q2 FY25", revenue: 33.2, growth: "+32%", heightPercent: 68, delay: 15, color: "#06B6D4" },
    { quarter: "Q3 FY25 (Actual)", revenue: 38.9, growth: "+41%", heightPercent: 84, delay: 25, color: "#10B981", isHighlight: true },
    { quarter: "Q4 FY25 (Forecast)", revenue: 42.2, growth: "+45%", heightPercent: 96, delay: 35, color: "#8B5CF6", isProjected: true },
  ];

  const sideSpring = spring({ frame: relFrame - 10, fps, config: { damping: 14, stiffness: 100 } });

  return (
    <div
      style={{
        position: "absolute",
        top: 110,
        bottom: 120,
        left: 60,
        right: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        opacity: sceneOpacity,
        fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
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
            SECTION 02 • QUARTERLY REVENUE TRAJECTORY
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
            Accelerating Revenue Growth (Quarter-over-Quarter)
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
            <div style={{ width: 12, height: 12, borderRadius: 4, background: "#10B981" }} />
            <span>Closed / Actuals</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
            <div style={{ width: 12, height: 12, borderRadius: 4, background: "#8B5CF6" }} />
            <span>Projected</span>
          </div>
        </div>
      </div>

      {/* Main Content: Chart on left + Insights card on right */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32, height: 350 }}>
        {/* Animated Bar Chart Card */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 24,
            padding: "36px 40px 24px 40px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Chart Grid Lines */}
          <div
            style={{
              position: "absolute",
              top: 50,
              left: 40,
              right: 40,
              bottom: 65,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {[45, 30, 15, 0].map((val) => (
              <div
                key={val}
                style={{
                  borderBottom: "1px dashed rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.25)",
                  paddingBottom: 2,
                }}
              >
                ${val}M
              </div>
            ))}
          </div>

          {/* Bars Container */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-end",
              flex: 1,
              zIndex: 2,
              paddingBottom: 15,
            }}
          >
            {barData.map((bar) => {
              const barSpring = spring({
                frame: relFrame - bar.delay,
                fps,
                config: { damping: 14, stiffness: 90 },
              });

              const currentHeight = (bar.heightPercent * Math.max(0, barSpring));

              return (
                <div
                  key={bar.quarter}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 110,
                  }}
                >
                  {/* Floating Number Bubble */}
                  <div
                    style={{
                      transform: `translateY(${(1 - barSpring) * 20}px)`,
                      opacity: barSpring,
                      marginBottom: 10,
                      background: bar.isHighlight
                        ? "rgba(16, 185, 129, 0.2)"
                        : "rgba(255, 255, 255, 0.08)",
                      border: `1px solid ${bar.isHighlight ? "rgba(16, 185, 129, 0.5)" : "rgba(255, 255, 255, 0.15)"}`,
                      padding: "4px 10px",
                      borderRadius: 12,
                      fontSize: 14,
                      fontWeight: 800,
                      color: bar.isHighlight ? "#34D399" : "#FFFFFF",
                      textAlign: "center",
                      boxShadow: bar.isHighlight ? "0 0 15px rgba(16, 185, 129, 0.3)" : "none",
                    }}
                  >
                    ${bar.revenue}M
                  </div>

                  {/* Visual Bar */}
                  <div
                    style={{
                      width: "100%",
                      height: `${(currentHeight / 100) * 190}px`,
                      borderRadius: "14px 14px 4px 4px",
                      background: bar.isHighlight
                        ? "linear-gradient(to top, #10B981, #06B6D4)"
                        : bar.isProjected
                        ? "linear-gradient(to top, rgba(139, 92, 246, 0.5), #8B5CF6)"
                        : `linear-gradient(to top, rgba(59, 130, 246, 0.4), ${bar.color})`,
                      boxShadow: bar.isHighlight
                        ? "0 0 25px rgba(16, 185, 129, 0.4)"
                        : "none",
                      border: bar.isProjected ? "2px dashed #A78BFA" : "none",
                    }}
                  />

                  {/* Quarter Label */}
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 13,
                      fontWeight: bar.isHighlight ? 800 : 600,
                      color: bar.isHighlight ? "#34D399" : "rgba(255, 255, 255, 0.7)",
                      textAlign: "center",
                    }}
                  >
                    {bar.quarter}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Key Insights Box */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 24,
            padding: "32px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transform: `translateX(${(1 - sideSpring) * 30}px)`,
            opacity: sideSpring,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "4px 12px",
                borderRadius: 20,
                background: "rgba(6, 182, 212, 0.15)",
                color: "#22D3EE",
                fontSize: 12,
                fontWeight: 800,
                marginBottom: 16,
              }}
            >
              KEY GROWTH DRIVERS
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF", margin: "0 0 16px 0" }}>
              Enterprise Momentum
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ color: "#10B981", fontSize: 16 }}>✔</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>
                  <strong>+22% beat</strong> over Q3 Board baseline projections.
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ color: "#10B981", fontSize: 16 }}>✔</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>
                  <strong>ACV expanded 34%</strong> among Tier-1 enterprise clients.
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ color: "#10B981", fontSize: 16 }}>✔</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>
                  <strong>Q4 Pipeline</strong> at historic peak of $58.4M.
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "14px 18px",
              borderRadius: 16,
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15))",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>FY25 Target Completion</span>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#10B981" }}>108.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
