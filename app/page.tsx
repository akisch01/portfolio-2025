'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/hero';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import TechStack from '@/components/tech-stack';
import Header from '@/components/header';
import Spotlight from '@/components/ui/spotlight';
import CustomCursor from '@/components/ui/custom-cursor';
import CommandMenu from '@/components/command-menu';
import DataMonitor from '@/components/data-monitor';
import NeuralBackground from '@/components/ui/neural-background'; // Import Neural Net
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading sequence for the "App" feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white cursor-none md:cursor-none">
      
      {/* 1. Interaction Layers */}
      <Spotlight />
      <div className="hidden md:block">
         <CustomCursor />
      </div>

      {/* 2. Power User Tool */}
      <CommandMenu language={language} setLanguage={setLanguage} />

      {/* 3. Dynamic Background (Neural Net) */}
      <NeuralBackground />

      {/* 4. Global Grain Texture (Overlay) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="font-mono text-sm text-primary animate-pulse">INITIALIZING SYSTEM...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10" // Ensure content is above canvas
          >
            <Header language={language} setLanguage={setLanguage} />
            
            <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 pointer-events-none mix-blend-difference opacity-50">
              <span className="text-xs font-mono text-white">COMMAND MODE</span>
              <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 text-xs font-mono text-white">Ctrl + K</kbd>
            </div>
            
            <div className="flex flex-col gap-0">
              <Hero language={language} />
              <DataMonitor />
              <TechStack language={language} />
              <Experience language={language} />
              <Projects language={language} />
              <Certifications language={language} />
              <Contact language={language} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </main>
  );
}