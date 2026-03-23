import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Milestones = ({ isDarkMode }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const sakuraTime = useRef(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.brutalist-card', {
        scrollTrigger: {
          trigger: '#milestones',
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1
        },
        y: 100,
        opacity: 0,
        rotationX: 10,
        transformPerspective: 1000
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const sCtx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize particles
    particles.current = Array.from({length: 40}, () => {
      const p = {
        x: Math.random() * (canvas.width * 0.3) - 100,
        y: Math.random() * (canvas.height * 0.4) + canvas.height * 0.1,
        size: Math.random() * 5 + 2,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.random() * 1.5 + 0.5,
        angle: Math.random() * Math.PI * 2,
        spin: Math.random() * 0.05 - 0.02,
        spiralRadius: Math.random() * 40 + 10,
        spiralSpeed: Math.random() * 0.04 + 0.01,
        baseY: 0
      };
      p.baseY = p.y;
      return p;
    });

    const drawMinimalTree = (ctx) => {
      ctx.save();
      ctx.strokeStyle = isDarkMode ? 'rgba(200, 205, 210, 0.2)' : 'rgba(120, 125, 130, 0.2)';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      
      // Main Trunk
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.3);
      ctx.quadraticCurveTo(canvas.width * 0.2, canvas.height * 0.4, canvas.width * 0.35, canvas.height * 0.2);
      ctx.stroke();

      // Branch 1
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.1, canvas.height * 0.33);
      ctx.quadraticCurveTo(canvas.width * 0.15, canvas.height * 0.1, canvas.width * 0.25, canvas.height * 0.05);
      ctx.stroke();

      ctx.restore();
    };

    let animationFrameId;
    const animateSakura = () => {
      sakuraTime.current += 1;
      sCtx.clearRect(0, 0, canvas.width, canvas.height);
      drawMinimalTree(sCtx);
      
      particles.current.forEach(p => {
        p.x += p.speedX;
        p.baseY += p.speedY;
        p.y = p.baseY + Math.sin(sakuraTime.current * p.spiralSpeed) * p.spiralRadius;
        p.x += Math.cos(sakuraTime.current * p.spiralSpeed) * (p.spiralRadius * 0.02);
        p.angle += p.spin;
        if(p.y > canvas.height + 50 || p.x > canvas.width + 50) {
          p.x = Math.random() * (canvas.width * 0.1) - 50;
          p.baseY = Math.random() * (canvas.height * 0.3) + canvas.height * 0.1;
        }
        sCtx.save();
        sCtx.translate(p.x, p.y);
        sCtx.rotate(p.angle);
        sCtx.fillStyle = isDarkMode ? 'rgba(255, 170, 190, 0.4)' : 'rgba(217, 4, 41, 0.4)'; // Redder in light mode
        sCtx.beginPath();
        sCtx.moveTo(0, 0);
        sCtx.quadraticCurveTo(p.size, p.size, 0, p.size * 2);
        sCtx.quadraticCurveTo(-p.size, p.size, 0, 0);
        sCtx.fill();
        sCtx.restore();
      });
      animationFrameId = requestAnimationFrame(animateSakura);
    };

    animateSakura();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <section className="section" id="milestones" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <canvas ref={canvasRef} id="sakura-canvas" className="section-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}></canvas>
      
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <h2 className="section-heading reveal-heading" style={{ marginBottom: '4rem' }}>Experience</h2>
        
        <div className="brutalist-card" style={{ 
          background: 'var(--text-primary)', 
          color: 'var(--bg-color)', 
          padding: 'clamp(2rem, 4vw, 4rem)', 
          boxShadow: '15px 15px 0px var(--accent)',
          border: '2px solid var(--text-primary)'
        }}>
          <span className="year" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jul 2025 – Aug 2025</span>
          <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.95, margin: '1.5rem 0', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            ML Intern <br/>
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>@Grapesgenix</span>
          </h3>
          <ul className="experience-bullets" style={{ 
            fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)', 
            lineHeight: 1.5, 
            listStyleType: 'square', 
            paddingLeft: '1.5rem',
            marginTop: '2rem',
            maxWidth: '1000px',
            color: 'rgba(255,255,255,0.8)'
          }}>
            <li style={{ marginBottom: '0.8rem' }}>Built and tested ML prototypes using Google Teachable Machine to accelerate experimentation.</li>
            <li style={{ marginBottom: '0.8rem' }}>Performed data preprocessing, EDA, and model training using SVM and KNN.</li>
            <li style={{ marginBottom: '0.8rem' }}>Developed a real-time emotion detection system using DeepFace + Django.</li>
            <li style={{ marginBottom: '0.8rem' }}>Improved dataset quality through translation-based labeling and debugging, increasing consistency by 20%.</li>
            <li>Evaluated model performance and optimized preprocessing pipeline.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
