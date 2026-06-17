import React, { useRef, useEffect } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Premium Config
    const config = {
      particleSize: 1.5,
      connectionDistance: 150,
      mouseConnectionDistance: 250,
      speed: 0.3,
      color: 'rgba(255, 255, 255, 0.4)',
    };

    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      // Use parent container dimensions instead of window to stay contained in Hero
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges smoothly
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, config.particleSize, 0, Math.PI * 2);
        ctx.fillStyle = config.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000); // Responsive density
      for (let i = 0; i < Math.min(count, 200); i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectionDistance) {
            const opacity = 1 - (distance / config.connectionDistance);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect and react to mouse
        const mouseDx = particles[i].x - mouse.x;
        const mouseDy = particles[i].y - mouse.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < config.mouseConnectionDistance) {
          const opacity = 1 - (mouseDistance / config.mouseConnectionDistance);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Subtle parallax pull towards mouse for interactivity
          particles[i].x -= mouseDx * 0.003;
          particles[i].y -= mouseDy * 0.003;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      // Adjust mouse coordinates relative to the canvas
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleNetwork;
