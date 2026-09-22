import React from "react";
import { interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

interface Scene1HeroProps {
  name: string;
  title: string;
}

export const Scene1Hero: React.FC<Scene1HeroProps> = ({ name, title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const photoSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });
  const titleSpring = spring({ frame: frame - 15, fps, config: { damping: 12, stiffness: 100 } });
  const subSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const badgeSpring = spring({ frame: frame - 35, fps, config: { damping: 14, stiffness: 110 } });

  const opacity = interpolate(frame, [145, 165], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 165], [0.97, 1.03], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 95,
        bottom: 110,
        left: 60,
        right: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        opacity,
        transform: `scale(${scale})`,
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* Profile Avatar & CA Crest Badge */}
      <div
        style={{
          position: "relative",
          marginBottom: 20,
          transform: `scale(${photoSpring})`,
          opacity: photoSpring,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #10B981",
            boxShadow: "0 0 35px rgba(16, 185, 129, 0.45)",
            background: "#0F172A",
          }}
        >
          <img
            src={staticFile("images/profile.webp")}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Small CA Crest Pin */}
        <div
          style={{
            position: "absolute",
            bottom: -4,
            right: -4,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#FFFFFF",
            border: "2px solid #10B981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            overflow: "hidden",
            padding: 2,
          }}
        >
          <img
            src={staticFile("images/ca_logo.png")}
            alt="CA Crest"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Target Pill */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 22px",
          borderRadius: 30,
          background: "rgba(16, 185, 129, 0.12)",
          border: "1px solid rgba(16, 185, 129, 0.4)",
          color: "#34D399",
          fontWeight: 700,
          fontSize: 15,
          marginBottom: 16,
          boxShadow: "0 0 25px rgba(16, 185, 129, 0.2)",
          transform: `scale(${badgeSpring})`,
          opacity: badgeSpring,
        }}
      >
        <span>🏛️</span>
        <span>CHARTERED ACCOUNTANT &amp; STRATEGIC FINANCE CO-PILOT</span>
      </div>

      {/* Main Name Headline */}
      <h1
        style={{
          fontSize: 70,
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          margin: "0 0 12px 0",
          transform: `translateY(${(1 - titleSpring) * 35}px)`,
          opacity: titleSpring,
          textShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {name}
      </h1>

      {/* Professional Subtitle */}
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          background: "linear-gradient(135deg, #34D399, #38BDF8, #818CF8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0 0 18px 0",
          letterSpacing: "-0.02em",
          transform: `translateY(${(1 - subSpring) * 25}px)`,
          opacity: subSpring,
        }}
      >
        {title}
      </div>

      <p
        style={{
          fontSize: 20,
          color: "rgba(226, 232, 240, 0.8)",
          maxWidth: 900,
          margin: "0 0 24px 0",
          lineHeight: 1.45,
          fontWeight: 400,
          transform: `translateY(${(1 - subSpring) * 15}px)`,
          opacity: subSpring,
        }}
      >
        Partnering with executive leadership across tech unicorns and global logistics to transform financial complexity into decisive enterprise growth.
      </p>

      {/* 3 Executive Pillar Badges */}
      <div
        style={{
          display: "flex",
          gap: 18,
          transform: `translateY(${(1 - badgeSpring) * 20}px)`,
          opacity: badgeSpring,
        }}
      >
        <div
          style={{
            padding: "10px 22px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 14,
            backdropFilter: "blur(12px)",
            color: "#F8FAFC",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          📈 <span style={{ color: "#10B981", fontWeight: 800 }}>8+ Years</span> FP&amp;A &amp; Controlling
        </div>
        <div
          style={{
            padding: "10px 22px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 14,
            backdropFilter: "blur(12px)",
            color: "#F8FAFC",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          🚀 <span style={{ color: "#38BDF8", fontWeight: 800 }}>CARS24 &amp; cargo-partner</span>
        </div>
        <div
          style={{
            padding: "10px 22px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 14,
            backdropFilter: "blur(12px)",
            color: "#F8FAFC",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          🛡️ <span style={{ color: "#A855F7", fontWeight: 800 }}>Ind-AS / IFRS</span> Governance
        </div>
      </div>
    </div>
  );
};
