import React, { useState, useEffect } from "react";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {/* Subtle Reading Progress Indicator on Mobile */}
        <div
          className="mobile-scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="mobile-bar-left">
          <IconButton
            className="hamburger-btn"
            aria-label="open sections navigator"
            title="Sections Navigator"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              minWidth: '44px',
              minHeight: '44px',
              padding: '6px 8px',
              color: mode === 'dark' ? '#ffffff !important' : '#0f172a !important',
              backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
              border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.09)',
              },
            }}
          >
            <MenuIcon sx={{ fontSize: '1.85rem', color: mode === 'dark' ? '#ffffff !important' : '#0f172a !important' }} />
          </IconButton>
          <span
            className="mobile-bar-title"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            title="Tap to scroll back to top"
          >
            CA Ashish Pandla
          </span>
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
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 270,
            background: mode === 'dark' ? '#0e131f' : '#ffffff',
          },
        }}
      >
        {renderSidebarContent(true)}
      </Drawer>

      {/* Mobile Floating Scroll-to-Top Button (Mobile Only <= 992px) */}
      <button
        className={`mobile-scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll back to top"
        title="Scroll to top"
      >
        <KeyboardArrowUpIcon />
      </button>

      {/* Mobile Floating Quick-Action Bar (Mobile Only <= 992px) */}
      <nav className="mobile-bottom-bar" aria-label="Quick contact actions">
        <a href="tel:+918058914286" className="action-pill-item call" aria-label="Call Ashish Pandla">
          <PhoneIcon className="action-pill-icon" />
          <span>Call</span>
        </a>
        <a
          href="https://wa.me/918058914286?text=Hi%20Ashish,%20I%20viewed%20your%20portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="action-pill-item whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="action-pill-icon" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://linkedin.com/in/ipandla"
          target="_blank"
          rel="noopener noreferrer"
          className="action-pill-item linkedin"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon className="action-pill-icon" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:ashishpandla07@gmail.com" className="action-pill-item email" aria-label="Email Ashish Pandla">
          <EmailIcon className="action-pill-icon" />
          <span>Email</span>
        </a>
        <a
          href={`${process.env.PUBLIC_URL || ''}/Resume-Ashish.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="action-pill-item resume"
          aria-label="View Resume PDF"
        >
          <PictureAsPdfIcon className="action-pill-icon" />
          <span>Resume</span>
        </a>
      </nav>
    </>
  );
}

export default Navigation;