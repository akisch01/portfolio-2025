'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, Code2, Database, Sparkles, Terminal, Cpu, Globe } from 'lucide-react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import MagneticButton from './ui/magnetic-button';

interface HeroProps {
  language: 'fr' | 'en';
}

export default function Hero({ language }: HeroProps) {
  const content = PORTFOLIO_DATA.hero[language];
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax & Mouse movement logic
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct * 200);
      y.set(yPct * 200);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
      
      {/* Floating Orbs */}
      <motion.div 
        style={{ y: y1, x: -100 }} 
        className="absolute top-1/4 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        style={{ y: y2, x: 100 }} 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-[100px]" 
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-mono text-primary"
              >
                <Terminal className="w-4 h-4" />
                <span>v3.0.0 // Ready to Deploy</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                  {content.greeting}
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-red-500">
                  {content.name}
                </span>
              </h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              {content.bio}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(251,146,60,0.5)] transition-shadow"
                >
                  {content.scrollText}
                </button>
              </MagneticButton>
              
              <MagneticButton>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors font-medium text-lg"
                >
                  Contact Me
                </button>
              </MagneticButton>
            </motion.div>

            {/* Tech Stack Mini-Ticker */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm font-mono text-muted-foreground mb-4">Core Stack</p>
              <div className="flex gap-6 text-muted-foreground/50">
                <Code2 className="w-8 h-8 hover:text-primary transition-colors" />
                <Database className="w-8 h-8 hover:text-orange-400 transition-colors" />
                <Cpu className="w-8 h-8 hover:text-red-400 transition-colors" />
                <Globe className="w-8 h-8 hover:text-amber-200 transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* Right Visual (3D Tilt Card) */}
          <motion.div 
            style={{ perspective: 1000 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <motion.div
              style={{ rotateX, rotateY, z: 100 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl shadow-orange-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-red-500/10 mix-blend-overlay" />
              
              {/* Image Placeholder */}
              <div className="relative w-full h-full">
                <Image
                   src="/placeholder-user.jpg"
                   alt="Profile"
                   fill
                   className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                
                {/* Overlay UI Elements */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                        <Sparkles className="w-6 h-6 text-primary" />
                     </div>
                     <div>
                        <p className="text-sm font-mono text-primary">Status</p>
                        <p className="font-bold text-white">{content.availability}</p>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}