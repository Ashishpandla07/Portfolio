import React, { useEffect } from "react";
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
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.style.colorScheme = 'light';
        }
        if (typeof window !== 'undefined') {
            try {
                localStorage.removeItem('portfolio_theme');
                sessionStorage.removeItem('portfolio_user_theme');
            } catch (e) {}
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="main-container light-mode">
            <a href="#main-content" className="skip-to-content-link">Skip to content</a>
            <Navigation parentToChild={{ mode: 'light' }} modeChange={() => {}} />
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

export default App;