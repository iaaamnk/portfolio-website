import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from '@studio-freight/lenis';

// Components
import Cursor from './components/Cursor';
import ThemeToggle from './components/ThemeToggle';
import IntroLoader from './components/IntroLoader';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Milestones from './components/Milestones';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Connect from './components/Connect';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  // Lock scroll during intro
  useEffect(() => {
    if (!introComplete) {
      document.body.classList.add('intro-active');
    } else {
      document.body.classList.remove('intro-active');
    }
  }, [introComplete]);

  useLayoutEffect(() => {
    if (!introComplete) return;

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    lenis.on('scroll', (e) => {
      const progress = Math.min(1, Math.max(0, e.scroll / (document.documentElement.scrollHeight - window.innerHeight)));
      setScrollProgress(progress);
      ScrollTrigger.update();
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [introComplete]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <div className="app-container">
      {!introComplete && <IntroLoader onComplete={() => setIntroComplete(true)} />}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <Cursor />
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="smooth-wrapper">
        <main className="smooth-content">
          <Hero />
          <Summary />
          <Milestones />
          <Projects />
          <Academics />
          <Connect />
        </main>
      </div>
    </div>
  );
}

export default App;
