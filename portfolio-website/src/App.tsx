import React, { useState, useEffect } from "react";
import {
    Main,
    Timeline,
    Education,
    Expertise,
    Project,
    Hobbies,
    Contact,
    Navigation,
    Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('portfolio_theme');
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }
        }
        return 'dark';
    });

    const handleModeChange = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'dark' ? 'light' : 'dark';
            if (typeof window !== 'undefined') {
                localStorage.setItem('portfolio_theme', newMode);
            }
            return newMode;
        });
    };

    // Listen to OS system color scheme changes if user hasn't explicitly set a preference
    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        const handleChange = (e: MediaQueryListEvent) => {
            const hasUserPreference = localStorage.getItem('portfolio_theme');
            if (!hasUserPreference) {
                setMode(e.matches ? 'light' : 'dark');
            }
        };

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        } else if ((mediaQuery as any).addListener) {
            (mediaQuery as any).addListener(handleChange);
            return () => (mediaQuery as any).removeListener(handleChange);
        }
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <a href="#main-content" className="skip-to-content-link">Skip to content</a>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <main className="content-wrapper" id="main-content" tabIndex={-1}>
                <FadeIn transitionDuration={700}>
                    <Main />
                    <Expertise />
                    <Timeline />
                    <Project />
                    <Education />
                    <Hobbies />
                    <Contact />
                </FadeIn>
                <Footer />
            </main>
        </div>
    );
}

export default App