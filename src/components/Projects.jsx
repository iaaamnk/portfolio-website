import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Projects = () => {
  const containerRef = React.useRef(null);

  useLayoutEffect(() => {
    const listeners = [];
    let ctx = gsap.context(() => {
      gsap.from('.reveal-heading', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 50, opacity: 0, duration: 1.2, ease: 'power3.out'
      });

      const horizontalSlider = containerRef.current.querySelector('.horizontal-slider');

      const getScrollDistance = () => {
        if (!horizontalSlider) return 0;
        // Use the pinned section's visible width (not `window.innerWidth`) since pinning depends on layout.
        // Clamp to avoid `end: "+=0"` edge cases that can cause pin start glitches.
        const visibleWidth = containerRef.current?.clientWidth ?? window.innerWidth;
        const raw = horizontalSlider.scrollWidth - visibleWidth;
        return Math.max(1, raw);
      };
      
      if (horizontalSlider) {
        gsap.to(horizontalSlider, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinType: 'transform',
            scrub: 1,
            anticipatePin: 1,
            start: 'top top',
            invalidateOnRefresh: true,
            end: () => "+=" + getScrollDistance()
          }
        });

        const images = gsap.utils.toArray('.abstract-visual', containerRef.current);
        images.forEach((img) => {
          gsap.to(img, {
            xPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: () => "+=" + getScrollDistance(),
              scrub: true,
              invalidateOnRefresh: true
            }
          });
        });
      }

      containerRef.current.querySelectorAll('.liquid-hover').forEach((el) => {
        const enter = () => { el.style.filter = "url('#liquid-filter')"; };
        const leave = () => { el.style.filter = "none"; };
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
        listeners.push({ el, enter, leave });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      // Prevent duplicate mouse handlers across React StrictMode re-mounts.
      listeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  const projectData = [
    {
      id: '01',
      title: 'Emo.AI | Sentiment Analysis System',
      shortTitle: 'Emo.AI',
      tech: 'Python, Django, DeepFace, OpenCV, TensorFlow. Built a production-level emotion detection web app with 92%+ accuracy across 7 classes. REST API response time <300ms.',
      gradient: 'linear-gradient(135deg, #2b2d42, #8d99ae)'
    },
    {
      id: '02',
      title: 'PathFinder | Career Recommendation System',
      shortTitle: 'PathFinder',
      tech: 'Python, Flask, Random Forest, HTML, CSS, JavaScript. Built ML-based recommendation system using Random Forest (84% accuracy) on 1200+ users. Implemented Holland RIASEC model.',
      gradient: 'linear-gradient(-135deg, #1d3557, #457b9d)'
    }
  ];

  return (
    <section className="section projects-section" id="projects" ref={containerRef}>
      <div className="projects-accent-bar"></div>
      <div className="container horizontal-header">
        <h2 className="section-heading reveal-heading">Featured Features</h2>
      </div>
      
      <div className="horizontal-slider" style={{ alignItems: 'center' }}>
        {projectData.map((project) => (
          <div key={project.id} className="project-slide" style={{ position: 'relative', width: '85vw', height: '60vh', padding: '0 5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ 
              position: 'absolute', 
              top: '5%', 
              left: '2vw', 
              zIndex: 10, 
              fontSize: 'clamp(2.5rem, 5vw, 5rem)', 
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              mixBlendMode: 'normal', 
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              pointerEvents: 'none',
              opacity: 0.5
            }}>
              {project.shortTitle}
            </h3>
            
            <div className="image-mask liquid-hover hover-target" style={{ height: '50vh', width: '100%', borderRadius: '0', overflow: 'hidden' }}>
              <div 
                className="abstract-visual" 
                style={{ 
                  background: project.gradient, 
                  height: '100%',
                  width: '120%', 
                  transform: 'translateX(-10%)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontFamily: 'var(--font-heading)', 
                  fontStyle: 'italic', 
                  color: 'rgba(255,255,255,0.15)', 
                  fontSize: '5rem' 
                }}
              >
                {project.id}
              </div>
            </div>
            
            <div className="project-info" style={{ marginTop: '1.5rem', maxWidth: '600px', alignSelf: 'flex-end', textAlign: 'right' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>{project.title.split('|')[1]?.trim() || project.title}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
