import "./index.css";
import { Composition } from "remotion";
import { PortfolioShowreel } from "./PortfolioShowreel";
import { FinancialPresentation } from "./FinancialPresentation";
import { HelloWorld } from "./HelloWorld";
import { Logo } from "./HelloWorld/Logo";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 30-second CA Ashish Pandla Executive Portfolio Showreel with Voiceover (900 frames @ 30fps) */}
      <Composition
        id="PortfolioShowreel"
        component={PortfolioShowreel}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          name: "CA Ashish Pandla",
          title: "Senior Finance Leader & Chartered Accountant",
          email: "ashishpandla07@gmail.com",
          phone: "+91 80589 14286",
          linkedIn: "linkedin.com/in/ipandla",
          portfolioUrl: "https://ashishpandla07.github.io/Portfolio/",
        }}
      />

      {/* 18-second Executive Financial Performance Presentation Video (540 frames @ 30fps) */}
      <Composition
        id="FinancialPresentation"
        component={FinancialPresentation}
        durationInFrames={540}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          companyName: "Apex Capital Tech",
          quarterText: "Q3 FY2025",
          presenterName: "CA Ashish Pandla",
          presenterRole: "Senior Finance Leader & CA",
        }}
      />

      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />

      <Composition
        id="OnlyLogo"
        component={Logo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          logoColor1: "#91dAE2",
          logoColor2: "#86A8E7",
        }}
      />
    </>
  );
};


