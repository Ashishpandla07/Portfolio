import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  const pulse = interpolate(Math.sin(frame / 30), [-1, 1], [0.85, 1.15]);
  const orb1X = interpolate(Math.sin(frame / 70), [-1, 1], [25, 40]);
  const orb1Y = interpolate(Math.cos(frame / 60), [-1, 1], [20, 35]);

  const orb2X = interpolate(Math.cos(frame / 80), [-1, 1], [65, 80]);
  const orb2Y = interpolate(Math.sin(frame / 70), [-1, 1], [55, 75]);

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
      {/* Cyan/Emerald Executive Glow */}
      <div
        style={{
          position: "absolute",
          top: `${orb1Y}%`,
          left: `${orb1X}%`,
          width: 750,
          height: 750,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 70%)",
          filter: "blur(100px)",
          transform: `scale(${pulse}) translate(-50%, -50%)`,
          pointerEvents: "none",
        }}
      />

      {/* Royal Indigo Glow */}
      <div
        style={{
          position: "absolute",
          top: `${orb2Y}%`,
          left: `${orb2X}%`,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)",
          filter: "blur(120px)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Futuristic Financial Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.85,
          pointerEvents: "none",
        }}
      />

      {/* Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(5, 8, 16, 0.8) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
