import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface PresenterBadgeProps {
  presenterName: string;
  presenterRole: string;
}

export const PresenterBadge: React.FC<PresenterBadgeProps> = ({
  presenterName,
  presenterRole,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Calculate dynamic talking caption based on current frame
  let caption = "";
  if (frame < 105) {
    caption = "Welcome Executive Leadership. Today I'm pleased to share our record-breaking financial results.";
  } else if (frame < 230) {
    caption = "We surpassed our target across all headline metrics, delivering $142.8M in ARR at 78.6% gross margin.";
  } else if (frame < 365) {
    caption = "Quarter-over-quarter expansion accelerated sharply in Q3, outperforming our operating budget by 22%.";
  } else if (frame < 460) {
    caption = "Our unit economics remain elite—Net Dollar Retention reached 118% while CAC payback dropped to 11.2 months.";
  } else {
    caption = "We are operating from a position of financial strength and cash reserves as we enter Q4. Thank you, let's open for Q&A.";
  }

  // Audio equalizer bars
  const bars = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 35,
        left: 60,
        right: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 28px",
        borderRadius: 20,
        background: "rgba(15, 23, 42, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
        transform: `translateY(${(1 - entrance) * 50}px)`,
        opacity: entrance,
        zIndex: 40,
        fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
      }}
    >
      {/* Presenter Profile & Speaking Audio Waves */}
      <div style={{ display: "flex", alignItems: "center", gap: 18, minWidth: 320 }}>
        <div style={{ position: "relative" }}>
          {/* Avatar frame */}
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: 20,
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
            }}
          >
            AM
          </div>
          {/* Active Speaking Indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#10B981",
              border: "2px solid #0B0F19",
              boxShadow: "0 0 8px #10B981",
            }}
          />
        </div>

        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", display: "flex", alignItems: "center", gap: 8 }}>
            <span>{presenterName}</span>
            <span
              style={{
                fontSize: 11,
                padding: "2px 8px",
                borderRadius: 12,
                background: "rgba(59, 130, 246, 0.2)",
                color: "#60A5FA",
                fontWeight: 600,
              }}
            >
              SPEAKING
            </span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
            {presenterRole}
          </div>
        </div>

        {/* Dynamic Voice Waveform Equalizer */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, height: 28, marginLeft: 12 }}>
          {bars.map((bar, i) => {
            const height = interpolate(
              Math.sin((frame * 0.4) + i * 1.3),
              [-1, 1],
              [6, 26]
            );
            return (
              <div
                key={bar}
                style={{
                  width: 3.5,
                  height: `${height}px`,
                  borderRadius: 4,
                  background: "linear-gradient(to top, #10B981, #06B6D4)",
                  transition: "height 0.05s ease",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Real-time Subtitle / Voiceover Transcript */}
      <div
        style={{
          flex: 1,
          marginLeft: 36,
          paddingLeft: 28,
          borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 20 }}>💬</span>
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#E2E8F0",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ color: "#38BDF8", fontWeight: 700 }}>"</span>
          {caption}
          <span style={{ color: "#38BDF8", fontWeight: 700 }}>"</span>
        </div>
      </div>
    </div>
  );
};
