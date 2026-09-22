import React from "react";
import { interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

interface PresenterHUDProps {
  name: string;
  title: string;
}

export const PresenterHUD: React.FC<PresenterHUDProps> = ({ name, title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Exact transcript matching your voice recording
  let caption = "";
  if (frame < 165) {
    caption = "Hi, I am Ashish Pandla, Chartered Accountant and Senior Finance Leader with over 8 years of experience.";
  } else if (frame < 360) {
    caption = "From scaling finance at unicorn CARS24 to leading global controlling at cargo-partner...";
  } else if (frame < 585) {
    caption = "I drive strategic FP&A, Ind-AS compliances, and ERP automation.";
  } else if (frame < 765) {
    caption = "Delivering optimized cash flow and boardroom-ready intelligence.";
  } else {
    caption = "Let's connect for creating long-lasting financial value together. Thank you.";
  }

  const bars = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 28,
        left: 60,
        right: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px",
        borderRadius: 20,
        background: "rgba(15, 23, 42, 0.84)",
        border: "1px solid rgba(255, 255, 255, 0.14)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
        transform: `translateY(${(1 - entrance) * 50}px)`,
        opacity: entrance,
        zIndex: 40,
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* Presenter Profile HUD with Real Profile Photo */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 340 }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #10B981",
              boxShadow: "0 0 16px rgba(16, 185, 129, 0.4)",
              background: "#0F172A",
            }}
          >
            <img
              src={staticFile("images/profile.webp")}
              alt={name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#10B981",
              border: "2px solid #0B0F19",
              boxShadow: "0 0 8px #10B981",
            }}
          />
        </div>

        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", display: "flex", alignItems: "center", gap: 8 }}>
            <span>{name}</span>
            <span
              style={{
                fontSize: 10,
                padding: "2px 8px",
                borderRadius: 12,
                background: "rgba(16, 185, 129, 0.2)",
                color: "#34D399",
                fontWeight: 700,
              }}
            >
              MY VOICE
            </span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
            {title}
          </div>
        </div>

        {/* Dynamic Voice Waveform Equalizer */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, height: 26, marginLeft: 12 }}>
          {bars.map((bar, i) => {
            const height = interpolate(
              Math.sin((frame * 0.4) + i * 1.3),
              [-1, 1],
              [6, 24]
            );
            return (
              <div
                key={bar}
                style={{
                  width: 3.5,
                  height: `${height}px`,
                  borderRadius: 4,
                  background: "linear-gradient(to top, #10B981, #06B6D4)",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Synchronized Exact Voiceover Captions */}
      <div
        style={{
          flex: 1,
          marginLeft: 32,
          paddingLeft: 28,
          borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 20 }}>🎙️</span>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#F1F5F9",
            lineHeight: 1.4,
          }}
        >
          <span style={{ color: "#34D399", fontWeight: 700 }}>"</span>
          {caption}
          <span style={{ color: "#34D399", fontWeight: 700 }}>"</span>
        </div>
      </div>
    </div>
  );
};
