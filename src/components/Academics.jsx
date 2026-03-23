import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Academics = ({ isDarkMode }) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.torii-parallax-wrapper', {
        scrollTrigger: {
          trigger: '#marks',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '20%',
        ease: "none"
      });

      gsap.to('.giant-moon', {
        scrollTrigger: {
          trigger: '#marks',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '-40vh',
        scale: 1.5,
        ease: "none"
      });

      gsap.from('.brutalist-list-item', {
        scrollTrigger: {
          trigger: '#marks',
          start: 'top 60%'
        },
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });
    });
    return () => ctx.revert();
  }, []);

  const achievementsData = [
    { title: 'Operation BlackOut CTF', detail: '3rd Prize' },
    { title: 'Hacknauts AI/ML Hackathon', detail: 'Top 1%' },
    { title: 'AI/ML Hackathons', detail: '8+ Participations' },
    { title: 'Problem Solving', detail: 'Cybersecurity & CP' },
  ];

  const certificationsData = [
    { title: 'Privacy & Security (NPTEL)', detail: 'NPTEL' },
    { title: 'Cybersecurity Fundamentals', detail: 'CipherSchools' },
    { title: 'Responsive Web Design', detail: 'freeCodeCamp' },
  ];

  const academicData = [
    { inst: 'Lovely Professional University', degree: 'B.Tech CS / ML', result: 'CGPA: 7.62', year: '2023 – Present' },
    { inst: 'Amrita Vidyalayam', degree: 'Intermediate (12th)', result: '87.5%', year: '' },
    { inst: 'Amrita Vidyalayam', degree: 'Matriculation (10th)', result: '96.5%', year: '' },
  ];

  return (
    <section className="section" id="marks" style={{ position: 'relative', overflow: 'hidden' }}>
      <svg className="summary-bg-svg academics-bg-svg" viewBox="0 0 800 800" style={{ opacity: 0.03, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <defs>
          <pattern id="seigaiha" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 50 C0 20 25 0 50 0 C75 0 100 20 100 50" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 40 C0 10 25 -10 50 -10 C75 -10 100 10 100 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)" />
      </svg>
      
      <div className="torii-parallax-wrapper" style={{ position: 'absolute', right: '-10%', top: '10%', height: '120%', zIndex: 1, opacity: 0.4 }}>
        <svg className="torii-lines fuji-path-glow" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMax meet" style={{ height: '100%' }}>
          <defs>
            <linearGradient id="torii-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--text-primary)' }} />
              <stop offset="100%" style={{ stopColor: 'transparent' }} />
            </linearGradient>
          </defs>
          <path className="torii-path" d="M320 800 L320 200 Q320 120 250 120" stroke="url(#torii-grad)" strokeWidth="6" fill="none" />
          <path className="torii-path" d="M680 800 L680 200 Q680 120 750 120" stroke="url(#torii-grad)" strokeWidth="6" fill="none" />
          <path className="torii-path" d="M200 140 Q500 80 800 140" stroke="url(#torii-grad)" strokeWidth="10" fill="none" />
          <path className="torii-path" d="M240 190 L760 190" stroke="url(#torii-grad)" strokeWidth="6" fill="none" />
          <path className="torii-path" d="M320 300 L680 300" stroke="rgba(150,160,170,0.1)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="moon-wrapper" style={{ zIndex: 0 }}>
        <div className="giant-moon" style={{ background: 'var(--accent)', opacity: 0.1 }}></div>
      </div>
      
      <div className="container marks-content" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Education Section */}
        <div style={{ marginBottom: '8vh' }}>
          <h2 className="section-heading reveal-heading" style={{ color: 'var(--text-muted)' }}>Education</h2>
          <div className="brutalist-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {academicData.map((row, i) => (
              <div key={i} className="brutalist-list-item hover-target" style={{ 
                borderTop: '2px solid var(--text-primary)', 
                padding: '2rem 0', 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '1rem'
              }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', width: '100%', textTransform: 'uppercase', lineHeight: 1 }}>{row.degree}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', width: '100%', marginTop: '0.8rem' }}>
                    <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{row.inst}</span>
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)' }}>{row.result}</span>
                    {row.year && <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{row.year}</span>}
                </div>
              </div>
            ))}
            <div style={{ borderTop: '2px solid var(--text-primary)' }}></div>
          </div>
        </div>

        {/* Achievements Section */}
        <div style={{ marginBottom: '8vh' }}>
          <h2 className="section-heading reveal-heading" style={{ color: 'var(--text-muted)' }}>Achievements</h2>
          <div className="brutalist-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {achievementsData.map((item, i) => (
              <div key={i} className="brutalist-list-item hover-target" style={{ 
                borderTop: '1px solid rgba(150,160,170,0.3)', 
                padding: '1.5rem 0', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', textTransform: 'uppercase', maxWidth: '60%' }}>{item.title}</h3>
                <span style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', color: 'var(--accent)', fontWeight: 600, textAlign: 'right' }}>{item.detail}</span>
              </div>
            ))}
             <div style={{ borderTop: '1px solid rgba(150,160,170,0.3)' }}></div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="section-heading reveal-heading" style={{ color: 'var(--text-muted)' }}>Certifications</h2>
          <div className="brutalist-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {certificationsData.map((item, i) => (
              <div key={i} className="brutalist-list-item hover-target" style={{ 
                borderTop: '1px solid rgba(150,160,170,0.3)', 
                padding: '1.5rem 0', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', textTransform: 'uppercase', maxWidth: '70%' }}>{item.title}</h3>
                <span style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', color: 'var(--text-muted)', textAlign: 'right' }}>{item.detail}</span>
              </div>
            ))}
             <div style={{ borderTop: '1px solid rgba(150,160,170,0.3)' }}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;
