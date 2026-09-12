import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import profileImg from '../assets/images/profile.webp';
import '../assets/styles/Navigation.scss';

interface NavigationProps {
  parentToChild: { mode: string };
  modeChange: () => void;
}

const navItems = [
  { label: 'About Me', target: 'about', icon: <PersonIcon className="nav-icon" /> },
  { label: 'Expertise', target: 'expertise', icon: <AssessmentIcon className="nav-icon" /> },
  { label: 'Experience', target: 'history', icon: <TrendingUpIcon className="nav-icon" /> },
  { label: 'Achievements', target: 'projects', icon: <EmojiEventsIcon className="nav-icon" /> },
  { label: 'Education', target: 'credentials', icon: <SchoolIcon className="nav-icon" /> },
  { label: 'Hobbies', target: 'hobbies', icon: <InterestsIcon className="nav-icon" /> },
  { label: 'Contact', target: 'contact', icon: <EmailIcon className="nav-icon" /> },
];

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const renderSidebarContent = (isMobile = false) => (
    <div className={isMobile ? "mobile-drawer-content" : "desktop-sidebar"}>
      {/* Profile Header */}
      <div className="sidebar-header">
        <div className="avatar-wrapper">
          <img
            src={profileImg}
            srcSet={`${profileImg} 1x`}
            alt="CA Ashish Pandla"
            width={144}
            height={144}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="sidebar-name">CA Ashish Pandla</div>
        <p className="sidebar-role">Senior Finance Leader</p>
      </div>

      {/* Nav Menu */}
      <nav className="sidebar-menu">
        {navItems.map((item) => (
          <button
            key={item.target}
            className="nav-link-btn"
            onClick={() => scrollToSection(item.target)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}

        {/* Direct Resume PDF Link */}
        <a
          href={`${process.env.PUBLIC_URL || ''}/Resume-Ashish.pdf`}
          target="_blank"
          rel="noreferrer"
          className="nav-link-btn resume-link"
        >
          <PictureAsPdfIcon className="nav-icon" />
          <span>Resume (PDF)</span>
        </a>
      </nav>

      {/* Theme Toggle Footer */}
      <div className="sidebar-footer">
        <button
          className="theme-toggle-btn"
          onClick={modeChange}
          aria-label={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          title={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
        >
          {mode === 'dark' ? (
            <>
              <LightModeIcon sx={{ fontSize: '1.1rem', color: '#facc15' }} />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <DarkModeIcon sx={{ fontSize: '1.1rem', color: '#5000ca' }} />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Left Sidebar */}
      {renderSidebarContent(false)}

      {/* Mobile Sticky Top Header */}
      <header className="mobile-top-bar">
        <div className="mobile-bar-left">
          <IconButton
            className="hamburger-btn"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ minWidth: '44px', minHeight: '44px' }}
          >
            <MenuIcon />
          </IconButton>
          <span className="mobile-bar-title">CA Ashish Pandla</span>
        </div>

        <div className="mobile-bar-right">
          <a
            href={`${process.env.PUBLIC_URL || ''}/Resume-Ashish.pdf`}
            target="_blank"
            rel="noreferrer"
            className="mobile-resume-pill"
          >
            <PictureAsPdfIcon />
            <span>Resume</span>
          </a>
          <IconButton
            onClick={modeChange}
            aria-label={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            title={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            sx={{ color: 'inherit', minWidth: '44px', minHeight: '44px' }}
          >
            {mode === 'dark' ? (
              <LightModeIcon sx={{ color: '#facc15', fontSize: '1.25rem' }} />
            ) : (
              <DarkModeIcon sx={{ color: '#5000ca', fontSize: '1.25rem' }} />
            )}
          </IconButton>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 270,
            background: mode === 'dark' ? '#0e131f' : '#ffffff',
          },
        }}
      >
        {renderSidebarContent(true)}
      </Drawer>
    </>
  );
}

export default Navigation;