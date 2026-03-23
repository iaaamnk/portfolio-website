import React, { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

const Projects = () => {
  const containerRef = React.useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useLayoutEffect(() => {
    const checkTouch = () => {
      const hasCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      setIsTouchDevice(hasCoarsePointer);
    };
    
    checkTouch();
    
    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    const handleChange = (e) => setIsTouchDevice(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useLayoutEffect(() => {
    const listeners = [];
    let ctx = gsap.context(() => {
      const horizontalSlider = containerRef.current?.querySelector('.horizontal-slider');
      
      if (!horizontalSlider) return;
      
      const getScrollDistance = () => {
        const visibleWidth = containerRef.current?.clientWidth ?? window.innerWidth;
        const raw = horizontalSlider.scrollWidth - visibleWidth;
        return Math.max(1, raw);
      };
      
      if (!isTouchDevice) {
        gsap.from('.reveal-heading', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%'
          },
          y: 50, opacity: 0, duration: 1.2, ease: 'power3.out'
        });
        
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
      } else {
        gsap.from('.reveal-heading', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%'
          },
          y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
        });
        
        gsap.from('.project-slide', {
          scrollTrigger: {
            trigger: '.horizontal-slider',
            start: 'top 80%'
          },
          y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out'
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
      listeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [isTouchDevice]);

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
      
      <div className="horizontal-slider">
        {projectData.map((project) => (
          <div key={project.id} className="project-slide">
            <h3 style={{ 
              position: 'absolute', 
              top: '5%', 
              left: '5%', 
              zIndex: 10, 
              fontSize: 'clamp(2rem, 5vw, 4rem)', 
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
            
            <div className="image-mask liquid-hover hover-target">
              <div 
                className="abstract-visual" 
                style={{ 
                  background: project.gradient, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontFamily: 'var(--font-heading)', 
                  fontStyle: 'italic', 
                  color: 'rgba(255,255,255,0.15)', 
                  fontSize: 'clamp(3rem, 8vw, 5rem)'
                }}
              >
                {project.id}
              </div>
            </div>
            
            <div className="project-info">
              <h4 style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>{project.title.split('|')[1]?.trim() || project.title}</h4>
              <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', color: 'var(--text-muted)', lineHeight: 1.5 }}>{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
