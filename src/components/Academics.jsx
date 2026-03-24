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
    { title: 'Secured 3rd Prize in the Operation BlackOut CTF competition, demonstrating strong cybersecurity and problem-solving skills.', detail: '3rd Prize' },
    { title: 'Secured 3rd Prize in HACK-ADHYAAY, a 24-hour national-level hackathon, showcasing innovation, teamwork, and technical execution under time constraints.', detail: '3rd Prize' },
    { title: 'Ranked in the Top 1% during the Hacknauts AI/ML Hackathon and placed among the Top 10 teams in HACKNAUTS 2025, highlighting excellence in competitive AI/ML problem solving.', detail: 'Top 1%' },
    { title: 'Achieved Top 10 Team position in the Gen AI Hackathon, Chandigarh, demonstrating strong capabilities in generative AI and real-world solution development.', detail: 'Top 10' },
    { title: 'Actively participated in 8+ AI/ML and national-level hackathons, including HACKNAUTS 2025, RedBrick Hacks III, and AMD AI Reinforcement Learning Hackathon (IIT Delhi).', detail: '8+ Events' },

    { title: 'Demonstrated advanced problem-solving skills in Cybersecurity and Competitive Programming across multiple competitive platforms.', detail: 'Expertise' },
  ];

  const certificationsData = [
    { title: 'Privacy & Security (NPTEL)', detail: 'NPTEL' },
    { title: 'Cybersecurity Fundamentals', detail: 'CipherSchools' },
    { title: 'Responsive Web Design', detail: 'freeCodeCamp' },
  ];

  const academicData = [
    { inst: 'Lovely Professional University', degree: 'B.Tech CS / ML', result: 'CGPA: 7.87', year: '2023 – Present' },
    { inst: 'Amrita Vidyalayam', degree: 'Intermediate (12th)', result: '87.5%', year: '' },
    { inst: 'Amrita Vidyalayam', degree: 'Matriculation (10th)', result: '96.5%', year: '' },
  ];

  return (
    <section className="section" id="marks" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        <div style={{ marginBottom: '8vh' }}>
          <h2 className="section-heading reveal-heading" style={{ color: 'var(--text-muted)' }}>Achievements</h2>
          <div className="brutalist-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {achievementsData.map((item, i) => (
              <div key={i} className="brutalist-list-item hover-target" style={{ 
                borderTop: '1px solid var(--border-color)', 
                padding: 'var(--spacing-sm) 0', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', fontWeight: 400, maxWidth: '80%', lineHeight: 1.5 }}>{item.title}</p>
                <span style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)', color: 'var(--accent)', fontWeight: 500, textAlign: 'right' }}>{item.detail}</span>
              </div>
            ))}
             <div style={{ borderTop: '1px solid var(--border-color)' }}></div>
          </div>
        </div>

        <div style={{ marginBottom: '8vh' }}>
          <h2 className="section-heading reveal-heading" style={{ color: 'var(--text-muted)' }}>Certifications</h2>
          <div className="brutalist-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {certificationsData.map((item, i) => (
              <div key={i} className="brutalist-list-item hover-target" style={{ 
                borderTop: '1px solid var(--border-color)', 
                padding: 'var(--spacing-sm) 0', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', fontWeight: 400, maxWidth: '80%', lineHeight: 1.5 }}>{item.title}</p>
                <span style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)', color: 'var(--text-muted)', textAlign: 'right' }}>{item.detail}</span>
              </div>
            ))}
             <div style={{ borderTop: '1px solid var(--border-color)' }}></div>
          </div>
        </div>

        <div>
          <h2 className="section-heading reveal-heading" style={{ color: 'var(--text-muted)' }}>Education</h2>
          <div className="brutalist-list" style={{ display: 'flex', flexDirection: 'column' }}>
            {academicData.map((row, i) => (
              <div key={i} className="brutalist-list-item hover-target" style={{ 
                borderTop: '2px solid var(--text-primary)', 
                padding: 'var(--spacing-md) 0', 
                display: 'flex', 
                flexWrap: 'wrap',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 'var(--spacing-sm)'
              }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', width: '100%', lineHeight: 1 }}>{row.degree}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', width: '100%', marginTop: 'var(--spacing-xs)' }}>
                    <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{row.inst}</span>
                    <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--accent)' }}>{row.result}</span>
                    {row.year && <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{row.year}</span>}
                </div>
              </div>
            ))}
            <div style={{ borderTop: '2px solid var(--text-primary)' }}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;
