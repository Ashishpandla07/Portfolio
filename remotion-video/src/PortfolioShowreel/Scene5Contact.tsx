import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface Scene5ContactProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedIn: string;
  portfolioUrl: string;
}

export const Scene5Contact: React.FC<Scene5ContactProps> = ({
  name,
  title,
  email,
  phone,
  linkedIn,
  portfolioUrl,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = Math.max(0, frame - 755);

  const fadeIn = interpolate(frame, [755, 775], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardSpring = spring({ frame: relFrame - 5, fps, config: { damping: 14, stiffness: 100 } });

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
        alignItems: "center",
        textAlign: "center",
        opacity: fadeIn,
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(15, 23, 42, 0.78)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 32,
          padding: "44px 56px",
          maxWidth: 960,
          boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          backdropFilter: "blur(24px)",
          transform: `scale(${cardSpring}) translateY(${(1 - cardSpring) * 30}px)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "25%",
            width: 500,
            height: 300,
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            borderRadius: 30,
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            color: "#34D399",
            fontWeight: 800,
            fontSize: 14,
            marginBottom: 18,
          }}
        >
          <span>🤝</span>
          <span>EXECUTIVE COLLABORATION &amp; LEADERSHIP</span>
        </div>

        <h2
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            margin: "0 0 12px 0",
          }}
        >
          Let's Build &amp; Scale Value Together
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "rgba(226, 232, 240, 0.8)",
            margin: "0 0 28px 0",
            lineHeight: 1.5,
            maxWidth: 780,
          }}
        >
          Open to leadership roles, strategic advisory, and senior FP&amp;A / Controlling mandates. Explore full career dossier and connect directly:
        </p>

        {/* 4 Contact Grid Badges */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              padding: "16px 14px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 20 }}>🌐</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>PORTFOLIO</span>
            <span style={{ fontSize: 13, color: "#34D399", fontWeight: 700 }}>ashishpandla07</span>
          </div>

          <div
            style={{
              padding: "16px 14px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 20 }}>💼</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>LINKEDIN</span>
            <span style={{ fontSize: 13, color: "#38BDF8", fontWeight: 700 }}>/in/ipandla</span>
          </div>

          <div
            style={{
              padding: "16px 14px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 20 }}>✉️</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>EMAIL</span>
            <span style={{ fontSize: 13, color: "#A78BFA", fontWeight: 700 }}>ashishpandla07</span>
          </div>

          <div
            style={{
              padding: "16px 14px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 20 }}>📞</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 700 }}>DIRECT PHONE</span>
            <span style={{ fontSize: 13, color: "#FBBF24", fontWeight: 700 }}>+91 80589 14286</span>
          </div>
        </div>

        {/* Action Button */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 34px",
            borderRadius: 50,
            background: "linear-gradient(135deg, #10B981, #06B6D4)",
            color: "#030A14",
            fontWeight: 800,
            fontSize: 16,
            boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
          }}
        >
          <span>🚀 Visit: ashishpandla07.github.io/Portfolio</span>
        </div>
      </div>
    </div>
  );
};
