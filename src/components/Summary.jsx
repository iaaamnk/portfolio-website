import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const categories = [
  {
    title: 'Languages',
    skills: ['C++(DSA)', 'Python', 'C', 'Java(OOP)'],
    type: 'technical'
  },
  {
    title: 'Technologies',
    skills: ['Django', 'Node.js', 'Bootstrap', 'Flask'],
    type: 'technical'
  },
  {
    title: 'Tools/Platforms',
    skills: ['Docker', 'Google Colab', 'RESTful APIs', 'Git'],
    type: 'technical'
  },
  {
    title: 'Machine Learning',
    skills: ['NumPy', 'Pandas', 'TensorFlow', 'OpenCV', 'DeepFace', 'Scikit-learn', 'Keras'],
    type: 'technical'
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Analytical Thinking', 'Adaptability', 'Time Management'],
    type: 'soft'
  }
];

const Summary = () => {
  const summaryText = "I am a Computer Science undergraduate specializing in Machine Learning and full-stack AI applications. My work focuses on creating practical ML solutions, including real-time emotion recognition systems and AI-driven career recommendation platforms. I am passionate about building scalable, high-impact intelligent systems.";

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
        end: 'bottom 70%',
        scrub: true
      },
      opacity: 1,
      color: 'var(--text-primary)',
      stagger: 0.05
    });
  }, []);

  return (
    <section className="section" id="summary">
      <div className="summary-content container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="summary-header">
          <h2 className="section-heading reveal-heading" style={{ marginBottom: '2rem' }}>Summary</h2>
          <div className="text-block">
            <p className="scrub-text" style={{ fontWeight: 400, fontSize: 'clamp(1rem, 2vw, 1.8rem)', lineHeight: 1.6, maxWidth: '1200px' }}>
              {summaryText.split(' ').map((word, i) => (
                <span key={i} className="scrub-word" style={{ opacity: 0.4, color: 'var(--text-muted)' }}>{word} </span>
              ))}
            </p>
          </div>
        </div>

        <div className="skills-container">
          <h3 className="skills-main-heading">Skills</h3>
          
          {categories.map((category, index) => (
            <div key={index} className="skill-category">
              <h4 className="skill-category-title">{category.title}</h4>
              
              {category.type === 'technical' ? (
                <div className="skill-pills">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-pill hover-target">
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="soft-skills">
                  {category.skills.map((skill, i) => (
                    <span key={skill}>
                      {skill}{i < category.skills.length - 1 && <span className="soft-skill-separator"> · </span>}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
