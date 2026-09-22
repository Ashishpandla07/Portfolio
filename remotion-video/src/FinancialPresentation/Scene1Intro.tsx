import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface Scene1Props {
  quarterText: string;
  companyName: string;
}

export const Scene1Intro: React.FC<Scene1Props> = ({
  quarterText,
  companyName,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations
  const titleSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const subtitleSpring = spring({
    frame: frame - 22,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const badgeSpring = spring({
    frame: frame - 32,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // Scene fade out
  const opacity = interpolate(frame, [85, 105], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 105], [0.97, 1.03], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 100,
        bottom: 120,
        left: 60,
        right: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        opacity,
        transform: `scale(${scale})`,
        fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
      }}
    >
      {/* Target Pill */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 24px",
          borderRadius: 30,
          background: "rgba(16, 185, 129, 0.12)",
          border: "1px solid rgba(16, 185, 129, 0.4)",
          color: "#34D399",
          fontWeight: 700,
          fontSize: 16,
          marginBottom: 28,
          boxShadow: "0 0 25px rgba(16, 185, 129, 0.2)",
          transform: `scale(${badgeSpring})`,
          opacity: badgeSpring,
        }}
      >
        <span style={{ fontSize: 18 }}>📈</span>
        <span>EXECUTIVE FINANCIAL UPDATE & MILESTONES</span>
      </div>

      {/* Main Headline */}
      <h1
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          margin: "0 0 24px 0",
          maxWidth: 1100,
          transform: `translateY(${(1 - titleSpring) * 40}px)`,
          opacity: titleSpring,
          textShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {quarterText} Financial Performance &amp; Growth Overview
      </h1>

      {/* Subtitle Details */}
      <p
        style={{
          fontSize: 24,
          color: "rgba(226, 232, 240, 0.8)",
          maxWidth: 820,
          margin: "0 0 36px 0",
          lineHeight: 1.5,
          fontWeight: 400,
          transform: `translateY(${(1 - subtitleSpring) * 30}px)`,
          opacity: subtitleSpring,
        }}
      >
        A comprehensive review of revenue expansion, operational margins, and FY2025 strategic execution for <strong style={{ color: "#38BDF8" }}>{companyName}</strong>.
      </p>

      {/* Quick Summary Highlights Chips */}
      <div
        style={{
          display: "flex",
          gap: 20,
          transform: `translateY(${(1 - badgeSpring) * 20}px)`,
          opacity: badgeSpring,
        }}
      >
        <div
          style={{
            padding: "14px 24px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 16,
            backdropFilter: "blur(12px)",
            color: "#F8FAFC",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          🚀 <span style={{ color: "#10B981", fontWeight: 800 }}>+38.4% YoY</span> Revenue Growth
        </div>
        <div
          style={{
            padding: "14px 24px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 16,
            backdropFilter: "blur(12px)",
            color: "#F8FAFC",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          💰 <span style={{ color: "#38BDF8", fontWeight: 800 }}>78.6%</span> Gross Margin
        </div>
        <div
          style={{
            padding: "14px 24px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 16,
            backdropFilter: "blur(12px)",
            color: "#F8FAFC",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          ✨ <span style={{ color: "#A855F7", fontWeight: 800 }}>Positive</span> Operating Free Cash Flow
        </div>
      </div>
    </div>
  );
};
