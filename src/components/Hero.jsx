import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-sub-label', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from('.hero-main-title', { x: -50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, "-=0.4")
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

  return (
    <section className="section" id="introduction" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ zIndex: 2, position: 'relative', width: '100%' }}>
        <div className="split-layout" style={{ alignItems: 'center', margin: '2rem 0' }}>
          
          <div className="hero-content-left" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <p className="hero-sub-label" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Software Engineer
            </p>
            
            <div className="hero-title-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <h1 className="hero-main-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1, fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                Hello I'm
              </h1>
              
              <div className="hero-main-title" style={{ display: 'inline-block', position: 'relative', width: 'fit-content' }}>
                <div style={{
                  position: 'absolute',
                  top: '-10%',
                  left: '-2%',
                  width: 'calc(100% * 0.5)',
                  height: '120%',
                  backgroundColor: 'var(--accent)',
                  zIndex: -1
                }}></div>
                <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1, fontWeight: 700, fontFamily: 'var(--font-body)', color: 'var(--text-primary)', letterSpacing: '-0.02em', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  <span>Anamika</span> <span>Vinesh</span>
                </h1>
              </div>
            </div>

            <p className="hero-desc" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '400px', margin: '0.5rem 0', fontFamily: 'var(--font-body)' }}>
              Machine Learning Developer & CS Undergrad<br/>
              Predictive Analytics | Computer Vision<br/>
              India
            </p>

            <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#connect" className="hero-btn-primary hover-target" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '0.6rem 1.5rem',
                border: '1px solid var(--accent)',
                borderRadius: '50px',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}>
                View CV <ArrowRight size={14} />
              </a>
              
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a href="https://github.com/iaaamnk" target="_blank" rel="noreferrer" className="hero-social-btn hover-target" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', border: '1px solid var(--accent)', borderRadius: '50%',
                  color: 'var(--accent)', transition: 'all 0.3s ease'
                }}>
                  <Github size={18} />
                </a>
                <a href="http://www.linkedin.com/in/iaaamnk" target="_blank" rel="noreferrer" className="hero-social-btn hover-target" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', border: '1px solid var(--accent)', borderRadius: '50%',
                  color: 'var(--accent)', transition: 'all 0.3s ease'
                }}>
                  <Linkedin size={18} />
                </a>
                <a href="#connect" className="hero-social-btn hover-target" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', border: '1px solid var(--accent)', borderRadius: '50%',
                  color: 'var(--accent)', transition: 'all 0.3s ease'
                }}>
                  <Mail size={18} />
                </a>
              </div>
            </div>
            
          </div>

          <div className="hero-content-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div className="hero-avatar-wrapper" style={{ position: 'relative', width: 'clamp(150px, 25vw, 280px)', aspectRatio: '1/1' }}>
              
              <svg className="avatar-orbit" viewBox="0 0 100 100" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', zIndex: 1 }}>
                <circle cx="50" cy="50" r="48" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="10 5" opacity="0.6" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="30 20" strokeDashoffset="15" />
              </svg>

              <svg className="avatar-orbit-reverse" viewBox="0 0 100 100" style={{ position: 'absolute', top: '-5%', left: '-5%', width: '110%', height: '110%', zIndex: 1 }}>
                <circle cx="50" cy="50" r="48" fill="none" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="5 15" opacity="0.8" />
              </svg>

              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 0 30px rgba(0,0,0,0.3)',
                backgroundColor: 'var(--bg-color)'
              }}>
                <img src="/cat_avatar.png" alt="Anamika Vinesh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
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
