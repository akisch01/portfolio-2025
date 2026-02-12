'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Download, ExternalLink, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

interface CertificationsProps {
  language: 'fr' | 'en';
}

export default function Certifications({ language }: CertificationsProps) {
  const certifications = PORTFOLIO_DATA.certifications;
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  
  // Split into rows
  const row1 = certifications.filter(c => c.category === 'dev');
  const row2 = certifications.filter(c => c.category !== 'dev');

  return (
    <section id="certifications" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            CERTIFICATIONS
          </span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          {language === 'fr' 
            ? "Une validation continue de mes compétences techniques à travers les standards de l'industrie."
            : "Continuous validation of my technical skills through industry standards."}
        </p>
      </div>

      {/* Marquee Container */}
      <div className="space-y-8 relative z-10">
        <MarqueeRow items={row1} direction="left" onSelect={setSelectedCert} />
        <MarqueeRow items={row2} direction="right" onSelect={setSelectedCert} />
      </div>

      {/* Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl w-full bg-card border border-white/10 rounded-2xl overflow-hidden p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden">
               <Image
                src={selectedCert.image}
                alt={selectedCert.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 flex items-center justify-between bg-card">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === 'fr' ? selectedCert.name : selectedCert.nameEn}
                </h3>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-muted-foreground uppercase">
                  {selectedCert.category}
                </span>
              </div>
              <div className="flex gap-2">
                {selectedCert.pdf && (
                  <a 
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    PDF
                  </a>
                )}
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

const MarqueeRow = ({ items, direction, onSelect }: { items: any[], direction: 'left' | 'right', onSelect: (c: any) => void }) => {
  // We duplicate items to create a seamless loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="relative flex overflow-hidden group">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{ 
          duration: 50, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex gap-4 px-2 group-hover:[animation-play-state:paused]"
      >
        {marqueeItems.map((cert, idx) => (
          <div 
            key={idx}
            onClick={() => onSelect(cert)}
            className="relative w-72 md:w-80 aspect-[4/3] flex-shrink-0 rounded-xl overflow-hidden border border-white/10 bg-card cursor-pointer hover:border-primary transition-colors"
          >
            <Image
              src={cert.image}
              alt={cert.name}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end">
              <p className="text-sm font-bold text-white line-clamp-2">{cert.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};