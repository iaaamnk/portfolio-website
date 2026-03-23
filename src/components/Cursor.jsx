import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Smooth trailing effect
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    // Hover state management
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hover-target, h1, h2')) {
        cursor.classList.add('hover-large');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .hover-target, h1, h2')) {
        cursor.classList.remove('hover-large');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
};

export default Cursor;
