// --- Lenis Smooth Scrolling Initialization ---
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // EaseOutExpo
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1.2,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Connect ScrollTrigger to Lenis
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);


// --- Custom Magnetic Cursor ---
const cursor = document.querySelector('.cursor');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Smoothly follow the mouse pointer
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    gsap.to(cursor, {
        x: mouseX, 
        y: mouseY,
        duration: 0.15,
        ease: "power2.out"
    });
});

// Magnetic Buttons & Toggle
document.querySelectorAll('.mag-btn, .theme-toggle, .image-mask, .massive-text').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover-large'));
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover-large');
        gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" }); // snap back
    });
    
    // Magnetic pull effect
    if(el.classList.contains('mag-btn') || el.classList.contains('theme-toggle')) {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const relX = e.clientX - rect.left - rect.width/2;
            const relY = e.clientY - rect.top - rect.height/2;
            
            gsap.to(el, {
                x: relX * 0.3,
                y: relY * 0.3,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    }
});


// --- Theme Toggle Logic ---
const themeToggle = document.getElementById('theme-toggle');
let isDarkTheme = false;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
});


// --- Base Canvas background (Subtle ethereal fluid mist) ---
const canvas = document.getElementById('atmosphere-canvas');
const ctx = canvas.getContext('2d');
let cw = canvas.width = window.innerWidth;
let ch = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
});

let time = 0;
function drawEtherealBackground() {
    time += 0.002;
    // Base clear
    if (isDarkTheme) {
        ctx.fillStyle = '#050505'; // Deep dark background
    } else {
        ctx.fillStyle = '#fafbfd'; // Light background
    }
    ctx.fillRect(0, 0, cw, ch);
    
    if (isDarkTheme) {
        // Dark Mode Ethereal Mist (subtle deep cyan/blue)
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
        
        // Dark mode mouse reaction (faint blue glow)
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300);
        mouseGlow.addColorStop(0, 'rgba(40, 50, 60, 0.5)');
        mouseGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0,0,cw,ch);

    } else {
        // Light Mode Ethereal Mist (subtle pastel)
        const cx1 = Math.sin(time) * cw * 0.3 + cw/2;
        const cy1 = Math.cos(time * 0.8) * ch * 0.3 + ch/2;
        const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, cw * 0.6);
        g1.addColorStop(0, 'rgba(215, 225, 235, 0.4)'); // pale blue
        g1.addColorStop(1, 'rgba(250, 251, 253, 0)');
        ctx.fillStyle = g1;
        ctx.fillRect(0,0,cw,ch);

        const cx2 = Math.cos(time * 1.2) * cw * 0.4 + cw/2;
        const cy2 = Math.sin(time * 0.9) * ch * 0.4 + ch/2;
        const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, cw * 0.5);
        g2.addColorStop(0, 'rgba(225, 215, 225, 0.3)'); // pale dusty rose
        g2.addColorStop(1, 'rgba(250, 251, 253, 0)');
        ctx.fillStyle = g2;
        ctx.fillRect(0,0,cw,ch);
        
        // Light mode mouse reaction (faint silver glow)
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300);
        mouseGlow.addColorStop(0, 'rgba(240, 245, 250, 0.8)');
        mouseGlow.addColorStop(1, 'rgba(250, 251, 253, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0,0,cw,ch);
    }

    requestAnimationFrame(drawEtherealBackground);
}
drawEtherealBackground();


// --- GSAP Timeline Animations ---

// 1. Initial Page Load Animation
const tl = gsap.timeline();

tl.to('body', { opacity: 1, duration: 0.1 })
  .from('.subtitle', { y: 20, opacity: 0, duration: 1, ease: 'power3.out' }, "+=0.2")
  // Text line splitting reveal (using the span wrappers we built in HTML)
  .from('.huge-title .word', {
      y: '120%', // Slide up from out of the hidden container
      duration: 1.4,
      stagger: 0.15,
      ease: 'expo.out'
  }, "-=0.8")
  .from('.scroll-down', { opacity: 0, duration: 1 }, "-=0.5");


