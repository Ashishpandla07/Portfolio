import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface TopNavigationProps {
  companyName: string;
  quarterText: string;
  totalFrames: number;
}

const SECTIONS = [
  { name: "Executive Briefing", endFrame: 105 },
  { name: "Headline KPIs", endFrame: 230 },
  { name: "Quarterly Trajectory", endFrame: 365 },
  { name: "Unit Economics", endFrame: 460 },
  { name: "Outlook & Q&A", endFrame: 540 },
];

export const TopNavigation: React.FC<TopNavigationProps> = ({
  companyName,
  quarterText,
  totalFrames,
}) => {
  const frame = useCurrentFrame();

  const progressPercent = Math.min(100, (frame / totalFrames) * 100);

  // Active section index
  let activeSectionIndex = 0;
  for (let i = 0; i < SECTIONS.length; i++) {
    if (frame <= SECTIONS[i].endFrame) {
      activeSectionIndex = i;
      break;
    }
  }

  // Pulsing recording dot
  const livePulse = interpolate(Math.sin(frame / 10), [-1, 1], [0.4, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        padding: "0 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 50,
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px)",
        background: "rgba(11, 16, 28, 0.7)",
        fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
      }}
    >
      {/* Company Brand Logo & Quarter */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
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
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 17L9 11L13 15L21 7M21 7H15M21 7V13"
              stroke="#040B14"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span>{companyName}</span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#10B981",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                padding: "2px 8px",
                borderRadius: 20,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {quarterText}
            </span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>
            Board of Directors & Management Briefing
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

      {/* Live Badge & Time Indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 20,
            background: "rgba(239, 68, 68, 0.12)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#EF4444",
              opacity: livePulse,
              boxShadow: "0 0 8px #EF4444",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#EF4444",
              letterSpacing: "0.1em",
            }}
          >
            CONFIDENTIAL
          </span>
        </div>
      </div>

      {/* Animated Top Progress Line */}
      <div
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          width: `${progressPercent}%`,
          height: 3,
          background: "linear-gradient(90deg, #10B981, #06B6D4, #6366F1)",
          boxShadow: "0 0 12px rgba(6, 182, 212, 0.8)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};
