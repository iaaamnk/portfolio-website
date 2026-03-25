import React, { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-main-title', { x: -50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out' })
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
        .from('.hero-actions', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
        .from('.hero-avatar-wrapper', { scale: 0.8, opacity: 0, duration: 1.5, ease: 'elastic.out(1, 0.5)' }, "-=1.2");

      gsap.to('.avatar-orbit', {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: 'none'
      });
      
      gsap.to('.avatar-orbit-reverse', {
        rotation: -360,
        duration: 30,
        repeat: -1,
        ease: 'none'
      });
    });
    return () => ctx.revert();
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="section" id="introduction" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ zIndex: 2, position: 'relative', width: '100%' }}>
        <div className="split-layout" style={{ alignItems: 'center', margin: '2rem 0' }}>
          
          <div className="hero-content-left" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            
            <div style={{ height: 'var(--spacing-md)' }}></div>

            
            <div className="hero-title-group" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <h1 className="hero-main-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1, fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                Hi, I'm
              </h1>
              
              <div className="hero-main-title" style={{ display: 'inline-block', position: 'relative', width: 'fit-content', maxWidth: '100%' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, fontWeight: 700, fontFamily: 'var(--font-body)', color: 'var(--text-primary)', letterSpacing: '-0.02em', display: 'flex', flexWrap: 'wrap', gap: '0.8rem', maxWidth: '100%' }}>
                  <span style={{ 
                    wordBreak: 'break-word', 
                    position: 'relative',
                    zIndex: 1,
                    display: 'inline-block',
                    padding: '0 0.2rem'
                  }}>
                    Anamika
                    <span style={{
                      position: 'absolute',
                      top: '-10%',
                      left: '-2%',
                      width: '104%',
                      height: '115%',
                      backgroundColor: 'var(--accent)',
                      zIndex: -1
                    }}></span>
                  </span> 
                  <span style={{ 
                    wordBreak: 'break-word', 
                    position: 'relative',
                    zIndex: 1,
                    display: 'inline-block',
                    padding: '0 0.2rem'
                  }}>
                    Vinesh
                    <span style={{
                      position: 'absolute',
                      top: '-10%',
                      left: '-2%',
                      width: '104%',
                      height: '115%',
                      backgroundColor: 'var(--accent)',
                      zIndex: -1
                    }}></span>
                  </span>
                </h1>
              </div>
            </div>

            <p className="hero-desc" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '400px', margin: 'var(--spacing-xs) 0', fontFamily: 'var(--font-body)' }}>
              ML Developer & CS Student<br/>
              India
            </p>

            <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-btn-primary hover-target" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                padding: '0.6rem 1.5rem',
                border: '1px solid var(--accent)',
                borderRadius: '50px',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease'
              }}>
                View CV <ArrowRight size={14} aria-hidden="true" />
              </a>
              
              <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
                <a href="https://github.com/iaaamnk" target="_blank" rel="noopener noreferrer" className="hero-social-btn hover-target" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', border: '1px solid var(--accent)', borderRadius: '50%',
                  color: 'var(--accent)', transition: 'all 0.3s ease'
                }} aria-label="GitHub Profile (opens in new tab)">
                  <Github size={18} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/iaaamnk/" target="_blank" rel="noopener noreferrer" className="hero-social-btn hover-target" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', border: '1px solid var(--accent)', borderRadius: '50%',
                  color: 'var(--accent)', transition: 'all 0.3s ease'
                }} aria-label="LinkedIn Profile (opens in new tab)">
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a href="#connect" className="hero-social-btn hover-target" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', border: '1px solid var(--accent)', borderRadius: '50%',
                  color: 'var(--accent)', transition: 'all 0.3s ease'
                }} aria-label="Send Email">
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            
          </div>

          <div className="hero-content-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div className="hero-avatar-wrapper" style={{ position: 'relative', width: 'clamp(150px, 25vw, 280px)', aspectRatio: '1/1' }}>
              
              <svg className="avatar-orbit" viewBox="0 0 100 100" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', zIndex: 1 }} aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="10 5" opacity="0.6" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="30 20" strokeDashoffset="15" />
              </svg>

              <svg className="avatar-orbit-reverse" viewBox="0 0 100 100" style={{ position: 'absolute', top: '-5%', left: '-5%', width: '110%', height: '110%', zIndex: 1 }} aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="none" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="5 15" opacity="0.8" />
              </svg>

              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 0 30px rgba(0,0,0,0.3)',
                backgroundColor: 'var(--card-bg)'
              }}>
                {imageError ? (
                  <div style={{ 
                    width: '100%', height: '100%', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(135deg, var(--accent), var(--text-muted))',
                    color: 'var(--bg-color)',
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic'
                  }}>
                    AV
                  </div>
                ) : (
                  <img 
                    src="/anamika_profile.png" 
                    alt="Anamika Vinesh" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={handleImageError}
                  />
                )}
                
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.4) 100%)', mixBlendMode: 'multiply' }}></div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Hero;