// 2. Intro Fuji Parallax
gsap.to('.fuji-parallax-wrapper', {
    y: '50%', // Move down at half speed of scroll
    ease: 'none',
    scrollTrigger: {
        trigger: '#introduction',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});


// 3. Summary Section (Koi SVG Path interaction & Text Reveal)
gsap.from('#summary .reveal-heading', {
    scrollTrigger: {
        trigger: '#summary',
        start: 'top 75%'
    },
    y: 50, opacity: 0, duration: 1.2, ease: 'power3.out'
});

gsap.from('#summary .text-block p, #summary li', {
    scrollTrigger: {
        trigger: '#summary',
        start: 'top 65%'
    },
    y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out'
});

// Animate Koi along path exactly tied to scroll percentage within the section
gsap.to('#koi-1', {
    scrollTrigger: {
        trigger: '#summary',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1 // smooth scrubbing
    },
    motionPath: {
        path: "#koi-motion-path",
        align: "#koi-motion-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    ease: "none"
});


// 4. Milestones (Sakura Canvas & Timeline stretching)
const tlMilestone = gsap.timeline({
    scrollTrigger: {
        trigger: '#milestones',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1
    }
});

// Stretch the vertical line down as we scroll
tlMilestone.to('.milestone-line', { scaleY: 1, ease: "none" });

// Sub-triggers to fade in the milestone items when they hit the viewport center
document.querySelectorAll('.milestone-item').forEach((item, i) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
        },
        opacity: 1,
        x: 0, // In HTML they are positioned, here we just fade/nudge them inward
        ease: "power1.inOut"
    });
});

// Simple Sakura Particle Canvas strictly for this section
const sakuraCanvas = document.getElementById('sakura-canvas');
const sCtx = sakuraCanvas.getContext('2d');
sakuraCanvas.width = window.innerWidth;
sakuraCanvas.height = window.innerHeight;

// Resize listener specifically for sakura canvas
window.addEventListener('resize', () => {
    sakuraCanvas.width = window.innerWidth;
    sakuraCanvas.height = window.innerHeight;
});

let particles = Array.from({length: 40}, () => ({
    // Spawn near the tree branch on the left
    x: Math.random() * (sakuraCanvas.width * 0.3) - 100,
    y: Math.random() * (sakuraCanvas.height * 0.4) + sakuraCanvas.height * 0.1,
    size: Math.random() * 5 + 2,
    speedY: Math.random() * 0.8 + 0.3,
    speedX: Math.random() * 1.5 + 0.5, // Always moving right and down
    angle: Math.random() * Math.PI * 2,
    spin: Math.random() * 0.05 - 0.02,
    // Spiral mechanics
    spiralRadius: Math.random() * 40 + 10,
    spiralSpeed: Math.random() * 0.04 + 0.01,
    baseY: 0
}));

// Initialize baseY for spiral math
particles.forEach(p => p.baseY = p.y);

let sakuraTime = 0;

function drawMinimalTree(ctx) {
    ctx.save();
    
    // Very minimal, delicate ink-wash style branch coming from top left
    ctx.strokeStyle = isDarkTheme ? 'rgba(200, 205, 210, 0.5)' : 'rgba(120, 125, 130, 0.4)';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    
    // Main branch
    ctx.beginPath();
    ctx.moveTo(0, sakuraCanvas.height * 0.2);
    ctx.quadraticCurveTo(sakuraCanvas.width * 0.15, sakuraCanvas.height * 0.3, sakuraCanvas.width * 0.3, sakuraCanvas.height * 0.15);
    ctx.stroke();
    
    // Sub branch 1
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(sakuraCanvas.width * 0.1, sakuraCanvas.height * 0.26);
    ctx.quadraticCurveTo(sakuraCanvas.width * 0.15, sakuraCanvas.height * 0.1, sakuraCanvas.width * 0.2, sakuraCanvas.height * 0.05);
    ctx.stroke();
    
    // Sub branch 2
    ctx.beginPath();
    ctx.moveTo(sakuraCanvas.width * 0.2, sakuraCanvas.height * 0.23);
    ctx.quadraticCurveTo(sakuraCanvas.width * 0.3, sakuraCanvas.height * 0.28, sakuraCanvas.width * 0.35, sakuraCanvas.height * 0.25);
    ctx.stroke();

    ctx.restore();
}

