import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Projects = () => {
  const containerRef = React.useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.reveal-heading', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 50, opacity: 0, duration: 1.2, ease: 'power3.out'
      });

      const horizontalSlider = containerRef.current.querySelector('.horizontal-slider');
      let scrollTween;
      
      if (horizontalSlider) {
        scrollTween = gsap.to(horizontalSlider, {
          x: () => -(horizontalSlider.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            end: () => "+=" + (horizontalSlider.scrollWidth - window.innerWidth)
          }
        });

        // Internal Image Parallax
        const images = gsap.utils.toArray('.abstract-visual', containerRef.current);
        images.forEach((img) => {
          gsap.to(img, {
            xPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: () => "+=" + (horizontalSlider.scrollWidth - window.innerWidth),
              scrub: true,
            }
          });
        });
      }

      containerRef.current.querySelectorAll('.liquid-hover').forEach(el => {
        const enter = () => el.style.filter = "url('#liquid-filter')";
        const leave = () => el.style.filter = "none";
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    }, containerRef);

    return () => ctx.revert();
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
    <section className="section horizontal-scroll-container" id="projects" ref={containerRef} style={{ background: 'var(--text-primary)', color: 'var(--bg-color)', paddingTop: '8vh' }}>
      <div className="container horizontal-header">
        <h2 className="section-heading reveal-heading" style={{ color: 'var(--bg-color)', marginBottom: '3vh' }}>Featured Features</h2>
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
              mixBlendMode: 'difference', 
              color: '#ffffff',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              pointerEvents: 'none'
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
                  color: 'rgba(255,255,255,0.1)', 
                  fontSize: '5rem' 
                }}
              >
                {project.id}
              </div>
            </div>
            
            <div className="project-info" style={{ marginTop: '1.5rem', maxWidth: '600px', alignSelf: 'flex-end', textAlign: 'right' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'var(--bg-color)' }}>{project.title.split('|')[1]?.trim() || project.title}</h4>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
