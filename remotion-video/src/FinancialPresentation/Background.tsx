import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  const pulse = interpolate(Math.sin(frame / 25), [-1, 1], [0.8, 1.2]);
  const orb1X = interpolate(Math.sin(frame / 60), [-1, 1], [20, 35]);
  const orb1Y = interpolate(Math.cos(frame / 50), [-1, 1], [15, 30]);

  const orb2X = interpolate(Math.cos(frame / 70), [-1, 1], [70, 85]);
  const orb2Y = interpolate(Math.sin(frame / 60), [-1, 1], [60, 80]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#070B14",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Dynamic Ambient Glow 1 - Emerald / Cyan */}
      <div
        style={{
          position: "absolute",
          top: `${orb1Y}%`,
          left: `${orb1X}%`,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)",
          filter: "blur(90px)",
          transform: `scale(${pulse}) translate(-50%, -50%)`,
          pointerEvents: "none",
        }}
      />

      {/* Dynamic Ambient Glow 2 - Indigo / Violet */}
      <div
        style={{
          position: "absolute",
          top: `${orb2Y}%`,
          left: `${orb2X}%`,
          width: 850,
          height: 850,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 70%)",
          filter: "blur(110px)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle Financial Cyber Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />

      {/* Vignette Overlay for Depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(4, 7, 14, 0.75) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
