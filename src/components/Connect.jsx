import React, { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Send, Download } from 'lucide-react';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      // Refined Magnetic pull effect
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
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = `Message from ${formData.name}`;
    const body = `${formData.message}\n\nFrom: ${formData.email}`;
    window.location.href = `mailto:anamikavinesh12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section connect-section" id="connect" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4vh 5vw' }}>
      
      <div style={{ marginTop: '5vh' }}>
        <h2 className="massive-connect-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0 }}>Let's</h2>
        <h2 className="massive-connect-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0, color: 'var(--accent)' }}>Connect.</h2>
      </div>

      <div className="brutalist-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '6vh' }}>
        
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="YOUR NAME" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.2)', color: 'var(--bg-color)', fontSize: '1.1rem', padding: '0.8rem 0', outline: 'none', textTransform: 'uppercase' }}
            />
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.2)', color: 'var(--bg-color)', fontSize: '1.1rem', padding: '0.8rem 0', outline: 'none', textTransform: 'uppercase' }}
            />
            <textarea 
              placeholder="YOUR MESSAGE" 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              style={{ background: 'transparent', border: 'none', borderBottom: '2px solid rgba(255,255,255,0.2)', color: 'var(--bg-color)', fontSize: '1.1rem', padding: '0.8rem 0', outline: 'none', minHeight: '100px', textTransform: 'uppercase', resize: 'vertical' }}
            ></textarea>
            <button type="submit" className="brutalist-mag-btn hover-target" disabled={isSubmitting} style={{ 
              alignSelf: 'flex-start', 
              background: 'var(--bg-color)', 
              color: 'var(--text-primary)', 
              border: 'none', 
              padding: '1rem 2rem', 
              fontSize: '1rem', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              borderRadius: '100px'
            }}>
              {isSubmitting ? 'Sending...' : <><Send size={20} /> Send</>}
            </button>
          </form>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-start' }}>
          <a href="/Anamika_Vinesh_Resume.pdf" download className="brutalist-mag-btn hover-target" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: 'var(--bg-color)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Download size={24} /> Resume
          </a>
          <a href="https://github.com/iaaamnk" target="_blank" rel="noopener noreferrer" className="brutalist-mag-btn hover-target" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: 'var(--bg-color)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Github size={24} /> Github
          </a>
          <a href="http://www.linkedin.com/in/iaaamnk" target="_blank" rel="noopener noreferrer" className="brutalist-mag-btn hover-target" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', color: 'var(--bg-color)', textDecoration: 'none', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Linkedin size={24} /> LinkedIn
          </a>
        </div>
      </div>
      
      <footer style={{ marginTop: '5vh', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.5)' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>© 2026 Anamika Vinesh</p>
        <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>Built with ML Mastery.</p>
      </footer>
    </section>
  );
};

export default Connect;
