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
}

const HOBBIES_DATA: HobbyItem[] = [
  {
    id: "reading",
    icon: <MenuBookIcon className="hobby-icon" />,
    emoji: "📚",
    title: "Reading",
    description: "Finance, business strategy, executive leadership, and self-development.",
    badge: "Continuous Learning"
  },
  {
    id: "fitness",
    icon: <FitnessCenterIcon className="hobby-icon" />,
    emoji: "🏋️",
    title: "Fitness & Wellness",
    description: "Staying active, disciplined workouts, and maintaining a healthy routine.",
    badge: "Health & Discipline"
  },
  {
    id: "traveling",
    icon: <FlightTakeoffIcon className="hobby-icon" />,
    emoji: "✈️",
    title: "Traveling",
    description: "Exploring new destinations, experiencing diverse cultures, and heritage.",
    badge: "Global Perspective"
  },
  {
    id: "music",
    icon: <HeadphonesIcon className="hobby-icon" />,
    emoji: "🎵",
    title: "Music",
    description: "Listening to acoustic, instrumental, and modern tunes to unwind and focus.",
    badge: "Recreation & Focus"
  },
  {
    id: "technology",
    icon: <LaptopMacIcon className="hobby-icon" />,
    emoji: "💻",
    title: "Technology",
    description: "Exploring emerging digital tools, AI trends, and fintech innovations.",
    badge: "Digital Explorer"
  }
];

function Hobbies() {
  return (
    <div className="hobbies-container" id="hobbies">
      <div className="section-header">
        <span className="eyebrow-tag">Personal Life</span>
        <h1>Hobbies & Interests</h1>
        <p className="subtitle">Beyond numbers and spreadsheets: activities that fuel balance, curiosity, and growth.</p>
      </div>

      <div className="hobbies-grid">
        {HOBBIES_DATA.map((item) => (
          <div key={item.id} className="hobby-card">
            <div className="card-top">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <span className="hobby-badge">{item.badge}</span>
            </div>
            <div className="card-body">
              <h3 className="hobby-title">
                <span className="emoji-span">{item.emoji}</span> {item.title}
              </h3>
              <p className="hobby-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