function animateSakura() {
    sakuraTime += 1;
    sCtx.clearRect(0, 0, sakuraCanvas.width, sakuraCanvas.height);
    
    drawMinimalTree(sCtx);
    
    particles.forEach(p => {
        // Move base position
        p.x += p.speedX;
        p.baseY += p.speedY;
        
        // Add spiral math (sine/cosine around the base trajectory)
        p.y = p.baseY + Math.sin(sakuraTime * p.spiralSpeed) * p.spiralRadius;
        p.x += Math.cos(sakuraTime * p.spiralSpeed) * (p.spiralRadius * 0.02); // slight horizontal spiral wobble
        
        p.angle += p.spin;
        
        // Reset if off-screen (bottom or right)
        if(p.y > sakuraCanvas.height + 50 || p.x > sakuraCanvas.width + 50) {
            // Respawn back at the tree
            p.x = Math.random() * (sakuraCanvas.width * 0.1) - 50;
            p.baseY = Math.random() * (sakuraCanvas.height * 0.3) + sakuraCanvas.height * 0.1;
        }
        
        sCtx.save();
        sCtx.translate(p.x, p.y);
        sCtx.rotate(p.angle);
        
        if (isDarkTheme) {
            sCtx.fillStyle = 'rgba(255, 170, 190, 0.7)'; // Brighter pastel pink for dark mode
        } else {
            sCtx.fillStyle = 'rgba(240, 160, 180, 0.8)'; // Soft pink for light mode
        }
        
        sCtx.beginPath();
        sCtx.moveTo(0, 0);
        sCtx.quadraticCurveTo(p.size, p.size, 0, p.size * 2);
        sCtx.quadraticCurveTo(-p.size, p.size, 0, 0);
        sCtx.fill();
        sCtx.restore();
    });
    requestAnimationFrame(animateSakura);
}
animateSakura();


// 5. Projects (Horizontal pinning & Reveal)
gsap.from('#projects .reveal-heading', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%'
    },
    y: 50, opacity: 0, duration: 1.2, ease: 'power3.out'
});

const horizontalSlider = document.querySelector('.horizontal-slider');
if (horizontalSlider) {
    gsap.to(horizontalSlider, {
        x: () => -(horizontalSlider.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll-container",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            end: () => "+=" + (horizontalSlider.scrollWidth - window.innerWidth)
        }
    });
}

// Apply SVG Liquid Hover Filter on Project Images
document.querySelectorAll('.liquid-hover').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.filter = "url('#liquid-filter')";
    });
    el.addEventListener('mouseleave', () => {
        el.style.filter = "none";
    });
});


// 6. Marks (Giant Moon scrubbing up) & Aquarium Koi
gsap.to('.giant-moon', {
    scrollTrigger: {
        trigger: '#marks',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    },
    y: '-50vh', // Rise up significantly
    scale: 1.2,
    ease: "none"
});

// Aquarium Koi Simulation
const aquariumCanvas = document.getElementById('aquarium-canvas');
const aCtx = aquariumCanvas.getContext('2d');
aquariumCanvas.width = window.innerWidth;
aquariumCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    aquariumCanvas.width = window.innerWidth;
    aquariumCanvas.height = window.innerHeight;
});

