import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Send, Download, Check, AlertCircle } from 'lucide-react';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
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
    let ctx = gsap.context(() => {
      gsap.from('.massive-connect-text', {
        scrollTrigger: {
          trigger: '#connect',
          start: 'top 80%'
        },
        opacity: 0,
        y: 100,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out"
      });

      gsap.from('.brutalist-contact-grid', {
        scrollTrigger: {
          trigger: '#connect',
          start: 'top 60%'
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out"
      });

      if (!isTouchDevice) {
        document.querySelectorAll('.brutalist-mag-btn').forEach(el => {
          el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const relX = e.clientX - rect.left - rect.width/2;
            const relY = e.clientY - rect.top - rect.height/2;
            
            gsap.to(el, {
              x: relX * 0.4,
              y: relY * 0.4,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          el.addEventListener('mouseleave', () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
          });
        });
      }
    });
    return () => ctx.revert();
  }, [isTouchDevice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/mkgogzje', { // Note: mkgogzje is a common placeholder or they can use their email directly if authorized
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= 500) {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section className="section connect-section" id="connect" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4vh 5vw' }}>
      
      <div style={{ marginTop: '5vh' }}>
        <h2 className="massive-connect-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0 }}>Let's</h2>
        <h2 className="massive-connect-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0, color: 'var(--accent)' }}>Connect.</h2>
      </div>

      <div className="brutalist-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-xl)' }}>
        
        <div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input 
                id="name"
                type="text" 
                name="name"
                placeholder="Your name" 
                required 
                value={formData.name}
                onChange={handleChange}
                aria-describedby="name-hint"
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid var(--border-color)', color: 'var(--text-primary)', fontSize: '1.1rem', padding: 'var(--spacing-xs) 0', outline: 'none', width: '100%' }}
              />
              <span id="name-hint" className="sr-only">Enter your full name</span>
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input 
                id="email"
                type="email" 
                name="email"
                placeholder="Your email" 
                required 
                value={formData.email}
                onChange={handleChange}
                aria-describedby="email-hint"
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid var(--border-color)', color: 'var(--text-primary)', fontSize: '1.1rem', padding: 'var(--spacing-xs) 0', outline: 'none', width: '100%' }}
              />
              <span id="email-hint" className="sr-only">Enter your email address</span>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea 
                id="message"
                name="message"
                placeholder="Your message" 
                required
                value={formData.message}
                onChange={handleChange}
                aria-describedby="message-hint message-count"
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid var(--border-color)', color: 'var(--text-primary)', fontSize: '1.1rem', padding: 'var(--spacing-xs) 0', outline: 'none', minHeight: '100px', resize: 'vertical', width: '100%' }}
              ></textarea>
              <span id="message-hint" className="sr-only">Enter your message (max 500 characters)</span>
              <span id="message-count" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right', marginTop: '0.25rem' }}>
                {formData.message.length}/500
              </span>
            </div>

            {formStatus === 'success' && (
              <div role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.9rem' }}>
                <Check size={18} />
                <span>Message sent successfully!</span>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e74c3c', fontSize: '0.9rem' }}>
                <AlertCircle size={18} />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}
            
            <button 
              type="submit" 
              className="brutalist-mag-btn submit-btn hover-target" 
              disabled={formStatus === 'submitting'}
              style={{ 
                alignSelf: 'flex-start', 
                background: 'var(--text-primary)', 
                color: 'var(--bg-color)', 
                border: 'none', 
                padding: '1rem 2rem', 
                fontSize: '1rem', 
                fontWeight: 600, 
                letterSpacing: '0.05em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                borderRadius: '100px',
                opacity: formStatus === 'submitting' ? 0.7 : 1,
                transition: 'opacity 0.2s ease'
              }}
            >
              {formStatus === 'submitting' ? (
                <>Opening...</>
              ) : (
                <><Send size={20} /> Send</>
              )}
            </button>
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', alignItems: 'flex-start' }}>
          <a href="/resume.pdf" download className="brutalist-mag-btn hover-target" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: 'var(--text-primary)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.8rem' }} aria-label="Download Resume PDF">
            <Download size={24} aria-hidden="true" /> Resume
          </a>
          <a href="https://github.com/iaaamnk" target="_blank" rel="noopener noreferrer" className="brutalist-mag-btn hover-target" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: 'var(--text-primary)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.8rem' }} aria-label="Visit GitHub Profile (opens in new tab)">
            <Github size={24} aria-hidden="true" /> Github
          </a>
          <a href="https://www.linkedin.com/in/iaaamnk/" target="_blank" rel="noopener noreferrer" className="brutalist-mag-btn hover-target" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: 'var(--text-primary)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.8rem' }} aria-label="Visit LinkedIn Profile (opens in new tab)">
            <Linkedin size={24} aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
      
      <footer style={{ marginTop: '5vh', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>© {currentYear} Anamika Vinesh</p>
        <a href="mailto:anamikavinesh12@gmail.com" className="footer-link hover-target" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)', color: 'var(--text-muted)', textDecoration: 'none' }}>
          Built with care.
        </a>
      </footer>
    </section>
  );
};

export default Connect;
