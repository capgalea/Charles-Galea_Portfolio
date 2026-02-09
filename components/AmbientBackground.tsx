
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class for "Antigravity" effect (floating upwards)
    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2; // Small dust-like particles
        this.speedY = Math.random() * 0.3 + 0.05; // Slow upward float
        this.speedX = (Math.random() - 0.5) * 0.2; // Slight horizontal drift
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y -= this.speedY; // Antigravity: move up
        this.x += this.speedX;

        // Reset if out of bounds
        if (this.y < -10) {
            this.y = height + 10;
            this.x = Math.random() * width;
        }
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(200, 230, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth * 0.15, 100); 

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    let animationFrameId: number;
    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#020617]">
        {/* Deep space base */}
        
        {/* Animated Gradient Blobs */}
        <motion.div 
            animate={{
                x: [0, 50, -50, 0],
                y: [0, -30, 30, 0],
                scale: [1, 1.1, 0.9, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-900/10 rounded-full blur-[100px]" 
        />
        <motion.div 
            animate={{
                x: [0, -30, 30, 0],
                y: [0, 50, -50, 0],
                scale: [1, 1.2, 0.8, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] right-[-20%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[100px]" 
        />
        <motion.div 
            animate={{
                x: [0, 40, -40, 0],
                y: [0, 20, -20, 0],
                opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[70vw] bg-indigo-900/10 rounded-full blur-[120px]" 
        />

        {/* Canvas for Particles */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
};

export default AmbientBackground;
