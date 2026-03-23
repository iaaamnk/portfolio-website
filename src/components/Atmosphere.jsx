import React, { useEffect, useRef } from 'react';

const Atmosphere = ({ isDarkMode }) => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let cw = canvas.width = window.innerWidth;
    let ch = canvas.height = window.innerHeight;
    let time = 0;
    let animationFrameId;

    const handleResize = () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      time += 0.002;
      
      if (isDarkMode) {
        ctx.fillStyle = '#050505';
      } else {
        ctx.fillStyle = '#fafbfd';
      }
      ctx.fillRect(0, 0, cw, ch);

      if (isDarkMode) {
        // Dark Mode Ethereal Mist
        const cx1 = Math.sin(time) * cw * 0.3 + cw/2;
        const cy1 = Math.cos(time * 0.8) * ch * 0.3 + ch/2;
        const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, cw * 0.6);
        g1.addColorStop(0, 'rgba(15, 25, 35, 0.8)');
        g1.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = g1;
        ctx.fillRect(0,0,cw,ch);

        const cx2 = Math.cos(time * 1.2) * cw * 0.4 + cw/2;
        const cy2 = Math.sin(time * 0.9) * ch * 0.4 + ch/2;
        const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, cw * 0.5);
        g2.addColorStop(0, 'rgba(20, 15, 30, 0.6)'); 
        g2.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = g2;
        ctx.fillRect(0,0,cw,ch);
        
        const mouseGlow = ctx.createRadialGradient(mousePos.current.x, mousePos.current.y, 0, mousePos.current.x, mousePos.current.y, 300);
        mouseGlow.addColorStop(0, 'rgba(40, 50, 60, 0.5)');
        mouseGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0,0,cw,ch);

      } else {
        // Light Mode Ethereal Mist
        const cx1 = Math.sin(time) * cw * 0.3 + cw/2;
        const cy1 = Math.cos(time * 0.8) * ch * 0.3 + ch/2;
        const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, cw * 0.6);
        g1.addColorStop(0, 'rgba(215, 225, 235, 0.4)');
        g1.addColorStop(1, 'rgba(250, 251, 253, 0)');
        ctx.fillStyle = g1;
        ctx.fillRect(0,0,cw,ch);

        const cx2 = Math.cos(time * 1.2) * cw * 0.4 + cw/2;
        const cy2 = Math.sin(time * 0.9) * ch * 0.4 + ch/2;
        const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, cw * 0.5);
        g2.addColorStop(0, 'rgba(225, 215, 225, 0.3)');
        g2.addColorStop(1, 'rgba(250, 251, 253, 0)');
        ctx.fillStyle = g2;
        ctx.fillRect(0,0,cw,ch);
        
        const mouseGlow = ctx.createRadialGradient(mousePos.current.x, mousePos.current.y, 0, mousePos.current.x, mousePos.current.y, 300);
        mouseGlow.addColorStop(0, 'rgba(240, 245, 250, 0.8)');
        mouseGlow.addColorStop(1, 'rgba(250, 251, 253, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0,0,cw,ch);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return <canvas ref={canvasRef} id="atmosphere-canvas"></canvas>;
};

export default Atmosphere;
