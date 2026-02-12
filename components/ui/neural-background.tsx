'use client';

import { useEffect, useRef } from 'react';

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let particles: Particle[] = [];
    
    // Configuration
    const properties = {
      bgColor: 'rgba(0, 0, 0, 0)', // Transparent
      particleColor: 'rgba(249, 115, 22, 0.5)', // Orange-500
      particleRadius: 2,
      particleCount: 60, // Balanced count
      lineLength: 150,
      particleSpeed: 0.5,
    };

    // Responsive count
    if (window.innerWidth < 768) {
      properties.particleCount = 25;
    }

    class Particle {
      x: number;
      y: number;
      velocityX: number;
      velocityY: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.velocityX = (Math.random() - 0.5) * properties.particleSpeed;
        this.velocityY = (Math.random() - 0.5) * properties.particleSpeed;
      }

      position() {
        // Bounce off walls
        if (this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0) {
          this.velocityX *= -1;
        }
        if (this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0) {
          this.velocityY *= -1;
        }
        this.x += this.velocityX;
        this.y += this.velocityY;
      }

      reDraw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = properties.particleColor;
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function drawLines() {
      if (!ctx) return;
      let x1, y1, x2, y2, length, opacity;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles.length; j++) {
          x1 = particles[i].x;
          y1 = particles[i].y;
          x2 = particles[j].x;
          y2 = particles[j].y;
          
          length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          
          if (length < properties.lineLength) {
            opacity = 1 - length / properties.lineLength;
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = `rgba(249, 115, 22, ${opacity * 0.4})`; // Orange lines
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function loop() {
      if (!ctx || !canvas) return;
      
      // Clear canvas but keep transparency
      ctx.clearRect(0, 0, w, h);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].position();
        particles[i].reDraw();
      }
      drawLines();
      requestAnimationFrame(loop);
    }

    const handleResize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        // Reset particles on huge resize to avoid them being off-screen
        init();
    };

    init();
    loop();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
    />
  );
}
