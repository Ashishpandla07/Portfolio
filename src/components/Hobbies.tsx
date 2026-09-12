import React from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import '../assets/styles/Hobbies.scss';

interface HobbyItem {
  id: string;
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
  badge: string;
  accent: string;
}

const HOBBIES_DATA: HobbyItem[] = [
  {
    id: "reading",
    icon: <MenuBookIcon className="hobby-icon" />,
    emoji: "📚",
    title: "Reading",
    description: "Finance, business strategy, executive leadership, and personal growth.",
    badge: "⟡ Continuous Learning",
    accent: "indigo"
  },
  {
    id: "fitness",
    icon: <FitnessCenterIcon className="hobby-icon" />,
    emoji: "🏋️",
    title: "Fitness",
    description: "Strength training, disciplined workouts, and maintaining peak energy.",
    badge: "⟡ Health & Discipline",
    accent: "emerald"
  },
  {
    id: "traveling",
    icon: <FlightTakeoffIcon className="hobby-icon" />,
    emoji: "✈️",
    title: "Traveling",
    description: "Exploring new destinations, diverse cultures, and architectural heritage.",
    badge: "⟡ Global Perspective",
    accent: "cyan"
  },
  {
    id: "music",
    icon: <HeadphonesIcon className="hobby-icon" />,
    emoji: "🎵",
    title: "Music",
    description: "Instrumental, acoustic, and modern tunes to unwind, focus, and reflect.",
    badge: "⟡ Recreation & Focus",
    accent: "rose"
  },
  {
    id: "technology",
    icon: <LaptopMacIcon className="hobby-icon" />,
    emoji: "💻",
    title: "Technology",
    description: "Fintech innovations, AI developments, and emerging analytics tools.",
    badge: "⟡ Digital Explorer",
    accent: "violet"
  }
];

function Hobbies() {
  return (
    <div className="hobbies-container" id="hobbies">
      <div className="section-header">
        <h1 className="hobbies-title">
          Hobbies & <span className="highlight-gradient">Interests</span>
        </h1>
        <p className="subtitle">
          Beyond balance sheets: passions and disciplines that fuel energy, curiosity, and high performance.
        </p>
      </div>

      <div className="hobbies-grid">
        {HOBBIES_DATA.map((item) => (
          <div key={item.id} className={`hobby-card accent-${item.accent}`}>
            <div className="card-header-row">
              <div className="icon-wrapper">
                {item.icon}
              </div>
            </div>
            <div className="card-body">
              <span className="hobby-badge">{item.badge}</span>
              <h3 className="hobby-title">{item.title}</h3>
              <p className="hobby-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
