import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Summary = () => {
  const summaryText = "Anamika Vinesh is a Computer Science undergraduate specializing in Machine Learning and full-stack AI applications. Her work focuses on creating practical ML solutions, including real-time emotion recognition systems and AI-driven career recommendation platforms. She is passionate about building scalable, high-impact intelligent systems.";

  const coreSkills = ['Python', 'C++', 'TensorFlow', 'Keras', 'OpenCV', 'DeepFace', 'Django', 'React', 'Docker', 'REST API'];

  useLayoutEffect(() => {
    gsap.from('#summary .reveal-heading', {
      scrollTrigger: {
        trigger: '#summary',
        start: 'top 75%'
      },
      y: 50, opacity: 0, duration: 1.2, ease: 'power3.out'
    });

    gsap.to('.scrub-word', {
      scrollTrigger: {
        trigger: '.scrub-text',
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: true
      },
      opacity: 1,
      color: 'var(--text-primary)',
      stagger: 0.1
    });

    gsap.from('.brutalist-skill-item', {
      scrollTrigger: {
        trigger: '.brutalist-skills',
        start: 'top 80%'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'back.out(1.7)'
    });
  }, []);

  return (
    <section className="section" id="summary">
      <svg className="summary-bg-svg" viewBox="0 0 800 800" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <path d="M-50 400 Q250 100 550 400" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      </svg>
      
      <div className="summary-content container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="summary-header">
          <h2 className="section-heading reveal-heading" style={{ marginBottom: '2rem' }}>Summary</h2>
          <div className="text-block">
            <p className="scrub-text" style={{ fontWeight: 600, fontSize: 'clamp(1rem, 2vw, 1.8rem)', lineHeight: 1.4, maxWidth: '1200px' }}>
              {summaryText.split(' ').map((word, i) => (
                <span key={i} className="scrub-word" style={{ opacity: 0.2, color: 'var(--text-muted)' }}>{word} </span>
              ))}
            </p>
          </div>
        </div>
        
        <div className="brutalist-skills" style={{ display: 'flex', flexWrap: 'wrap', gap: '1vw', marginTop: '2rem' }}>
          <h3 style={{ width: '100%', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '1rem' }}>Arsenal</h3>
          {coreSkills.map(skill => (
            <span key={skill} className="brutalist-skill-item hover-target" style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 2rem)', 
              fontWeight: 500, 
              textTransform: 'uppercase', 
              border: '2px solid var(--text-muted)', 
              padding: '0.4rem 1.5vw', 
              borderRadius: '200px',
              transition: 'all 0.3s ease'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
