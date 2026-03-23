import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Milestones = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.brutalist-card', {
        scrollTrigger: {
          trigger: '#milestones',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        },
        y: -50,
        ease: 'none'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="milestones" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <h2 className="section-heading reveal-heading" style={{ marginBottom: 'var(--spacing-lg)' }}>Experience</h2>
        
        <div className="brutalist-card">
          <span className="year" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jul 2025 – Aug 2025</span>
          <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 0.95, margin: 'var(--spacing-sm) 0', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            ML Intern <br/>
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>@Grapesgenix</span>
          </h3>
          <ul className="experience-bullets" style={{ 
            fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)', 
            lineHeight: 1.5, 
            listStyleType: 'square', 
            paddingLeft: 'var(--spacing-sm)',
            marginTop: 'var(--spacing-md)',
            maxWidth: '1000px'
          }}>
            <li style={{ marginBottom: 'var(--spacing-xs)' }}>Built and tested ML prototypes using Google Teachable Machine to accelerate experimentation.</li>
            <li style={{ marginBottom: 'var(--spacing-xs)' }}>Performed data preprocessing, EDA, and model training using SVM and KNN.</li>
            <li style={{ marginBottom: 'var(--spacing-xs)' }}>Developed a real-time emotion detection system using DeepFace + Django.</li>
            <li style={{ marginBottom: 'var(--spacing-xs)' }}>Improved dataset quality through translation-based labeling and debugging, increasing consistency by 20%.</li>
            <li>Evaluated model performance and optimized preprocessing pipeline.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
