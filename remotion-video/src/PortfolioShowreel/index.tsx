import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { Background } from "./Background";
import { HeaderHUD } from "./HeaderHUD";
import { PresenterHUD } from "./PresenterHUD";
import { Scene1Hero } from "./Scene1Hero";
import { Scene2Journey } from "./Scene2Journey";
import { Scene3Expertise } from "./Scene3Expertise";
import { Scene4Metrics } from "./Scene4Metrics";
import { Scene5Contact } from "./Scene5Contact";
import { PortfolioShowreelProps } from "./types";

export const PortfolioShowreel: React.FC<PortfolioShowreelProps> = ({
  name = "CA Ashish Pandla",
  title = "Senior Finance Leader & Chartered Accountant",
  email = "ashishpandla07@gmail.com",
  phone = "+91 80589 14286",
  linkedIn = "linkedin.com/in/ipandla",
  portfolioUrl = "https://ashishpandla07.github.io/Portfolio/",
}) => {
  const totalFrames = 900; // 30 seconds at 30 fps

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070B14",
        color: "#FFFFFF",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* Dynamic Voiceover Audio Track */}
      <Audio src={staticFile("voiceover.wav")} volume={1} />

      {/* Dynamic Ambient Background */}
      <Background />

      {/* Top Header HUD & Progress Tracker */}
      <HeaderHUD name={name} totalFrames={totalFrames} />

      {/* Scene 1: Executive Profile Hero (Frames 0 - 165) */}
      <Scene1Hero name={name} title={title} />

      {/* Scene 2: Career Progression & Experience Timeline (Frames 155 - 360) */}
      <Scene2Journey />

      {/* Scene 3: Core Competencies & Skill Pillars (Frames 350 - 585) */}
      <Scene3Expertise />

      {/* Scene 4: Delivered Impact & Metric Scorecard (Frames 575 - 765) */}
      <Scene4Metrics />

      {/* Scene 5: Closing Dossier & Contact Direct (Frames 755 - 900) */}
      <Scene5Contact
        name={name}
        title={title}
        email={email}
        phone={phone}
        linkedIn={linkedIn}
        portfolioUrl={portfolioUrl}
      />

      {/* Presenter Profile HUD with Audio Visualizer & Real-Time Voiceover Subtitles */}
      <PresenterHUD name={name} title={title} />
    </AbsoluteFill>
  );
};
