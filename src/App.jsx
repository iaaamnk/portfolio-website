import React, { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from '@studio-freight/lenis';

// Components
import Cursor from './components/Cursor';
import ThemeToggle from './components/ThemeToggle';
import Atmosphere from './components/Atmosphere';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Milestones from './components/Milestones';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Connect from './components/Connect';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    // Refresh ScrollTrigger after a short delay to ensure React has rendered everything
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <div className="app-container">
      <Cursor />
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Atmosphere isDarkMode={isDarkMode} />

      <div className="smooth-wrapper">
        <main className="smooth-content">
          <Hero />
          <Summary />
          <Milestones isDarkMode={isDarkMode} />
          <Projects />
          <Academics isDarkMode={isDarkMode} />
          <Connect />
        </main>
      </div>
    </div>
  );
}

export default App;
