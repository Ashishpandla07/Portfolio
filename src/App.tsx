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
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

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