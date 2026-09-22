import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene4Efficiency: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset from start of scene (starts at frame 355)
  const relFrame = Math.max(0, frame - 355);

  // Transitions
  const fadeIn = interpolate(frame, [355, 375], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [440, 460], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  const sp1 = spring({ frame: relFrame - 5, fps, config: { damping: 14, stiffness: 110 } });
  const sp2 = spring({ frame: relFrame - 15, fps, config: { damping: 14, stiffness: 110 } });
  const sp3 = spring({ frame: relFrame - 25, fps, config: { damping: 14, stiffness: 110 } });

  const metrics = [
    {
      title: "Net Dollar Retention (NDR)",
      metric: "118%",
      badge: "Top 5% SaaS Benchmark",
      badgeColor: "#10B981",
      description: "Organic account expansion from existing Fortune 500 cohorts with minimal churn (<0.8%).",
      icon: "💎",
      spring: sp1,
    },
    {
      title: "CAC Payback Period",
      metric: "11.2 Mo",
      badge: "-32% Efficiency Gain",
      badgeColor: "#06B6D4",
      description: "Reduced from 16.5 months via automated sales funnels and strong inbound product-led loops.",
      icon: "⚡",
      spring: sp2,
    },
    {
      title: "Cash Balance & Liquidity",
      metric: "$86.4M",
      badge: "Zero Debt / Fully Funded",
      badgeColor: "#8B5CF6",
      description: "Robust balance sheet providing 36+ months of operating runway with self-sustaining cash flows.",
      icon: "🛡️",
      spring: sp3,
    },
  ];

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
              color: "#8B5CF6",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            SECTION 03 • UNIT ECONOMICS &amp; CAPITAL EFFICIENCY
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
            World-Class Capital Efficiency &amp; Retention
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
          Rule of 40 Score: 62.9%
        </div>
      </div>

      {/* 3 Pillars */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
        }}
      >
        {metrics.map((item) => (
          <div
            key={item.title}
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 24,
              padding: "36px 32px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              backdropFilter: "blur(20px)",
              transform: `translateY(${(1 - item.spring) * 35}px) scale(${0.95 + 0.05 * item.spring})`,
              opacity: item.spring,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 310,
              position: "relative",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${item.badgeColor}66`,
                    color: item.badgeColor,
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  {item.badge}
                </div>
              </div>

              <div style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                {item.title}
              </div>

              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                }}
              >
                {item.metric}
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: 16,
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.4,
              }}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