class AquariumKoi {
    constructor(isBlack) {
        this.isBlack = isBlack;
        this.angle = isBlack ? 0 : Math.PI; 
        this.baseRadius = 180;
        this.x = aquariumCanvas.width/2;
        this.y = aquariumCanvas.height/2;
        this.history = [];
        this.maxHistory = 45; // slightly longer body
        this.swimSpeed = 0.012;
    }
    update(timeMillis) {
        this.angle += this.swimSpeed;
        
        // Add spiral/organic wobble
        const currentRadius = this.baseRadius + Math.sin(timeMillis * 0.001 + (this.isBlack?0:Math.PI)) * 40;
        
        // Center around the rising moon (approx center of screen)
        const centerX = aquariumCanvas.width / 2;
        const centerY = aquariumCanvas.height * 0.55; 
        
        this.x = centerX + Math.cos(this.angle) * currentRadius * 1.5; // Elongated horizontal
        this.y = centerY + Math.sin(this.angle) * currentRadius * 0.8;
        
        this.history.unshift({x: this.x, y: this.y});
        if (this.history.length > this.maxHistory) this.history.pop();
    }
    draw(ctx) {
        if (this.history.length < 5) return;
        
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        
        let bodyRgb, accentRgb, eyeRgb;
        if (this.isBlack) {
            // Dark koi: ensure it's visible in dark mode by adding subtle depth
            bodyRgb = isDarkTheme ? '40, 45, 50' : '20, 25, 30'; 
            accentRgb = '60, 65, 70';
            eyeRgb = '255, 255, 255';
        } else {
            // Light koi: ensure it's visible in light mode by adding subtle shading
            bodyRgb = isDarkTheme ? '255, 255, 255' : '230, 235, 240'; 
            accentRgb = '200, 205, 210';
            eyeRgb = '0, 0, 0';
        }
        
        // Draw body segments with taper and fins
        for (let i = 0; i < this.history.length; i++) {
            const p = this.history[i];
            const size = Math.max(0.1, (this.history.length - i) / this.history.length * 18);
            const alpha = (1 - i/this.maxHistory) * 0.7;
            
            if (i > 0) {
                const prev = this.history[i-1];
                ctx.beginPath();
                ctx.moveTo(prev.x, prev.y);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = `rgba(${bodyRgb}, ${alpha})`;
                ctx.lineWidth = size;
                ctx.stroke();
            }

            // Draw Pectoral Fins at a specific body segment (around segment 6)
            if (i === 6) {
                const next = this.history[i+1];
                if (next) {
                    const angle = Math.atan2(next.y - p.y, next.x - p.x);
                    this.drawFin(ctx, p.x, p.y, angle + Math.PI/2, size * 1.5, alpha, bodyRgb);
                    this.drawFin(ctx, p.x, p.y, angle - Math.PI/2, size * 1.5, alpha, bodyRgb);
                }
            }
            
            // Draw Dorsal Fin (along the center segments)
            if (i > 5 && i < 20 && i % 4 === 0) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, size * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${accentRgb}, ${alpha * 0.5})`;
                ctx.fill();
            }
        }
        
        // Head definition
        const head = this.history[0];
        const next = this.history[1];
        const headAngle = Math.atan2(head.y - next.y, head.x - next.x);
        
        // Draw head shape
        ctx.save();
        ctx.translate(head.x, head.y);
        ctx.rotate(headAngle);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, 15, 10, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bodyRgb}, 0.9)`;
        // Add subtle shadow/glow depending on background
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${accentRgb}, 0.4)`;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Eyes
        ctx.beginPath();
        ctx.arc(6, -5, 2, 0, Math.PI * 2);
        ctx.arc(6, 5, 2, 0, Math.PI * 2);
        ctx.fillStyle = eyeRgb;
        ctx.fill();
        
        ctx.restore();
    }
    
    drawFin(ctx, x, y, angle, size, alpha, rgb) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(size * 2, size, size * 1.5, size * 2);
        ctx.lineTo(0, size * 0.5);
        ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.6})`;
        ctx.fill();
        ctx.restore();
    }
}

const aquariumKois = [new AquariumKoi(true), new AquariumKoi(false)];

function animateAquarium(time) {
    aCtx.clearRect(0, 0, aquariumCanvas.width, aquariumCanvas.height);
    
    aquariumKois.forEach(k => {
        k.update(time);
        k.draw(aCtx);
    });
    
    requestAnimationFrame(animateAquarium);
}
requestAnimationFrame(animateAquarium);


gsap.from('.table-row:not(.head)', {
    scrollTrigger: {
        trigger: '.elegant-table',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 1,
    ease: "power2.out"
});

// 7. Connect (Scale up and pin)
gsap.from('.massive-text', {
    scrollTrigger: {
        trigger: '#connect',
        start: 'top 80%'
    },
    opacity: 0,
    y: 100,
    rotateX: 15,
    duration: 1.5,
    ease: "expo.out"
});

gsap.from('.fade-up', {
    scrollTrigger: {
        trigger: '#connect',
        start: 'top 70%'
    },
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 1.2,
    ease: "power3.out"
});
