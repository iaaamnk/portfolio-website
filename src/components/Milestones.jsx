import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Milestones = () => {
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

  return (
    <section className="section" id="milestones" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <h2 className="section-heading reveal-heading" style={{ marginBottom: '4rem' }}>Experience</h2>
        
        <div className="brutalist-card">
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
            maxWidth: '1000px'
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
