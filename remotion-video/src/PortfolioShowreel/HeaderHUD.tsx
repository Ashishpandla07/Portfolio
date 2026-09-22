import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface HeaderHUDProps {
  name: string;
  totalFrames: number;
}

const SECTIONS = [
  { name: "Executive Profile", endFrame: 165 },
  { name: "Career Journey", endFrame: 360 },
  { name: "Core Expertise", endFrame: 585 },
  { name: "Delivered Impact", endFrame: 765 },
  { name: "Get in Touch", endFrame: 900 },
];

export const HeaderHUD: React.FC<HeaderHUDProps> = ({ name, totalFrames }) => {
  const frame = useCurrentFrame();

  const progressPercent = Math.min(100, (frame / totalFrames) * 100);

  let activeSectionIndex = 0;
  for (let i = 0; i < SECTIONS.length; i++) {
    if (frame <= SECTIONS[i].endFrame) {
      activeSectionIndex = i;
      break;
    }
  }

  const liveDot = interpolate(Math.sin(frame / 12), [-1, 1], [0.3, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 95,
        padding: "0 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 50,
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px)",
        background: "rgba(11, 16, 28, 0.75)",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* Brand & Title */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "linear-gradient(135deg, #10B981, #06B6D4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(16, 185, 129, 0.35)",
            color: "#05111F",
            fontWeight: 900,
            fontSize: 20,
          }}
        >
          CA
        </div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF", display: "flex", alignItems: "center", gap: 10 }}>
            <span>{name}</span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#34D399",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                padding: "2px 8px",
                borderRadius: 20,
                textTransform: "uppercase",
              }}
            >
              8+ Yrs Experience
            </span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>
            Chartered Accountant &amp; Senior Finance Leader
          </div>
        </div>
      </div>

      {/* Breadcrumb Steps */}
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {SECTIONS.map((sec, idx) => {
          const isActive = idx === activeSectionIndex;
          const isCompleted = idx < activeSectionIndex;
          return (
            <div
              key={sec.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: isActive ? 700 : 500,
                color: isActive
                  ? "#FFFFFF"
                  : isCompleted
                  ? "rgba(16, 185, 129, 0.9)"
                  : "rgba(255, 255, 255, 0.35)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: isActive
                    ? "#06B6D4"
                    : isCompleted
                    ? "#10B981"
                    : "rgba(255, 255, 255, 0.2)",
                  boxShadow: isActive ? "0 0 10px #06B6D4" : "none",
                }}
              />
              <span>{sec.name}</span>
            </div>
          );
        })}
      </div>

      {/* Showreel Badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 20,
            background: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#10B981",
              opacity: liveDot,
              boxShadow: "0 0 8px #10B981",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#34D399",
              letterSpacing: "0.08em",
            }}
          >
            EXECUTIVE SHOWREEL
          </span>
        </div>
      </div>

      {/* Top Progress Line */}
      <div
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          width: `${progressPercent}%`,
          height: 3,
          background: "linear-gradient(90deg, #10B981, #06B6D4, #6366F1)",
          boxShadow: "0 0 12px rgba(6, 182, 212, 0.8)",
          transition: "width 0.05s linear",
        }}
      />
    </div>
  );
};
