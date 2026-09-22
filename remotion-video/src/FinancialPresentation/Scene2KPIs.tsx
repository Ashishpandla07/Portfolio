import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Scene2KPIs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset from start of scene (starts at frame 95)
  const relFrame = Math.max(0, frame - 95);

  // Scene transitions
  const fadeIn = interpolate(frame, [95, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [210, 230], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  // Animated Numbers counting up
  const countProgress = interpolate(relFrame, [10, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const revenueVal = (countProgress * 142.8).toFixed(1);
  const marginVal = (countProgress * 78.6).toFixed(1);
  const cashFlowVal = (countProgress * 34.2).toFixed(1);
  const ebitdaVal = (countProgress * 24.5).toFixed(1);

  const cardSpring1 = spring({ frame: relFrame - 5, fps, config: { damping: 14, stiffness: 120 } });
  const cardSpring2 = spring({ frame: relFrame - 15, fps, config: { damping: 14, stiffness: 120 } });
  const cardSpring3 = spring({ frame: relFrame - 25, fps, config: { damping: 14, stiffness: 120 } });
  const cardSpring4 = spring({ frame: relFrame - 35, fps, config: { damping: 14, stiffness: 120 } });

  const kpiCards = [
    {
      label: "Annual Recurring Revenue (ARR)",
      value: `$${revenueVal}M`,
      change: "+38.4% YoY",
      subtext: "Guidance beaten by $6.8M",
      isPositive: true,
      color: "#10B981",
      icon: "💎",
      springVal: cardSpring1,
    },
    {
      label: "Gross Profit Margin",
      value: `${marginVal}%`,
      change: "+420 bps",
      subtext: "Cloud infrastructure optimization",
      isPositive: true,
      color: "#06B6D4",
      icon: "📊",
      springVal: cardSpring2,
    },
    {
      label: "Operating Free Cash Flow",
      value: `$${cashFlowVal}M`,
      change: "+52.1% YoY",
      subtext: "Cash conversion rate 94%",
      isPositive: true,
      color: "#8B5CF6",
      icon: "⚡",
      springVal: cardSpring3,
    },
    {
      label: "Adjusted EBITDA Margin",
      value: `${ebitdaVal}%`,
      change: "+680 bps",
      subtext: "5th straight profitable quarter",
      isPositive: true,
      color: "#F59E0B",
      icon: "🎯",
      springVal: cardSpring4,
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
      {/* Header section */}
      <div style={{ marginBottom: 30, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
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
            SECTION 01 • EXECUTIVE FINANCIAL DASHBOARD
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
            Headline Performance &amp; Key Metrics
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
          ✓ 100% Targets Exceeded
        </div>
      </div>

      {/* 4 Grid Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
      >
        {kpiCards.map((card, i) => (
          <div
            key={card.label}
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 24,
              padding: "32px 28px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              backdropFilter: "blur(20px)",
              transform: `translateY(${(1 - card.springVal) * 35}px) scale(${0.95 + 0.05 * card.springVal})`,
              opacity: card.springVal,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 310,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Accent Line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${card.color}, transparent)`,
              }}
            />

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
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
                  {card.icon}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "4px 10px",
                    borderRadius: 20,
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "#34D399",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  <span>▲</span>
                  <span>{card.change}</span>
                </div>
              </div>

              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.65)",
                  lineHeight: 1.3,
                  marginBottom: 14,
                }}
              >
                {card.label}
              </div>

              <div
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  fontVariantNumeric: "tabular-nums",
                  fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                }}
              >
                {card.value}
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.07)",
                paddingTop: 14,
                fontSize: 13,
                color: "rgba(255, 255, 255, 0.5)",
                fontWeight: 500,
              }}
            >
              {card.subtext}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
