'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Home, User, Code2, Briefcase, Mail, Globe, Award } from 'lucide-react';

interface HeaderProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  // Hide header when at very top, show after scroll
  const y = useTransform(scrollY, [0, 100], [-100, 0]);
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'stack', icon: Code2, label: 'Stack' },
    { id: 'experience', icon: Briefcase, label: 'Exp' },
    { id: 'projects', icon: User, label: 'Work' },
    { id: 'certifications', icon: Award, label: 'Certs' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.header 
      style={{ y, opacity }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] md:max-w-[90vw]"
    >
      <nav className="flex items-center gap-1 p-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-orange-900/10 overflow-x-auto no-scrollbar">
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-white'}`}
            >
              <Icon className="w-5 h-5 relative z-10" />
              <span className={`text-sm font-medium relative z-10 hidden md:block ${isActive ? 'block' : 'hidden group-hover:block'}`}>
                {item.label}
              </span>
              
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}

        <div className="w-px h-6 bg-white/10 mx-2" />

        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="px-3 py-2 rounded-full text-xs font-mono font-bold border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Globe className="w-4 h-4" />
          {language.toUpperCase()}
        </button>

      </nav>
    </motion.header>
  );
}