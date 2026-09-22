import React from "react";
import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import { TopNavigation } from "./TopNavigation";
import { PresenterBadge } from "./PresenterBadge";
import { Scene1Intro } from "./Scene1Intro";
import { Scene2KPIs } from "./Scene2KPIs";
import { Scene3Chart } from "./Scene3Chart";
import { Scene4Efficiency } from "./Scene4Efficiency";
import { Scene5Closing } from "./Scene5Closing";
import { FinancialPresentationProps } from "./types";

export const FinancialPresentation: React.FC<FinancialPresentationProps> = ({
  companyName = "Apex Capital Tech",
  quarterText = "Q3 FY2025",
  presenterName = "Alex Morgan",
  presenterRole = "Chief Financial Officer",
}) => {
  const totalFrames = 540; // 18 seconds at 30 fps

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070B14",
        color: "#FFFFFF",
        fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
      }}
    >
      {/* Dynamic Animated Ambient Glows & Grid */}
      <Background />

      {/* Top Header & Breadcrumb Timeline */}
      <TopNavigation
        companyName={companyName}
        quarterText={quarterText}
        totalFrames={totalFrames}
      />

      {/* Scene 1: Executive Intro (Frames 0 - 105) */}
      <Scene1Intro quarterText={quarterText} companyName={companyName} />

      {/* Scene 2: Core Financial KPIs & Metrics Dashboard (Frames 95 - 230) */}
      <Scene2KPIs />

      {/* Scene 3: Revenue & Quarterly Trajectory Bar Chart (Frames 220 - 365) */}
      <Scene3Chart />

      {/* Scene 4: Unit Economics & Capital Efficiency (Frames 355 - 460) */}
      <Scene4Efficiency />

      {/* Scene 5: Executive Summary & Q&A (Frames 450 - 540) */}
      <Scene5Closing quarterText={quarterText} />

      {/* Presenter Profile HUD with Audio Visualizer & Voiceover Captions */}
      <PresenterBadge
        presenterName={presenterName}
        presenterRole={presenterRole}
      />
    </AbsoluteFill>
  );
};
