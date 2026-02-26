'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { useState } from 'react';

interface ProjectsProps {
  language: 'fr' | 'en';
}

export default function Projects({ language }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'dev' | 'data'>('all');
  const allProjects = PORTFOLIO_DATA.projects;
  const projects = allProjects.filter(p => {
    if (filter === 'all') return true;
    if (Array.isArray(p.category)) {
      return p.category.includes(filter);
    }
    return p.category === filter;
  });
  
  const title = language === 'fr' ? 'PROJETS RÉCENTS' : 'RECENT WORK';
  const subtitle = language === 'fr' 
    ? 'Une sélection de mes travaux techniques et créatifs' 
    : 'A selection of my technical and creative endeavors';

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-16 md:py-32 relative">
      <div className="container px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              {title}
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-card border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-foreground'}`}
          >
            {language === 'fr' ? 'Tous les projets' : 'All Projects'}
          </button>
          <button
            onClick={() => setFilter('dev')}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${filter === 'dev' ? 'bg-primary text-primary-foreground' : 'bg-card border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-foreground'}`}
          >
            {language === 'fr' ? 'Développement' : 'Development'}
          </button>
          <button
            onClick={() => setFilter('data')}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${filter === 'data' ? 'bg-primary text-primary-foreground' : 'bg-card border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-foreground'}`}
          >
            Data Engineering
          </button>
        </div>

        {/* Bento Grid */}
        <motion.div 
          key={filter} // Force re-render animation when filter changes
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => {
            // Adjust spans based on number of items to make it look nice
            const isLarge = projects.length > 2 && (idx === 0 || idx === 3);
            
            return (
              <motion.div
                key={project.title}
                variants={item}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-colors duration-500 ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden ${isLarge ? 'h-[400px]' : 'h-[300px]'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  
                  {/* Floating Tech Stack (Top Right) */}
                  <div className="absolute top-6 right-6 flex flex-wrap justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Links */}
                      <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-100">
                        {project.links.map((link, lIdx) => {
                          const Icon = link.icon === 'Github' ? Github : link.icon === 'Code2' ? Code2 : ExternalLink;
                          return (
                            <a 
                              key={lIdx} 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                              title={link.label}
                            >
                              <Icon className="w-4 h-4" />
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    <p className="text-muted-foreground line-clamp-2 mb-4 group-hover:text-white/80 transition-colors">
                      {language === 'fr' ? project.descFr : project.descEn}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-200">
                       <span>{language === 'fr' ? 'Voir détails' : 'View Details'}</span>
                       <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}