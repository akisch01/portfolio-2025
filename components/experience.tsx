'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolio';

interface ExperienceProps {
  language: 'fr' | 'en';
}

export default function Experience({ language }: ExperienceProps) {
  const experiences = PORTFOLIO_DATA.experience;
  const title = language === 'fr' ? 'PARCOURS PRO' : 'CAREER PATH';
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            {title}
          </span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-primary via-orange-500 to-red-500 origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-20 -translate-x-1/2 mt-8 shadow-[0_0_10px_rgba(251,146,60,0.5)]">
                    <div className="absolute inset-0 bg-primary/50 animate-ping rounded-full" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors duration-300">
                      
                      {/* Gradient Hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">
                          <Calendar className="w-3 h-3" />
                          {language === 'fr' ? exp.period : exp.periodEn}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {language === 'fr' ? exp.title : exp.titleEn}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{language === 'fr' ? exp.location : exp.locationEn}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {language === 'fr' ? exp.description : exp.descriptionEn}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}