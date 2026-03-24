import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

const IntroLoader = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const canvasRef = useRef(null);
  const countRef = useRef(null);
  const animFrameRef = useRef(null);
  const waveFrameRef = useRef(null);
  const [count, setCount] = useState(0);

  // ── Signal wave canvas ──
  const drawWave = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const midY = h / 2;
    const time = performance.now() / 1000;

    ctx.clearRect(0, 0, w, h);

    // Primary wave
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(150, 167, 141, 0.8)'; // sage green
    ctx.lineWidth = 1.5;
    for (let x = 0; x < w; x++) {
      const norm = x / w;
      const amp = Math.sin(norm * Math.PI) * 30; // envelope
      const y = midY + amp * Math.sin(norm * 12 + time * 3);
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Secondary thinner wave (slightly offset)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(150, 167, 141, 0.3)';
    ctx.lineWidth = 0.8;
    for (let x = 0; x < w; x++) {
      const norm = x / w;
      const amp = Math.sin(norm * Math.PI) * 20;
      const y = midY + amp * Math.sin(norm * 8 + time * 2 + 1);
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    waveFrameRef.current = requestAnimationFrame(drawWave);
  }, []);

  // ── Countdown animation ──
  useEffect(() => {
    let start = null;
    const duration = 2800; // ms

    const step = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      // ease-in curve: starts slow, accelerates
      const progress = Math.min(1, Math.pow(elapsed / duration, 1.8));
      const value = Math.min(100, Math.floor(progress * 100));

      setCount(value);

      if (value < 100) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        // Countdown done — trigger exit
        setTimeout(() => {
          exitAnimation();
        }, 400);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // ── Start wave drawing ──
  useEffect(() => {
    drawWave();
    return () => {
      if (waveFrameRef.current) cancelAnimationFrame(waveFrameRef.current);
    };
  }, [drawWave]);

  // ── Entry animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-signal-text', {
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
      });
      gsap.from('.intro-separator', {
        scaleX: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        transformOrigin: 'left center',
      });
      gsap.from('.intro-wave-canvas', {
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power2.out',
      });
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  // ── Exit animation ──
  const exitAnimation = () => {
    if (waveFrameRef.current) cancelAnimationFrame(waveFrameRef.current);

    gsap.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: 'power4.inOut',
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });
  };

  const padded = String(count).padStart(3, '0');

  return (
    <div className="intro-loader" ref={overlayRef}>
      {/* Grain overlay */}
      <div className="intro-grain" aria-hidden="true" />

      {/* Signal wave */}
      <canvas
        ref={canvasRef}
        className="intro-wave-canvas"
        aria-hidden="true"
      />

      {/* Bottom-left content block */}
      <div className="intro-bottom-block">
        <div className="intro-countdown" ref={countRef}>
          {padded}
        </div>
        <div className="intro-separator" />
        <p className="intro-signal-text">
          ANAMIKA.DEV / INITIALIZING SIGNAL
        </p>
      </div>
    </div>
  );
};

export default IntroLoader;
