import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface Scene5Props {
  quarterText: string;
}

export const Scene5Closing: React.FC<Scene5Props> = ({ quarterText }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Offset from start of scene (starts at frame 450)
  const relFrame = Math.max(0, frame - 450);

  const fadeIn = interpolate(frame, [450, 465], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardSpring = spring({ frame: relFrame - 5, fps, config: { damping: 14, stiffness: 100 } });

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
        alignItems: "center",
        textAlign: "center",
        opacity: fadeIn,
        fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(15, 23, 42, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 32,
          padding: "48px 60px",
          maxWidth: 960,
          boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          backdropFilter: "blur(24px)",
          transform: `scale(${cardSpring}) translateY(${(1 - cardSpring) * 30}px)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow behind card */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
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
            marginBottom: 20,
          }}
        >
          <span>🎯</span>
          <span>EXECUTIVE SUMMARY &amp; NEXT STEPS</span>
        </div>

        <h2
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            margin: "0 0 16px 0",
            lineHeight: 1.15,
          }}
        >
          Poised for Accelerated Q4 Scale
        </h2>

        <p
          style={{
            fontSize: 20,
            color: "rgba(226, 232, 240, 0.8)",
            margin: "0 0 32px 0",
            lineHeight: 1.5,
          }}
        >
          With record profitability, high net retention, and strong cash runway, {quarterText} results place us in an optimal position for strategic market expansion.
        </p>

        {/* 3 Summary Badges */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              padding: "16px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>ANNUAL GUIDANCE</div>
            <div style={{ fontSize: 20, color: "#10B981", fontWeight: 800, marginTop: 4 }}>Raised to $165M</div>
          </div>
          <div
            style={{
              padding: "16px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>OPERATING CASH</div>
            <div style={{ fontSize: 20, color: "#06B6D4", fontWeight: 800, marginTop: 4 }}>$86.4M Reserve</div>
          </div>
          <div
            style={{
              padding: "16px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>BOARD ACTION</div>
            <div style={{ fontSize: 20, color: "#A855F7", fontWeight: 800, marginTop: 4 }}>Approve Q4 Plan</div>
          </div>
        </div>

        {/* Q&A Invite CTA */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "16px 36px",
            borderRadius: 50,
            background: "linear-gradient(135deg, #10B981, #06B6D4)",
            color: "#040D18",
            fontWeight: 800,
            fontSize: 18,
            boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
          }}
        >
          <span>🎙️ Open for Management Discussion &amp; Q&amp;A</span>
        </div>
      </div>
    </div>
  );
};
