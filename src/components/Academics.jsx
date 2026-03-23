import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Academics = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
    <section className="section" id="marks" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
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

        <div style={{ marginBottom: '8vh' }}>
          <h2 className="section-heading reveal-heading" style={{ color: 'var(--text-muted)' }}>Achievements</h2>
          <div className="brutalist-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {achievementsData.map((item, i) => (
              <div key={i} className="brutalist-list-item hover-target" style={{ 
                borderTop: '1px solid var(--border-color)', 
                padding: '1.5rem 0', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', textTransform: 'uppercase', maxWidth: '60%' }}>{item.title}</h3>
                <span style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', color: 'var(--accent)', fontWeight: 600, textAlign: 'right' }}>{item.detail}</span>
              </div>
            ))}
             <div style={{ borderTop: '1px solid var(--border-color)' }}></div>
          </div>
        </div>

        <div>
          <h2 className="section-heading reveal-heading" style={{ color: 'var(--text-muted)' }}>Certifications</h2>
          <div className="brutalist-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {certificationsData.map((item, i) => (
              <div key={i} className="brutalist-list-item hover-target" style={{ 
                borderTop: '1px solid var(--border-color)', 
                padding: '1.5rem 0', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', textTransform: 'uppercase', maxWidth: '70%' }}>{item.title}</h3>
                <span style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', color: 'var(--text-muted)', textAlign: 'right' }}>{item.detail}</span>
              </div>
            ))}
             <div style={{ borderTop: '1px solid var(--border-color)' }}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;
